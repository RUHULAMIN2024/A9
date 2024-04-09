import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/cards";
import Slider from "../components/Slider";

const Home = () => {
    const estates = useLoaderData()
    return (
        <div>
            <Helmet><title>Dream House | Home</title></Helmet>
            <Slider></Slider>
            <h2 className="text-3xl font-bold text-center mt-20 animate__animated animate__fadeInUp ">
                Best Deals for Sale
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 my-14">
                {
                    estates.map(estate => <Cards key={estate.id} estate={estate}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;