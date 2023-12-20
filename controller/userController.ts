import userModel from "../userModel";

import { Request, Response } from "express";

//create

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.create({
      name,
      email,
      password,
    });
    return res.status(400).json({
      message: "couldn't create user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't create user",
      data: error,
    });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findByIdAndUpdate(
      req.params.userId,
      {
        name,
        email,
        password,
      },
      { new: true }
    );
    return res.status(400).json({
      message: "couldn't create user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't create user",
      data: error,
    });
  }
};
//create

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findById(req.params.userId);
    return res.status(400).json({
      message: " get user",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get user",
      data: error,
    });
  }
};
//create

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();
    return res.status(400).json({
      message: " get users",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get users",
      data: error,
    });
  }
};
export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      if (user?.password === password) {
        return res.status(200).json({
          message: "user login ",
          data: user,
        });
      } else {
        return res.status(400).json({
          message: "wrong password or email",
        });
      }
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
    return res.status(400).json({
      message: " get users",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get users",
      data: error,
    });
  }
};
