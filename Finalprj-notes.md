Final Presentation:
- Documention
- wireframe and mockup
- final application

# Backend

## Collection
- volunteer
  - volunteer id PK
  - name
  - contact number
  - email
  - message
- subscriber
  - email
- contact
  - contact id PK
  - name
  - email
  - subject
  - message
- admin
  - admin id PK
  - username
  - email
- posts (for admin)
  - post ID PK
  - admin ID FK
  - title
  - image
  - content (time and location, body-text)

forms:
- volunteer form
- contact form
- post form

admin login (optional)
