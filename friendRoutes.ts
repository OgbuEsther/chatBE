import {Router} from "express"
import { getUser , getUsers } from "./controller/userController"
import { beFriend, unFriend } from "./controller/friendController"

const friendRoutes = Router()

friendRoutes.post("/:userId/:friendId/be-friends" , beFriend)
friendRoutes.post("/:userId/:friendId/un-friends" , unFriend)



export default friendRoutes