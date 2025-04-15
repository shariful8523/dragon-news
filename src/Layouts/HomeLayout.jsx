import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Main from "../components/Main";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>

            <section>
               <Header></Header>  
               <section className="w-11/12 mx-auto justify-center mt-8">
                <LatestNews></LatestNews>
               </section>
            </section>
           
            <Navbar></Navbar>
            <Main></Main>
            
        </div>
    );
};

export default HomeLayout;