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
import { useAppContext } from "./AppContext";

const NavButtons = () => {
  const { theme, setTheme } = useAppContext();
  const { page, setPage } = useAppContext();
  return (
    <div
      className={` p-3 flex gap-6 justify-end items-center ${SpaceMedium.className} `}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <button
          onClick={() => {
            setPage("about");
          }}
          className={` p-3 rounded-lg bg-slate-400 `}
        >
          {page === "about" ? (
            <Home sx={{ color: "white" }} />
          ) : (
            <HomeOutlined sx={{ color: "white" }} />
          )}
        </button>

        <h1>Home</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <button
          onClick={() => {
            setPage("resume");
            // setButtonClicked("resume");
          }}
          className={` p-3 rounded-lg bg-slate-400`}
        >
          {page === "resume" ? (
            <Article sx={{ color: "white" }} />
          ) : (
            <ArticleOutlined sx={{ color: "white" }} />
          )}
        </button>

        <h1>Resume</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("work");
            }}
            className={` p-3 rounded-lg bg-slate-400 `}
          >
            {page === "work" ? (
              <Work sx={{ color: "white" }} />
            ) : (
              <WorkOutline sx={{ color: "white" }} />
            )}
          </button>
        </div>
        <div>
          <h1>Work</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("contact");
            }}
            className={` p-3 rounded-lg bg-slate-400`}
          >
            {page === "contact" ? (
              <Contacts sx={{ color: "white" }} />
            ) : (
              <ContactsOutlined sx={{ color: "white" }} />
            )}
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
