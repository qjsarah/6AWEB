//This file is saved inside the 'api' folder.

// import all packages installed
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

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
app.post("/posts/Addpost", upload.single("image"), async (req, res) => {
  try {
    const numOfDocs = await database.collection("posts").countDocuments();
    const imageUrl = req.file
      ? `http://localhost:5038/uploads/${req.file.filename}`
      : null;

    await database.collection("posts").insertOne({
      id: (numOfDocs + 1).toString(),
      title: req.body.title,
      image: imageUrl, // Save the actual image path
      content: req.body.content,
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
    await database.collection("posts").deleteOne({
      id: req.query.id,
    });

    res.json("Deleted successfully!");
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

// Serve uploaded images statically
app.use("/uploads", Express.static("uploads"));
