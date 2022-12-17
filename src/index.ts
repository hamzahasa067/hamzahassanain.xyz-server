import express, {Request, Response, NextFunction} from "express";
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import  AuthenticatAdmin  from "./middlewares/AuthenticatAdmin";
import FrontEndRouter from "./routes/front-end.route"
import AdminLoginRouter from "./routes/adminLogin.route"
import IconRouter from "./routes/icon.route"
import ImageRouter from "./routes/image.route"
import TextsRouter from "./routes/texts.route"
import ListItemRouter from "./routes/listItem.route"
dotenv.config()

const app = express()
const port = process.env.PORT;
app.set('view engine', 'ejs');

// app.use(cors({}))

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use("/api/all" , FrontEndRouter)
app.use("/auth/" ,  AdminLoginRouter)
app.use("/image/" , AuthenticatAdmin , ImageRouter )
app.use("/texts/" ,AuthenticatAdmin,  TextsRouter )
app.use("/icon/" , AuthenticatAdmin, IconRouter )
app.use("/listItem/" , AuthenticatAdmin , ListItemRouter )

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL).then(res =>
    app.listen(port, async () => {
        console.info("Server is running .....");
    })).catch(err => {
        console.error(err);
    })
