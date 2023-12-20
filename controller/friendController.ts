import { Request, Response } from "express";
import mongoose from "mongoose";
import userModel from "../userModel";

export const beFriend = async (req: Request, res: Response) => {
  try {
    const friend: any = await userModel.findById(req.params.friendId);
    const user: any = await userModel.findById(req.params.userId);

    if (user && friend) {
      friend.friends.push(req.params.userId);
      friend.save();
      user.friends.push(req.params.friendId);
      user.save();
    }

    res.status(201).json({
      message: "friends",
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
export const unFriend = async (req: Request, res: Response) => {
  try {
    const friend: any = await userModel.findById(req.params.friendId);
    const user: any = await userModel.findById(req.params.userId);

    if (user && friend) {
      friend.friends.pull(req.params.userId);
      friend.save();
      user.friends.pull(req.params.friendId);
      user.save();
    }

    res.status(201).json({
      message: "not friends",
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
