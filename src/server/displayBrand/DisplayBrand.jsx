import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayBrandCard from "./DisplayBrandCard";


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
            
            <h1 className="text-center my-12 text-5xl" >Display Brand Product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:max-w-[80vw] lg:mx-auto ml-5">
                {
                 brands.length && brands.map(brand => <DisplayBrandCard key={brand._id} brand={brand} brands={brands} setBrands={setBrands} ></DisplayBrandCard>) 
                }
            </div>
           
        </div>
    );
};

export default DisplayBrand;