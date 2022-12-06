import {Schema,model} from "mongoose"
import {IListItem,IListItemDocument} from "../interfaces/listsItem.interface"
import { Status } from "../utils/consts";
const ListItemSchema = new Schema({
    icon:{
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
export default model<IListItemDocument>("ListItem", ListItemSchema);

