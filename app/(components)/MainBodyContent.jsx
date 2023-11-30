"use client";
import NavButtons from "./NavButtons";
import { useAppContext } from "./AppContext";

const MainBodyContent = ({ LayoutPage }) => {
  const { theme, page, setPage } = useAppContext();

  return (
    <div
      className={`flex-1 flex flex-col rounded-2xl h-max sm:1/2 md:2/3 ${
        theme === "light" ? "bg-white" : "bg-slate-900 text-white"
      } `}
    >
      <NavButtons />
      {LayoutPage}
    </div>
  );
};

export default MainBodyContent;
