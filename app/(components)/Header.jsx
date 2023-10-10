"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { SpaceBold } from "../(fonts)/font";
import { useAppContext } from "./AppContext";

const Header = () => {
  const { theme, setTheme } = useAppContext();
  console.log(theme);
  return (
    <div
      className={`w-full bg-transparent flex p-2 ${SpaceBold.className} $${
        theme === "light" ? "bg-slate-200" : "bg-red-500"
      }`}
    >
      <div
        className={` flex-8 flex justify-center items-center text-xl md:text-4xl ${
          theme === "light" ? " text-black" : "text-white"
        }`}
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
