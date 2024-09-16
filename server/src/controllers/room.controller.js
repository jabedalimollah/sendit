import Room from "../models/room.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { deleteFile, uploadFile } from "../utils/cloudinary.js";

const createRoom = asyncHandler(async (req, res) => {
  const { roomName, password } = req.body;
  if (roomName?.trim() === "" || password?.trim() === "") {
    // if (roomName?.trim() === "" || password?.trim() === "") {
    throw new ApiError(400, "All fields are required");
  }
  const existRoomName = await Room.findOne({ roomName });
  if (existRoomName) {
    throw new ApiError(409, "Room name already exist");
  }

  //   const filesLocalPath = req.files?.allFiles[0]?.path;
  const filesLocalPath = req.files.allFiles?.map((item) => item.path);
  //   console.log("files", req.files, "path", filesLocalPath);

  if (!filesLocalPath) {
    throw new ApiError(400, "Files is required");
  }
  const filesData = await uploadFile(filesLocalPath);
  if (!filesData) {
    throw new ApiError(400, "Files is required");
  }
  //   console.log("filesdata", filesData);
  const createRoom = await Room.create({
    roomName,
    password,
    // allFiles: {
    //   url: filesData.map((item) => item.url),
    //   path: filesData.map((item) => item.original_filename),
    // },
    allFiles: filesData.map((item) => ({
      url: item.url,
      filename: item.original_filename,
    })),
  });
  if (!createRoom) {
    throw new ApiError(500, "Something went wrong while creating the Room");
  }

  //   return res.status(200).json({ createRoom });
  return res
    .status(200)
    .json(new ApiResponse(200, createRoom, "Room Created Successfully"));
});

const getRoomData = asyncHandler(async (req, res) => {
  const { roomName, password } = req.body;
  const getData = await Room.findOne({ $and: [{ roomName }, { password }] });
  if (!getData) {
    throw new ApiError(404, "Room not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, getData, "Room Data fetched successfully"));
});

const deleteRoom = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { allFilesName } = req.body;

  // const imageFiles = allFilesName.filter((url) => {
  //   // Extract the file extension and check if it's an image
  //   const extension = url.split(".").pop();
  //   return ["png", "jpg", "jpeg", "gif", "pdf"].includes(extension);
  // });

  // const imageNames = imageFiles.map((url) => {
  //   // Split the URL by '/' and get the last part, which is the file name
  //   return url.split("/").pop();
  // });
  // const imageNames = allFilesName.map((url) => {
  //   // Extract the file name with extension
  //   const fileNameWithExtension = url.split("/").pop();

  //   // Remove the extension and return only the file name
  //   const fileName = fileNameWithExtension.split(".").slice(0, -1).join(".");

  //   return fileName;
  // });
  const fileNames = allFilesName.map((url) => {
    // Split the URL by '/' and get the last part, which is the file name with extension
    return url.split("/").pop();
  });

  // console.log(imageNames);
  // const deleteFiles = await deleteFile(fileNames);
  const deleteData = await Room.findByIdAndDelete(id);
  if (!deleteData) {
    throw new ApiError(404, "Room id not found");
  }
  const deleteFiles = await deleteFile(fileNames);

  res
    .status(200)
    .json(new ApiResponse(200, deleteData, "Deleted Successfully"));
});

export { createRoom, getRoomData, deleteRoom };
