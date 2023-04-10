const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const app = express();
const mysql = require('mysql2');
const multer = require('multer');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.post("/save-name", (req, res) => {
    const { name, surname, email, password } = req.body;

    connection.execute(
        'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)',
        [id, name, surname, email, password],
        (err, results) => {
            console.log("index::::", results);
            res.json({ success: true, id, name, surname, email, password })
            console.log(name);
        }
    );
});

app.post('/check-login', (req, res) => {
    const { email, password } = req.body;
    connection.execute(
        'SELECT name, surname, email, password FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err, results, fields) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            if (results.length > 0) {
                const { name, surname, email } = results[0];
                res.json({ success: true, id, name, surname, email, password });
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
            }
        }
    );
});

app.post('/update-password', (req, res) => {
    const { id, password } = req.body;
    connection.execute(
        'UPDATE users SET password = ? WHERE id = ?',
        [password, id],
        (err, results, fields) => {
            res.json({ success: true})
        }
    );
});

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

// Set up multer middleware
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
});

// Endpoint for uploading files
app.post('/upload', upload.single('photo'), function (req, res) {
    // res.send('File uploaded successfully!');
    const imagePath = path.join('images/uploads', req.file.filename);
    res.json({ success: true, imagePath });
});

// Endpoint for retrieving images
app.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, 'public/images/uploads', filename);
    res.sendFile(imagePath);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
