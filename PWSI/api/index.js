// import all packages installed
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
var cors = require("cors");
const multer = require("multer");
const fs = require('fs');
const path = require('path');

// Create an instance of express app
var app = Express();
// Make use of the CORS module
app.use(cors());

// Indicate the connection string from mongodb
var CONNECTION_STRING =
  "mongodb+srv://user:userpass@cluster0.8eiyg.mongodb.net/";

// Indicate the name of the database
var DATABASENAME = "PWSIDB";

// Instantiate the mongodb client
var database;

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Create a listener
app.listen(5038, () => {
  Mongoclient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASENAME);
    console.log(`Yay! Now connected to Cluster`);
  });
});

// ROUTES TO ALL ACTIONS

// Get all database data
app.get("/posts/getPosts", (req, res) => {
  database.collection("posts").find({}).toArray((error, result) => {
      res.send(result);
    });
});

// Add a new post (Handles File Uploads)
app.post("/posts/addPost", upload.single("image"), async (req, res) => {
  try {
    const numOfDocs = await database.collection("posts").countDocuments();
    const imageUrl = req.file
      ? `http://localhost:5038/uploads/${req.file.filename}`
      : null;

    await database.collection("posts").insertOne({
      title: req.body.title,
      image: imageUrl, 
      content: req.body.content,
      createdAt: new Date().toISOString()
    });

    res.json("Added Successfully");
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ error: "Failed to add post" });
  }
});

// Delete a post
app.delete("/posts/Deletepost", async (req, res) => {
  try {
    // Find the existing post
    const id = req.query.id;
    const post = await database.collection("posts").findOne({ id });
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    // Delete the old image if it exists
    const oldImagePath = path.join(__dirname, "uploads", path.basename(post.image));
    if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Delete the old file
    }
    await database.collection("posts").deleteOne({ id });

    res.json("Deleted successfully!");
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// Get post with specific id
app.get('/posts/GetPost/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    // Validate ObjectId to prevent errors
    if (!ObjectId.isValid(postId)) {
      return res.status(400).json({ error: 'Invalid post ID' });
    }

    const post = await database.collection('posts').findOne({ _id: new ObjectId(postId) });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

  
// Edit a post (Handles File Uploads)
app.put("/posts/Editpost/:id", upload.single("image"), async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content } = req.body;
    
        // Find the existing post
        const post = await database.collection("posts").findOne({ _id: new ObjectId(postId) });

        if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      let imageUrl = post.image; // Keep old image by default
     
      if (req.file) {
        const newImagePath = `http://localhost:5038/uploads/${req.file.filename}`;
  
        // Delete the old image if it exists
        const oldImagePath = path.join(__dirname, "uploads", path.basename(post.image));
        if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Delete the old file
        }
  
        imageUrl = newImagePath; // Set new image path
      }

      // Update the post in the dbase
      await database.collection("posts").updateOne(
        { _id: new ObjectId(postId) },
        { $set: { title, content, image: imageUrl } }
      );
  
      res.json("Updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ error: "Failed to update post" });
    }
  });
  
// Serve uploaded images statically
app.use("/uploads", Express.static("uploads"));
