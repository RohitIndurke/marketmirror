import mongoose,{Schema,model,models} from "mongoose";

const sectorShema = new Schema({
    name: String,
    value:Number,
    percentage:String,
    color:String,
    clerkId:{
        type:String,
        required:true
    }
});
const Sector = models.Sector || model("Sector",sectorShema);
export default Sector;