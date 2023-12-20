import mongoose from "mongoose"

interface user {
    name: string
    email: string
    password: string
    // friends : {}[]
    friends : Array<string>

}


interface Iuser extends user , mongoose.Document{}

const userSchema = new mongoose.Schema({
    name  : {
        type : String
    },
    email  : {
        type : String
    },
    password  : {
        type : String
    },
    friends  : {
        type : Array<String>
    },
} , {timestamps:true})


const userModel = mongoose.model<Iuser>("AllUsers" , userSchema)


export default userModel