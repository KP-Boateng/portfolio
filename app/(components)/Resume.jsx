import { SchoolOutlined } from "@mui/icons-material";
import { useAppContext } from "./AppContext";
import { SpaceBold, SpaceMedium } from "../(fonts)/font";

const Resume = () => {
  const { theme } = useAppContext();
  return (
    <div className="w-full py-4 px-2">
      <h1 className={` text-3xl  ${SpaceBold.className} `}>RESUME</h1>
      <div className="bg-orange-400 h-1"></div>
      <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-1">
            <div>
              <SchoolOutlined
                sx={{ color: theme === "light" ? "orange" : "white" }}
              />
            </div>
            <div>
              <h1 className={` text-xl font-bold`}>Education</h1>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-4">
            <div
              className={`flex flex-col gap-1 py-4 px-2  rounded-lg font-mono font-semibold ${
                theme === "light "
                  ? "text-black bg-orange-300"
                  : "text-white bg-slate-400"
              }`}
            >
              <h1>2016 - 2019</h1>
              <h1>General Science</h1>
              <h1>Armed Forces Senior High Technical School, Kumasi</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-1">
            <div>
              <SchoolOutlined
                sx={{ color: theme === "light" ? "orange" : "white" }}
              />
            </div>
            <div>
              <h1 className={` text-xl font-bold `}>Experience</h1>
            </div>
          </div>
          <div className=" grid grid-cols-1 gap-4">
            <div
              className={`flex flex-col gap-1 py-4 px-2  rounded-lg font-mono font-semibold ${
                theme === "light"
                  ? "text-black bg-orange-200"
                  : "text-white bg-slate-400"
              } `}
            >
              <h1>2016 - 2019</h1>
              <h1>General Science</h1>
              <h1>Armed Forces Senior High Technical School, Kumasi</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 ">
            <div>
              <h1 className=" text-xl font-bold">Work Skills</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2  items-center ">
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500 "
              }`}
            >
              React.js
            </h1>{" "}
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Next.js
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              HTML 5
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              CSS 3
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Tailwind CSS
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              JavaScript
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Bootstrap
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Python
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Redux
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              React Native
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div>
              <h1 className=" text-xl font-bold">Soft Skills</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2  items-center ">
            {/* <div className="flex flex-col gap-1 py-4 px-2 bg-gray-500 rounded-lg font-mono font-semibold"> */}
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Time Management
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Mentorship
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Impeccable Communication
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Flexibility
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Research
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Writing
            </h1>
            <h1
              className={` p-2 rounded-md text-center w-fit font-medium ${
                theme === "light" ? "bg-slate-300" : "bg-slate-500"
              }`}
            >
              Critical Thinking
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
