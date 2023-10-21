import { Link } from "react-router-dom";


const DisplayBrandCard = ({brand}) => {
    const {_id, img, name , type, price, rating} = brand || {};
    return (
       
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="cars" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-lg ">Type of the product is: <span className="text-red-600">{type}</span> </h2>
                <p className="font-semibold">Price: <span className="text-red-700">{price}</span> USD</p>
                <p className="font-semibold">Ratings: <span className="text-green-600">{rating}</span> </p>
                <div className="card-actions justify-end">
                 <Link to={`update/${_id}`}><button className="btn bg-green-500">Update</button></Link> 
                <Link to={`details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
            </div>
       
    );
};

export default DisplayBrandCard;

 