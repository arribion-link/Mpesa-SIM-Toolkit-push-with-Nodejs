import express from "express";
import ejs from "ejs";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// controller
import lipaController from "./controllers/lipa.Controller.js"; 

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("public", express.static(__dirname));

app.get("/", (req, res) => {
    res.send("<h1>implement mpesa stk push</h1>"); 
});

app.use('/send', lipaController);


// axios.post()

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})