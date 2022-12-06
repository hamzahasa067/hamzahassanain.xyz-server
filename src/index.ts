import express, {Request, Response, NextFunction} from "express";
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_URL).then(res =>
    app.listen(port, () => {
        console.log("Server is running .....");
    })).catch(err => {
        console.error(err);
    })
// Database => mongo => mongoose 
// 	1 => texts => {_id,content, title, tag, status}
// 	2 => images =>{_id,src, alt, tag, linkOnPress,status}
// 	3 => listsItem => {_id,title,content, tag,status }
// 	4 => links =>{_id,title,icon,tag,status}
	
	