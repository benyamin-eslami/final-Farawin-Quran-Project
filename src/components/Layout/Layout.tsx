import { ReactNode } from "react";
import AudioPart from "../AudioPart";
import Header from "./Header";
import Navigation from "./Navigation";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container">
        <Header />
        {children}
        <AudioPart />
        {/* <Navigation /> */}
      </div>
    </>
  );
};

export default Layout;
