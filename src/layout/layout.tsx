import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="">
      <Header />

      <main className="max-w-screen px-10 mx-auto min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
