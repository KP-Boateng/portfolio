"use client";

import Image from "next/image";
import profilePhoto from "../../public/photo_2_2023-10-01_00-33-11.jpg";
import { GitHub, LinkedIn, WhatsApp, YouTube } from "@mui/icons-material";
import ContactCard from "./ContactCard";
import { SpaceBold, SpaceMedium } from "../(fonts)/font";
import { useAppContext } from "./AppContext";
import { TypeAnimation } from "react-type-animation";

const ProfilePhoto = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div
      className={` p-3 justify-center items-center rounded-2xl  ${
        theme === "light" ? "bg-white" : "bg-slate-900 text-white"
      } `}
    >
      <div>
        <Image
          src={profilePhoto}
          className=" rounded-2xl"
          alt="profile photo"
        />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <div>
          <h1
            className={` text-center text-2xl font-extrabold ${SpaceMedium.className}`}
          >
            Boateng Paul
          </h1>
        </div>
        {/* <div>
          <h3
            className={` text-base text-center font-semibold ${SpaceMedium.className}`}
          >
            Front End Developer
          </h3>
        </div> */}
        <div>
          <TypeAnimation
            className=" text-base text-center font-semibold"
            sequence={[
              "Front End Developer", // Types 'One'
              1000, // Waits 1s
              "Graphic Designer(Photoshop)", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Front End Developer",
              // "Two Three", // Types 'Three' without deleting 'Two'
              // () => {
              //   console.log("Sequence completed");
              // },
            ]}
            preRenderFirstString={true}
            wrapper="h1"
            cursor={true}
            // repeat={1}
          />
        </div>
      </div>
      <div className="flex gap-2 w-full mt-3">
        <div className="flex-1">
          <a
            href="https://wa.me/+233556849078"
            rel="noreferrer"
            target="_blank"
          >
            <button className=" text-blue-400 p-1 h-full w-full rounded-md">
              <WhatsApp />
            </button>
          </a>
        </div>
        <div className="flex-1">
          <button className=" text-blue-400 p-1 h-full w-full rounded-md">
            <a
              href="https://www.linkedin.com/in/paul-boateng-932943204"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </button>
        </div>
        <div className="flex-1">
          <button className=" text-blue-400 p-1 h-full w-full rounded-md">
            <a
              href="https://github.com/KP-Boateng"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub />
            </a>
          </button>
        </div>
        <div className="flex-1">
          <button className=" text-blue-400 p-1 h-full w-full rounded-md">
            <a
              href="https://www.youtube.com/@chhlyricsvideos5427"
              rel="noreferrer"
              target="_blank"
            >
              <YouTube />
            </a>
          </button>
        </div>
      </div>
      <ContactCard />
    </div>
  );
};

export default ProfilePhoto;
