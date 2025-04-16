import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-Components/LeftNavbar";
import MainContent from "../components/Layout-Components/MainContent";
import RightNavbar from "../components/Layout-Components/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">

            <section>
               <Header></Header>  
               <section className="w-11/12 mx-auto justify-center mt-8">
                <LatestNews></LatestNews>
               </section>
            </section>
           
            <Navbar></Navbar>


            <main className=" w-11/12 mx-auto justify-center pt-10 grid grid-cols-12 ">
                  
              <aside className="col-span-3" > <LeftNavbar></LeftNavbar></aside>
              <section className="col-span-6" > <MainContent></MainContent> </section>
              <aside className="col-span-3" > <RightNavbar></RightNavbar> </aside>


            </main>
            
        </div>
    );
};

export default HomeLayout;