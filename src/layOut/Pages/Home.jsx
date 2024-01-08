import { useLoaderData } from "react-router-dom";
import Extra from "../../Components/Extra/Extra"; 
import ExtraOne from "../../Components/Extra/ExtraOne";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Header/Banner";
import Services from "../../Components/Services/Services";
import { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';
import './Home.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
    const services = useLoaderData();

    const fsRef = useRef(null);
    const elemRef = useRef(null);
    const textRef = useRef(null);
   
  
    useEffect(() => {
      const fs = fsRef.current;
      const elem = elemRef.current;
      const text = textRef.current;
  
      const tl = gsap.timeline();
      tl.to(fs, {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
      })
      .to(text, {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: -1.5, 
        ease: Expo.easeInOut,
      })
        .to(elem, {
          height: 0,
          duration: 2.5,
          delay: -2,
          ease: Expo.easeInOut,
        })
     
    }, []);



    return (
        <div className="">
            <div id="main">
      <div id="fs" ref={fsRef}>
        <div ref={textRef} className="text-center text-[#06031a] pt-56 ">

        <h1 className="inline font-bold text-7xl text-[#2c09f6e6]"> Welcome</h1>
            </div>
      </div>
      <div id="elem" ref={elemRef}></div>
            <Banner></Banner>

      {/* section  */}
            <Extra class="site-main"></Extra> 
         <Services services={services}></Services>
        <ExtraOne ></ExtraOne> 
            <Footer></Footer>
      </div>
            
        </div>
    );
};

export default Home;