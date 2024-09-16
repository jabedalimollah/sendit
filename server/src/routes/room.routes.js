import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoomData,
} from "../controllers/room.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/create").post(
  upload.fields([
    {
      name: "allFiles",
      //   maxCount: 8,
    },
  ]),
  createRoom
);
router.route("/receive").get(getRoomData);
router.route("/delete/:id").delete(deleteRoom);

export default router;
