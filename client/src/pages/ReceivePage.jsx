import React, { useState } from "react";
import Lottie from "lottie-react";
import sendJson from "../assets/send.json";
import { FaIdCard } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
const ReceivePage = () => {
  const [createRoomBtn, setCreateRoomBtn] = useState(true);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCreateRoomBtn(false);
  };
  return (
    <main
      className="w-full h-dvh flex justify-center items-center"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {createRoomBtn ? (
        <form
          action=""
          onSubmit={handleOnSubmit}
          className="w-full h-dvh flex flex-col justify-center items-center bg-black bg-opacity-65"
        >
          <section
            className={`w-full h-dvh ${
              createRoomBtn ? "flex" : "hidden"
            } justify-center items-center `}
          >
            <div className="w-6/12 flex  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
              <section className="w-6/12 p-4 flex">
                <div
                  // action=""
                  className="flex flex-col justify-center items-center w-full gap-y-2 border"
                >
                  <h2 className="font-bold text-2xl text-blue-300 ">
                    Get Files
                  </h2>
                  <hr className="w-11/12 border-b border-white-400 mb-4" />
                  {/* <div> */}
                  <label htmlFor="" className="flex items-center border-b-2">
                    {/* <FaUser /> */}
                    <FaIdCard />
                    <input
                      type="text"
                      placeholder="Enter room name"
                      className="bg-transparent border-none outline-none p-2"
                    />
                  </label>
                  {/* </div>
                    <div> */}
                  <label htmlFor="" className="flex items-center border-b-2">
                    <MdLock />
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="bg-transparent border-none outline-none p-2"
                    />
                  </label>
                  {/* </div> */}
                  <button
                    type="submit"
                    // onClick={() => setToggleBtn(false)}
                    className="mt-3 px-4 py-2 rounded bg-blue-600 flex items-center gap-x-2 "
                  >
                    Receive Files <IoMdSend />
                  </button>
                  {/* <button type="button" onClick={() => setCreateRoomBtn(false)}>
                  Back
                </button> */}
                  <NavLink to={"/"}>Back</NavLink>
                </div>
              </section>
              <section className="w-6/12">
                <Lottie animationData={sendJson} className="w-full" />
              </section>
            </div>
          </section>
        </form>
      ) : (
        <div className="w-full h-dvh flex flex-col justify-center items-center bg-black bg-opacity-65">
          <section className="w-7/12 h-3/5 flex items-center justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  ">
            <section className="w-6/12 flex flex-col border rounded h-full p-3">
              <NavLink to={"/"}>Back</NavLink>
              <h3 className="text-center font-bold text-2xl">Receive Files</h3>
              <ul className="w-full flex flex-col px-2 py-2 gap-y-2 overflow-auto h-full">
                <li className="w-full flex p-2 justify-between items-center border">
                  <span>
                    <FaFileAlt />
                  </span>
                  <abbr
                    className="text-nowrap overflow-hidden w-5/6 no-underline"
                    title="1 as asdfasdf asdfasdf asfdasdf asasdfas dasdfsadf asdf sadf
                    asdfa sfdfd asdfsafd adsf.mp3"
                  >
                    1 as asdfasdf asdfasdf asfdasdf asasdfas dasdfsadf asdf sadf
                    asdfa sfdfd asdfsafd adsf.mp3
                  </abbr>
                  {/* <h4 className="text-nowrap overflow-hidden w-5/6">
                    1 as asdfasdf asdfasdf asfdasdf asasdfas dasdfsadf asdf sadf
                    asdfa sfdfd asdfsafd adsf.mp3
                  </h4> */}
                  {/* <button>
                    <FaCloudDownloadAlt className="text-2xl" />
                  </button> */}
                  <a href="" download="">
                    <FaCloudDownloadAlt className="text-2xl" />
                  </a>
                </li>
                <li className="w-full flex p-2 justify-between items-center border">
                  <span>
                    <FaFileAlt />
                  </span>
                  <h4 className="">adsf.mp3</h4>
                  {/* <button>
                    <FaCloudDownloadAlt className="text-2xl" />
                  </button> */}
                  <a href="" download="">
                    <FaCloudDownloadAlt className="text-2xl" />
                  </a>
                </li>
              </ul>
            </section>
            <section className="w-6/12">
              <Lottie animationData={sendJson} className="w-full" />
            </section>
          </section>
        </div>
      )}
    </main>
  );
};

export default ReceivePage;
