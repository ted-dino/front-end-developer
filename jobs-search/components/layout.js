import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
