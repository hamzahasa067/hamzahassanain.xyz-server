import {Schema,model} from "mongoose"
import {IText,ITextDocument} from "../interfaces/text.interface"
import { Status } from "../utils/consts";
const TextSchema = new Schema({
    content:{
        required:true,
        type:String
    },
    title:{
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
export default model<ITextDocument>("Text", TextSchema);

