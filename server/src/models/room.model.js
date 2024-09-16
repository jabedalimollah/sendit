import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      unique: true,
      required: [true, "Room name is Required"],
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    allFiles: [
      {
        url: {
          type: String,
          required: [true, "File URL is required"],
        },
        filename: {
          type: String,
          required: [true, "File path is required"],
        },
      },
    ],
    // allFiles: [
    //   {
    //     type: String,
    //     required: true,
    //   },
    // ],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

roomSchema.plugin(mongooseAggregatePaginate);
const Room = mongoose.model("Room", roomSchema);
export default Room;
