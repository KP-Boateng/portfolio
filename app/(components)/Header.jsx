import { DarkMode } from "@mui/icons-material";
import { SpaceBold } from "../(fonts)/font";

const Header = () => {
  return (
    <div className={`w-full bg-transparent flex p-2 ${SpaceBold.className}`}>
      <div
        className={` flex-8 flex justify-center items-center text-xl md:text-4xl `}
      >
        Boateng Paul Okeoghene
      </div>
      <div className="themeToggle flex-1 flex justify-end items-center">
        <button className="h-8 w-8">
          <DarkMode />
        </button>
      </div>
    </div>
  );
};

export default Header;
