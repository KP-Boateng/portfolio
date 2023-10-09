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

const PageButtons = ({ setPage, theme }) => {
  const [buttonClicked, setButtonClicked] = useState("about");
  // const [resumeButtonClicked, setResumeButtonClicked] = useState(false);
  // const [worButtonClicked, setWorkButtonClicked] = useState(false);
  // const [contactButtonClicked, setContactButtonClicked] = useState(false);
  return (
    <div className="flex gap-6 justify-end items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("about");
              setButtonClicked("about");
            }}
            className={` p-3 rounded-lg bg-slate-400 ${
              buttonClicked === "about" && " bg-orange-500"
            }`}
          >
            {buttonClicked === "about" ? <Home /> : <HomeOutlined />}
          </button>
        </div>
        <div>
          <h1
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Home
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("resume");
              setButtonClicked("resume");
            }}
            className={` p-3 rounded-lg bg-slate-400 ${
              buttonClicked === "resume" && " bg-orange-500"
            }`}
          >
            {buttonClicked === "resume" ? <Article /> : <ArticleOutlined />}
          </button>
        </div>
        <div>
          <h1
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Resume
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("work");
              setButtonClicked("work");
            }}
            className={` p-3 rounded-lg bg-slate-400 ${
              buttonClicked === "work" && " bg-orange-500"
            }`}
          >
            {buttonClicked === "work" ? <Work /> : <WorkOutline />}
          </button>
        </div>
        <div>
          <h1
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Work
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <button
            onClick={() => {
              setPage("contact");
              setButtonClicked("contact");
            }}
            className={` p-3 rounded-lg bg-slate-400 ${
              buttonClicked === "contact" && " bg-orange-500"
            }`}
          >
            {buttonClicked === "contact" ? <Contacts /> : <ContactsOutlined />}
          </button>
        </div>
        <div>
          <h1
            className={`font-medium ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Contact
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageButtons;
