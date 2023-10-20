import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
    return (
        <div className=" lg:h-[80vh] flex justify-center items-center">
            <div>
                <h1 className="text-5xl font-bold text-center my-10">Our Brands</h1>
                <p></p>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-5">
                    {
                        services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;