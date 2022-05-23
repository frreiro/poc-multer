import express from "express";
import cors from 'cors'
import multer from "multer";


const app = express();
app.use(cors())
// app.use(express.json())

const upload = multer({ dest: 'temp/' });

app.post('/upload', upload.single('img'), (req, res) => {
    const file = req.file;
    const body = req.body;
    console.log(body, file)
    res.status(200);
})


app.get('/upload', (req, res) => {
    res.sendStatus(200)
})

app.listen("5000", () => console.log("Running..."))