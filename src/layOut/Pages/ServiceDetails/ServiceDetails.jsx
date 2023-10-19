import { useLoaderData } from "react-router-dom";



const ServiceDetails = () => {
    const details = useLoaderData();
    const {_id, img, name, description, type, price, rating} = details || {};
   

  


    return (
        <div className="flex h-[90vh] justify-center items-center">
           
            <div className="hero lg:max-w-[90vw] min-h-[70vh] bg-lime-100 ">
          
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-[380px] lg:max-w-[600px] rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-3xl lg:text-5xl mb-2 font-bold">{name}</h1>
                <p className="font-semibold mb-2">Type: {type} </p> 
                <div className="flex justify-between font-semibold">
                          <p>Price: {price} USD</p>     
                          <p>Ratings: {rating}</p>    
                </div>
                <p className="py-6">{description}</p>
                <button className="btn btn-primary">ADD to Cart</button>
                </div>
          
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;