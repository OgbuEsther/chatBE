import mongoose from "mongoose";

interface chat {
  member?: Array<string>;
}
interface Ichat extends chat, mongoose.Document {}

const chatSchame = new mongoose.Schema<chat>(
  {
    member: {
      type: Array<String>,
    },
  },
  { timestamps: true }
);

const chatModel = mongoose.model<Ichat>("AllChats", chatSchame);

export default chatModel;
