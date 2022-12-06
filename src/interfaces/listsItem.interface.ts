import {Document} from "mongoose"
import { Status } from "../utils/consts";


export interface IListItem {
    icon:string
    title:string
    tag:string
    status:Status
}
export interface IListItemDocument extends IListItem, Document{}
