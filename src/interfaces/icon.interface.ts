import {Document} from "mongoose"
import { Status } from "../utils/consts";
import { IImage } from "./image.interface";
export interface IIcone extends IImage {}
export interface IIconeDocument extends IIcone, Document{}
