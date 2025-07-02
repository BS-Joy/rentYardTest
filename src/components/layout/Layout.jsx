import { Outlet } from "react-router";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Steps from "./Steps";

const Layout = () => {
  return (
    <section className="font-fustat">
      <Navbar />
      <div className="container mx-auto px-2 sm:px-o">
        <Outlet />
      </div>
      <Steps />
      <Footer />
    </section>
  );
};

export default Layout;
