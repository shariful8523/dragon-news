
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-Components/LeftNavbar";
import MainContent from "../components/Layout-Components/MainContent";
import RightNavbar from "../components/Layout-Components/RightNavbar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section>
        <Header />
        <section className="w-11/12 mx-auto justify-center mt-8">
          <LatestNews />
        </section>
      </section>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Layout */}
      <main className="w-11/12 mx-auto justify-center pt-10 grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet /> {/* MainContent will render here based on route */}
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
