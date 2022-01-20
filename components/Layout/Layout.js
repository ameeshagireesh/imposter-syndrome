import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <main className="pt-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
