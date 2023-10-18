

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
    <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Macan/10974/1690871596474/front-left-side-47.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.hindustantimes.com/auto/img/2023/02/20/1600x900/Hyundai_Verna_1676887286718_1676887293664_1676887293664.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/bzVLH8S/lede-652d3619abc08.jpg" className="w-full" />
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