📁 File Sharing Application

📌 Project Overview

The File Sharing Application is a web-based application developed as part of a Cloud Computing project. It provides a simple and convenient way to upload and store media files, including images and videos.

The project was initially developed with basic file-sharing functionality and later enhanced with an improved file-upload mechanism. The updated version allows users to upload both pictures and videos, which are automatically stored in a dedicated "uploads" folder on the server.

The application uses Node.js and Express.js for backend processing, Multer for handling file uploads, and MongoDB for database integration.

🎯 Project Objectives

- To develop a functional web-based file-sharing application.
- To implement image and video uploading functionality.
- To enable automatic storage of uploaded media files.
- To understand client-server communication.
- To integrate MongoDB with a Node.js application.
- To gain practical experience with backend development and file management.

✨ Key Features

- Image Upload: Allows users to upload picture and image files.
- Video Upload: Supports uploading video files, including large video files up to 1 GB.
- Automatic File Storage: Uploaded files are automatically saved in the "uploads" folder.
- File Handling: Uses Multer middleware to process file uploads.
- Backend Integration: Node.js and Express.js manage server-side operations.
- Database Integration: Uses MongoDB for database operations.
- Database Management: MongoDB Compass provides a graphical interface to manage and inspect the database.
- User-Friendly Interface: Provides a simple interface for interacting with the application.

🛠️ Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js

Database

- MongoDB
- MongoDB Compass

File Upload

- Multer

Development Tools

- Visual Studio Code
- Git
- GitHub

📂 Project Structure

File-Sharing-Application/
│
├── uploads/
│   └── Uploaded images and videos
│
├── file.js
├── router.js
├── index.html
├── script.js
├── style.css
├── package.json
└── package-lock.json

⚙️ Installation and Setup

1. Install Dependencies

Open the project folder in VS Code and execute:

npm install

2. Configure MongoDB

- Open MongoDB Compass.
- Connect to your local MongoDB server.
- Ensure that the MongoDB connection configuration in the backend is correct.

3. Start the Application

Run the backend server:

node server.js

4. Access the Application

Open the local server address configured in your application in a web browser.

🔄 Application Workflow

1. The user opens the File Sharing Application.
2. The user selects an image or video from their device.
3. The selected file is submitted through the web interface.
4. The backend receives the upload request using Express.js.
5. Multer processes the uploaded media file.
6. The uploaded file is automatically saved in the "uploads" folder.
7. MongoDB is used for database operations and can be managed through MongoDB Compass.

☁️ Cloud Computing Concepts

This project demonstrates practical implementation of the following concepts:

- Client-server architecture.
- File uploading and storage management.
- Backend request and response handling.
- Database connectivity.
- Media file processing.
- Frontend and backend integration.
- Server-side file management.

🔮 Future Enhancements

- User authentication and authorization.
- Secure file-sharing functionality.
- Cloud storage integration.
- File downloading and sharing links.
- Improved file organization and management.
- Enhanced security and file validation.
