"use client";

import {
  Home,
  Work,
  ArticleOutlined,
  Contacts,
  Article,
  HomeOutlined,
  WorkOutline,
  ContactsOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { SpaceMedium } from "../(fonts)/font";

const NavButtons = () => {
  // const [buttonClicked, setButtonClicked] = useState("about");
  return (
    <div
      className={` p-3 flex gap-6 justify-end items-center ${SpaceMedium.className}`}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            // onClick={() => {
            //   setPage("about");
            //   setButtonClicked("about");
            // }}
            className={` p-3 rounded-lg bg-slate-400 `}
          >
            {<Home sx={{ color: "white" }} />}
          </button>
        </div>
        <div>
          <h1>Home</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            // onClick={() => {
            //   setPage("resume");
            //   setButtonClicked("resume");
            // }}
            className={` p-3 rounded-lg bg-slate-400`}
          >
            <Article sx={{ color: "white" }} />
          </button>
        </div>
        <div>
          <h1>Resume</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            // onClick={() => {
            //   setPage("work");
            //   setButtonClicked("work");
            // }}
            className={` p-3 rounded-lg bg-slate-400 `}
          >
            <Work sx={{ color: "white" }} />
          </button>
        </div>
        <div>
          <h1>Work</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            // onClick={() => {
            //   setPage("contact");
            //   setButtonClicked("contact");
            // }}
            className={` p-3 rounded-lg bg-slate-400`}
          >
            <Contacts sx={{ color: "white" }} />
          </button>
        </div>
        <div>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
