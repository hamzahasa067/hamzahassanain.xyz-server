import {Document} from "mongoose"
import { Status } from "../utils/consts";

export interface IImage {
    src:string
    alt:string
    tag:string
    linkOnPress:string,
    status:Status
}
export interface IImageDocument extends IImage, Document{}
