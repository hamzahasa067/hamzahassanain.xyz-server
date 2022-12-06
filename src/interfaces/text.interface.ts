import {Document} from "mongoose"
import { Status } from "../utils/consts";


export interface IText {
    content:string
    title:string
    tag:string
    status:Status
}
export interface ITextDocument extends IText, Document{}
