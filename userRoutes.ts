import {Router} from "express"
import { createUser, getUser , getUsers } from "./controller/userController"

const userRoutes = Router()

userRoutes.get("/" , getUsers)
userRoutes.get("/:userId" , getUser)
userRoutes.get("/new-user" , createUser)



export default userRoutes