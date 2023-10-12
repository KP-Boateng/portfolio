import { AppProvider } from "./(components)/AppContext";
import AppWraper from "./(components)/AppWraper";
import Header from "./(components)/Header";
import MainBodyContent from "./(components)/MainBodyContent";
import NavButtons from "./(components)/NavButtons";
import ProfilePhoto from "./(components)/ProfilePhoto";
import { InriaRegular, MontserratRegular, RobotoRegular } from "./(fonts)/font";
import "./globals.css";

export const metadata = {
  title: "KPBoateng.me",
  description: "Boateng Paul Okeoghene Portfolion Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${InriaRegular.className}  `}>
        <AppProvider>
          <AppWraper>
            <div>
              <Header />
            </div>
            <div className=" gap-4 h-full flex-1  flex flex-col sm:flex-row">
              <div className=" h-max  sm:w-1/2 md:w-1/3">
                <ProfilePhoto />
              </div>
              <>
                <MainBodyContent LayoutPage={children} />
              </>
            </div>
          </AppWraper>
        </AppProvider>
      </body>
    </html>
  );
}
