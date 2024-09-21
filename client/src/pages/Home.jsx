import React from "react";
import Lottie from "lottie-react";
import sendJson from "../assets/send.json";
import receiveJson from "../assets/receive.json";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Home = () => {
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
        <div className="w-full h-dvh flex justify-center items-center bg-black bg-opacity-65">
          <section className="w-6/12 flex gap-x-5">
            <section className="w-6/12 flex flex-col justify-center items-center  py-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 borders border-purple-400 shadow-sm shadow-purple-500 hover:shadow-lg">
              <div className="w-8/12 h-5/6">
                <Lottie animationData={sendJson} className="w-full" />
                {/* <RiSendPlaneFill /> */}
              </div>

              {/* <h2>Send</h2> */}
              <div className="w-full flex items-center justify-center">
                <NavLink
                  to={"/send"}
                  className={
                    "w-10/12 text-center p-3 sbuttons  bg-purple-600 font-bold rounded-md hover:bg-purple-700 "
                  }
                >
                  Send ✨
                </NavLink>
              </div>
            </section>
            <section className="w-6/12 flex flex-col justify-center items-center  py-5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 borders border-blue-400 shadow-sm shadow-blue-500 hover:shadow-lg">
              <div className="w-8/12 h-5/6">
                <Lottie animationData={receiveJson} className="w-full" />
                {/* <RiSendPlaneFill /> */}
              </div>

              {/* <h2>Send</h2> */}
              <div className="w-full flex items-center justify-center">
                <NavLink
                  to={"/receive"}
                  className={
                    "w-10/12 text-center p-3 sbuttons  bg-blue-600 font-bold rounded-md hover:bg-blue-700"
                  }
                >
                  Receive ✨
                </NavLink>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
