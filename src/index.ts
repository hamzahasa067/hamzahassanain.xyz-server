import express, {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT;

// new commnet un saved
app.listen(port, () => {
    console.log("Server is running .....");
})