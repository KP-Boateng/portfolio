import NavButtons from "./(components)/NavButtons";
import ProfilePhoto from "./(components)/ProfilePhoto";
import { InriaRegular } from "./(fonts)/font";
import "./globals.css";

export const metadata = {
  title: "KPBoateng.me",
  description: "Boateng Paul Okeoghene Portfolion Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InriaRegular.className} flex flex-col gap-4 sm:flex sm:flex-row`}
      >
        <div className="  sm:w-1/2 md:w-1/3">
          <ProfilePhoto />
        </div>
        <div className="flex-1 flex flex-col  sm:1/2 md:2/3">
          <div className=" bg-slate-200">
            <NavButtons />
          </div>
          <div className=" flex-1 bg-gray-500">{children}</div>
        </div>
      </body>
    </html>
  );
}
