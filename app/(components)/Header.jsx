"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { SpaceBold } from "../(fonts)/font";
import { useAppContext } from "./AppContext";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div
      className={`w-full bg-transparent flex p-2 ${SpaceBold.className} ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <div
        className={` flex-8 flex justify-center items-center text-xl md:text-4xl `}
      >
        Boateng Paul Okeoghene
      </div>
      <div className="themeToggle flex-1 flex justify-end items-center">
        {theme === "light" ? (
          <button
            className="h-8 w-8"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <DarkMode />
          </button>
        ) : (
          <button
            className="h-8 w-8"
            onClick={() => {
              setTheme("light");
            }}
          >
            <LightMode />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
