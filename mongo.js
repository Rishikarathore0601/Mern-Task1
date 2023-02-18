const mongoose=require("mongoose")
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://0.0.0.0:27017/react-pro-db")
.then(()=>{
    console.log("mongodb connected");
}
)
.catch(()=>{
    console.log('failed');

})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const collection=mongoose.model("collection",newSchema)
module.exports=collection