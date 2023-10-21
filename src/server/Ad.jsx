

const Ad = () => {
    return (
        <div >
           
           
            <div className="flex justify-center shadow-lg ">
                <div className="rela">
                <div className="carousel w-[90vw] h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/8jN0Bhv/2023-10-21-6.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/k1bz70d/2023-10-21-8.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/6ZFFQ8j/Sunrise-Ford-Ford-Lineup-Yellow-Gray-Blue-Red-Black-Vehicle-Variety.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/FH54Zyr/13.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
                </div>
                </div>

                <div className="absolute mt-20">
                <h1 className="text-2xl text-center lg:text-6xl font-bold text-amber-500">Need a Car?</h1>
                <p className="text-xl texl-center lg:text-3xl text-purple-700 font-medium">Lowest price to get your dream...</p>
            </div>

            </div>

            

            
        </div>
    );
};

export default Ad;