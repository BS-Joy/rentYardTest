import { Outlet } from "react-router";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <section className="font-fustat">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
