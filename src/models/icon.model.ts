import {Schema,model} from "mongoose"
import {IIcone,IIconeDocument} from "../interfaces/icon.interface"
import { Status } from "../utils/consts";

const IconeSchema = new Schema({
    src:{
        required:true,
        type:String
    },
    alt:{
        required:true,
        type:String
    },
    linkOnPress:{
        required:true,
        type:String
    },
    tag:{
        required:true,
        type:String
    },
    status:{
        required:true,
        enum:[Status.NotPublished,Status.Published],
        type:String,
        default:Status.NotPublished
    }
})
export default model<IIconeDocument>("Icon", IconeSchema);

