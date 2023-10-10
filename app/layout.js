import { AppProvider } from "./(components)/AppContext";
import Header from "./(components)/Header";
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
        className={`${InriaRegular.className} p-4 gap-8 h-full rounded-lg flex flex-col bg-slate-200`}
      >
        <AppProvider>
          <div>
            <Header />
          </div>
          <div className=" gap-4 h-full flex-1  flex flex-col sm:flex-row">
            <div className=" h-max  sm:w-1/2 md:w-1/3">
              <ProfilePhoto />
            </div>
            <div className="flex-1 flex flex-col bg-white rounded-2xl sm:1/2 md:2/3">
              <div>
                <NavButtons />
              </div>
              <div className=" flex-1">{children}</div>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
