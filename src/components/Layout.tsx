import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
