const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const File = require("./File");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// Upload API
app.post("/upload", upload.single("file"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    console.log("Upload API Called");

    const newFile = new File({
        filename: req.file.filename,
        filepath: `uploads/${req.file.filename}`
    });

    try {
        await newFile.save();
        console.log("File saved to MongoDB");
    } catch (error) {
        console.log("MongoDB save error:", error);
    }

    res.json({
        message: "File uploaded successfully",
        filename: req.file.filename,
        url: `http://localhost:3000/uploads/${req.file.filename}`
    });
});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//API Test
app.get("/api/test",(req,res) => {
    res.json({
        message: "Backend Connected Successfully"});
    });

//Connect Mongodb
mongoose.connect("mongodb://127.0.0.1:27017/fileSharing")
.then(() => {
    console.log("MongoDB connected");
    
// Start server
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000");
    });
})
.catch((err) => {
    console.log(err);
});