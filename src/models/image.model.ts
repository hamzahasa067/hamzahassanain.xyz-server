import {Schema,model} from "mongoose"
import {IImage,IImageDocument} from "../interfaces/image.interface"
import { Status } from "../utils/consts";

const ImageSchema = new Schema({
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
export default model<IImageDocument>("Image", ImageSchema);

