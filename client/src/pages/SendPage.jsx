import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import sendJson from "../assets/send.json";
import { FaUser } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { SendData } from "../utils/apiCall";

const SendPage = () => {
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [allFiles, setAllFiles] = useState([]);
  const [createRoomBtn, setCreateRoomBtn] = useState(1);
  const [toggleBtn, setToggleBtn] = useState(true);
  const getFilesValue = (e) => {
    setAllFiles((prevItems) => [...prevItems, ...e.target.files]);
    // setFiles(e.target.files);
    // console.log(files);

    // var reader = new FileReader();
    // reader.onloadend = function () {
    //   console.log(reader.result);
    // };
    // reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    const formData = new FormData();
    formData.append("roomName", roomName);
    formData.append("password", password);
    for (let i = 0; i < allFiles.length; i++) {
      formData.append("allFiles", allFiles[i]);
    }
    // console.log(roomName, password, allFiles);
    const data = await SendData(formData);
    // const data = await SendData({ roomName, password, allFiles });

    for (let pair of formData.entries()) {
      if (pair[1] instanceof File) {
        // console.log(`${pair[0]}: ${pair[1].name}, size: ${pair[1].size} bytes`);
      } else {
        // console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
    // console.log(formData);

    // const data = await SendData(formData);
    // console.log(data);
    setToggleBtn(false);
  };
  return (
    <>
      <main
        className="w-full h-dvh flex justify-center items-center"
        style={{
          backgroundImage: "url(/background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {toggleBtn ? (
          <form
            // action=""
            onSubmit={handleSubmit}
            // method="post"
            // encType="multipart/form-data"
            className="w-full h-dvh flex flex-col justify-center items-center bg-black bg-opacity-65"
          >
            {/* <div className="w-full flex  border">
            <NavLink
              to={"/"}
              className={
                "flex justify-center items-center gap-2 text-purple-200 p-2"
              }
            >
              <span>
                <IoArrowBackOutline />
              </span>
              <span> Back</span>
            </NavLink>
          </div> */}
            {/* {createRoomBtn === 1 ? ( */}
            <section
              className={`w-8/12 h-5/6 ${
                createRoomBtn === 1 ? "flex" : "hidden"
              }  flex-col gap-y-4 justify-center items-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-7`}
            >
              <div
                //  action=""
                className="w-8/12 h-5/6 pt-3 "
              >
                <h2 className="text-center py-2 font-bold text-2xl text-blue-400">
                  File Upload
                </h2>
                <div className="w-full h-4/5 flex relative">
                  <label
                    htmlFor="sendFile"
                    className="w-full h-full shadow-sms shadow-blue-400  border border-dashed border-blue-400  p-6 absolute left-0 top-0 flex flex-col justify-center items-center text-blue-400"
                  >
                    <span>
                      <FaCloudDownloadAlt className="text-6xl" />
                    </span>
                    <span>Browser file to upload</span>
                  </label>
                  <input
                    type="file"
                    id="sendFile"
                    className="hidden"
                    multiple
                    onChange={getFilesValue}
                  />
                </div>
              </div>
              {/* <h1>{files.map((item) => item.name)}</h1> */}

              <div className="w-8/12 h-5/6 flex flex-col justify-centers items-center borders border-white py-2 overflow-auto gap-y-2">
                {allFiles.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center p-4 gap-x-3 bg-slate-800  rounded borders border-white"
                  >
                    <div>
                      <FaFileAlt />
                    </div>
                    <h2>{item.name}</h2>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-3">
                <NavLink
                  to={"/"}
                  className={
                    "py-2 px-4 bg-purple-600 rounded flex justify-center items-center gap-2 "
                  }
                >
                  <span>
                    <IoArrowBackOutline />
                  </span>
                  <span> Back</span>
                </NavLink>
                <button
                  type="button"
                  className="py-2 px-4 bg-blue-600 rounded"
                  onClick={() => setCreateRoomBtn(2)}
                >
                  Create Room
                  {/* 🚀 */}✨
                </button>
              </div>
            </section>
            {/* ) : ( */}
            <section
              className={`w-full h-dvh ${
                createRoomBtn === 2 ? "flex" : "hidden"
              } justify-center items-center `}
            >
              <div className="w-6/12 flex  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                <section className="w-6/12 p-4 flex">
                  <div
                    // action=""
                    className="flex flex-col justify-center items-center w-full gap-y-2 border"
                  >
                    <h2 className="font-bold text-2xl text-blue-300 ">
                      Create A Room
                    </h2>
                    <hr className="w-11/12 border-b border-white-400 mb-4" />
                    {/* <div> */}
                    <label htmlFor="" className="flex items-center border-b-2">
                      {/* <FaUser /> */}
                      <FaIdCard />
                      <input
                        type="text"
                        value={roomName}
                        placeholder="Enter room name"
                        className="bg-transparent border-none outline-none p-2"
                        onChange={(e) => setRoomName(e.target.value)}
                      />
                    </label>
                    {/* </div>
                    <div> */}
                    <label htmlFor="" className="flex items-center border-b-2">
                      <MdLock />
                      <input
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        className="bg-transparent border-none outline-none p-2"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    {/* </div> */}
                    <button
                      type="submit"
                      // onClick={() => setToggleBtn(false)}
                      className="mt-3 px-4 py-2 rounded bg-blue-600 flex items-center gap-x-2 "
                    >
                      Send Files <IoMdSend />
                    </button>
                    <button type="button" onClick={() => setCreateRoomBtn(1)}>
                      Back
                    </button>
                  </div>
                </section>
                <section className="w-6/12">
                  <Lottie animationData={sendJson} className="w-full" />
                </section>
              </div>
            </section>
            {/* )} */}
          </form>
        ) : (
          <div className="w-full h-dvh flex flex-col justify-center items-center bg-black bg-opacity-65">
            <section className="w-7/12 flex items-center justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  ">
              <section className="w-6/12 flex flex-col border h-full p-3">
                <NavLink to={"/"}>Back</NavLink>
                <h3 className="text-center font-bold text-2xl">Send Data</h3>
              </section>
              <section className="w-6/12">
                <Lottie animationData={sendJson} className="w-full" />
              </section>
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default SendPage;
