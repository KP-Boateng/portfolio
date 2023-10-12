import { CoPresent, Html, Instagram } from "@mui/icons-material";
import { useAppContext } from "./AppContext";

const About = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div className={`w-full py-4 px-2 `}>
      <h1 className={` text-3xl font-mono font-bold mt-4 `}>ABOUT ME</h1>
      <div className="bg-orange-400 h-1"></div>
      <p className={` mt-4 font-medium `}>
        Hello there! I&apos;m Paul, called K.P. Boateng or K.P. for short by my
        peers and I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile front-end developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h1 className={` text-3xl font-mono font-bold mt-4`}>What I do!</h1>{" "}
      <div className="bg-orange-400 h-1"></div>
      <div className="grid grid-cols-1 grid-rows-1 gap-2  mt-4 md:grid-cols-2 ">
        <div
          className={`flex-1 flex flex-col gap-2 w-full p-4 rounded-lg ${
            theme === "light" ? "bg-orange-400" : "bg-slate-400"
          }`}
        >
          <div className="flex gap-2  items-center">
            <Html sx={{ color: theme === "light" ? "white" : "orange" }} />
            <h1 className={` text-xl font-bold `}>Web Development</h1>
          </div>
          <div className=" flex-1">
            <p className={` w-full font-medium`}>
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js.
            </p>
          </div>
        </div>
        <div
          className={`flex-1 flex flex-col gap-2 w-full p-4 rounded-lg ${
            theme === "light" ? "bg-slate-200" : "bg-orange-400"
          }`}
        >
          <div className="flex gap-2  items-center">
            <Instagram sx={{ color: theme === "light" ? "orange" : "white" }} />
            <h1 className={` text-xl font-bold `}>App Development</h1>
          </div>
          <div className=" flex-1">
            <p className={` w-full font-medium `}>
              With a focus on user-centric design and cutting-edge technologies.
              I thrive on building intuitive and efficient apps that make a
              positive impact on people&apos;s lives. Let&apos;s turn ideas into
              reality and shape the future together.
            </p>
          </div>
        </div>
        <div
          className={`flex-1 flex flex-col gap-2 w-full p-4 rounded-lg ${
            theme === "light" ? "bg-orange-400" : "bg-slate-400"
          }`}
        >
          <div className="flex gap-2  items-center ">
            <CoPresent sx={{ color: theme === "light" ? "white" : "orange" }} />
            <h1 className={` text-xl font-bold `}>Mentorship</h1>
          </div>
          <div className=" flex-1">
            <p className={` w-full font-medium `}>
              I have also found joy in sharing my knowledge with others. Doing
              this allows me to give back to the community that has supported
              me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
