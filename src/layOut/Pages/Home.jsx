import { useLoaderData } from "react-router-dom";
import Extra from "../../Components/Extra/Extra"; 
import ExtraOne from "../../Components/Extra/ExtraOne";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Header/Banner";
import Services from "../../Components/Services/Services";


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            {/* <Banner></Banner>  */}
            {/* <Extra></Extra>  */}
            <Services services={services}></Services>
            {/* <ExtraOne></ExtraOne>  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;