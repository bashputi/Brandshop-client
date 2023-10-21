import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayBrandCard from "./DisplayBrandCard";
import Ad from "../Ad";


const DisplayBrand = () => {
     const params = useParams();
     const loadedBrands = useLoaderData();
     const [brands, setBrands] = useState(loadedBrands); 

     useEffect(() => {
        const filterCart = loadedBrands.filter((item) => item.brand_name === params.brand_name);
        setBrands(filterCart);
     }, [params.brand_name, loadedBrands])

    return (
        <div>
            <Ad></Ad>
            <div className="">
            <h1 className="text-center my-12 text-5xl font-semibold text-amber-600" >Display Brand Product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:max-w-[80vw] lg:mx-auto ml-5">
                {
                 brands.length ? brands.map(brand => <DisplayBrandCard key={brand._id} brand={brand} brands={brands} setBrands={setBrands} ></DisplayBrandCard>) 
                 : <div className="mb-20 text-center"> 
                    
                    <div className="text-3xl font-semibold  text-red-700">Opss!! . We don't sell any Electric Cars here....</div>
                    <div className="my-5 text-xl font-bold">Coz... "Bijli ka bill tera baap varega ???" . Sorry, I'm just kidding..</div>
                    <div className="font-extrabold text-5xl text-green-600">Please check other cars!!</div>
                    
                 </div>
                }
            </div>
            </div>
           
        </div>
    );
};

export default DisplayBrand;