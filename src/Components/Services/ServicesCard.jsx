
import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {brand_image, brand_name} = service || {};

    return (
        <Link to={`/${brand_name}`}>
        <div >
           
            <div className="card card-compact w-[180px] hover:w-[185px] bg-base-100 shadow-xl">
              <figure><img className="w-[180px] h-[150px]" src={brand_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-semibold uppercase">{brand_name}</h2>   
                </div>
            </div>
           
        </div>
     </Link>
    );
};

export default ServicesCard;