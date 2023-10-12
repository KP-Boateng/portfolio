import {
  PhoneAndroidOutlined,
  EmailOutlined,
  LocationOnOutlined,
  DownloadOutlined,
} from "@mui/icons-material";
import { useAppContext } from "./AppContext";

const ContactCard = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <div
      className={`flex flex-col gap-2 mt-6 rounded-md p-3 w-full ${
        theme === "light" ? "bg-slate-200" : "bg-slate-900"
      } `}
    >
      <div className="flex gap-2 justify-center items-center border-orange-400 border-b-2">
        <div>
          <PhoneAndroidOutlined sx={{ color: "orange" }} />
        </div>
        <div className="flex-1">
          <h1 className={`font-bold `}>Phone</h1>
          <h1 className={`font-medium`}>+233598045846</h1>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center border-orange-400 border-b-2">
        <div>
          <EmailOutlined sx={{ color: "orange" }} />
        </div>
        <div className="flex-1">
          <h1 className={`font-bold`}>Email</h1>
          <h1 className={`font-medium`}>opaul816@gmail.com</h1>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center border-orange-400 border-b-2">
        <div>
          <LocationOnOutlined sx={{ color: "orange" }} />
        </div>
        <div className="flex-1">
          <h1 className={`font-bold `}>Location</h1>
          <h1 className={`font-medium }`}>Kumasi, Ghana</h1>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center border-orange-400 border-b-2 py-4">
        <button className="flex justify-center items-center gap-2 bg-orange-600  border-white border-2 p-2 rounded-lg">
          <DownloadOutlined />
          <div>
            <h1 className="font-semibold">Download Resume</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
