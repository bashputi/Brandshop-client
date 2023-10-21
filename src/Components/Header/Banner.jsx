

const Banner = () => {
    return (
        <div className="mb-12">
             <div className="flex justify-center shadow-lg">
           <div>
           <div className="carousel w-[90vw] h-[80vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/YhfCYXt/4k-car-g6a4f0e15hkua5oa.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZcPK4Vp/2023-10-21-9.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/82NSjFB/20-most-beautiful-cars-in-the-world-according-to-science-2019-apollo-intensa-emozione-57-12.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/FnXVGfF/2024-Ford-Mustang-Pace-Car.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
         </div>
           </div>
        </div>
        </div>
    );
};

export default Banner;