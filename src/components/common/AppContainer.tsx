import React from "react";
import { useMatch } from "raviger";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
export default function AppContainer(props: {
  children: React.ReactNode;
  collapsed: boolean;
  toggleSidebar: () => void;
}) {
  const matchHome = useMatch("/");
  const matchEvents = useMatch("/events");
  const matchAbout = useMatch("/about");

  return (
    <div className="w-full ">
      {matchEvents || matchHome || matchAbout ? <Header /> : <></>}

      <div className={` w-full `}>{props.children}</div>
      {matchEvents || matchHome || matchAbout ? <Footer /> : <></>}
    </div>
  );
}
