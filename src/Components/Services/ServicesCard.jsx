import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {id, brand_name, brand_image} = service || {};
    return (
        <div>
            <div className="card card-compact w-[200px] bg-base-100 shadow-xl">
              <figure><img className="w-[200px] h-[150px]" src={brand_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center ">{brand_name}</h2>   
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;