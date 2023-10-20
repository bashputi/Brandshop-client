import { useLoaderData } from "react-router-dom";
import DisplayBrandCard from "./DisplayBrandCard";
import { useState } from "react";


const DisplayBrand = () => {

    const loadedBrands = useLoaderData();
     const [brands, setBrands] = useState(loadedBrands); 
   


    return (
        <div>
            <h1 className="text-center my-12 text-5xl" >Display Brand Product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                  brands.map(brand => <DisplayBrandCard key={brand._id} brand={brand} brands={brands} setBrands={setBrands} ></DisplayBrandCard>) 
                }
            </div>
           
        </div>
    );
};

export default DisplayBrand;