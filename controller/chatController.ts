import { Request, Response } from "express";
import userModel from "../userModel";
import chatModel from "../model/chatModel";

export const creatChat = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;
    const friend: any = await userModel.findById(req.params.friendId);
    const user: any = await userModel.findById(req.params.userId);

    const checkUser = user.friends.some((el: string) => el === friendId);
    const checkFriend = friend.friends.some((el: string) => el === userId);

    if (checkUser && checkFriend) {
      const chat = await chatModel.create({
        member: [userId, friendId],
      });

      return res.status(200).json({
        message: "chatting",
        data: chat,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};

//get chat
export const getChat = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    const chat = await chatModel.find({
      member: {
        $all: [userId],
      },
    });

    return res.status(200).json({
      message: "chatting",
      data: chat,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};

export const getSpecificChat = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;

    const chat = await chatModel.findOne({
      member: {
        $in: [userId, friendId],
      },
    });

    return res.status(200).json({
      message: "chatting",
      data: chat,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
    });
  }
};
