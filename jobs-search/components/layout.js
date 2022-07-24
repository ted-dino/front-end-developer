import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
