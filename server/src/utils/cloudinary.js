import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import pLimit from "p-limit";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }

    console.log("localFilePath", localFilePath);

    let uploadResult = [];
    for (const filePath in localFilePath) {
      uploadResult[filePath] = await cloudinary.uploader.upload(
        localFilePath[filePath],
        { resource_type: "raw" }
      );
      // console.log(uploadResult);
    }
    // console.log("uploadResult", uploadResult);

    localFilePath.forEach((filePath) => {
      try {
        fs.unlinkSync(filePath); // Delete the file synchronously
        // console.log(`Successfully deleted: ${filePath}`);
      } catch (err) {
        // console.error(`Error deleting file: ${filePath}`, err);
      }
    });

    return uploadResult;
  } catch (error) {
    // console.log(error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

const deleteFile = async (filesName) => {
  // console.log(filesName);
  try {
    // cloudinary.uploader.destroy(filesName, { resource_type: "raw" }, (error, result) => {
    cloudinary.api.delete_resources(
      filesName,
      { resource_type: "raw" },
      (error, result) => {
        // console.log(error, result);
      }
    );
    cloudinary.api.delete_resources(
      filesName,
      { resource_type: "video" },
      function (error, result) {
        if (error) {
          console.error("Error deleting files:", error);
        } else {
          console.log("Files deleted successfully:", result);
        }
      }
    );
    // return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const limit = pLimit(10);
const uploadFile1 = async (localFilePath) => {
  const fileUpload = localFilePath.map((file) => {
    return limit(async () => {
      const uploadResult = await cloudinary.uploader.upload(file, {
        resource_type: "row",
      });
    });
  });
  let uploads = await Promise.all(fileUpload);
  console.log(uploads);
  return uploads;
};

export { uploadFile, deleteFile };

const uploadFile111 = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }

    // console.log("localFilePath", localFilePath);
    // Upload File
    // const uploadResult = await cloudinary.uploader.upload(localFilePath, {
    //   resource_type: "auto",
    // });
    let uploadResult = [];
    for (const image in localFilePath) {
      uploadResult[image] = await cloudinary.uploader.upload(
        localFilePath[image],
        { resource_type: "raw" }
      );
      // console.log(uploadResult);
    }
    // console.log("uploadResult", uploadResult);
    // file has been uploaded successfull
    // console.log("file is uploaded on cloudinary ", uploadResult.url);
    // fs.unlinkSync(localFilePath); // Remove the locally saved temporary file
    localFilePath.forEach((filePath) => {
      try {
        fs.unlinkSync(filePath); // Delete the file synchronously
        // console.log(`Successfully deleted: ${filePath}`);
      } catch (err) {
        // console.error(`Error deleting file: ${filePath}`, err);
      }
    });

    return uploadResult;
  } catch (error) {
    // console.log(error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};
