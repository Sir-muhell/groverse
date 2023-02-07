import React, {useEffect} from "react";
import "./tec.css"
import { motion } from "framer-motion";
import Footer from "./Footer";
import  AOS  from 'aos';
import "aos/dist/aos.css"
function Technology() {
      useEffect(()=>{
  AOS.init({duration:2000});
}, []);
  return <div>
    <div className="Tech">
       <div className="Tech-f">
        <motion.div
          className="Tech-l"
          initial={{ x: "-100" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          style={{Width:
"721px",}}
        >
          <h1 className="Tec-h-text" >
           Solar system <span>Energy </span>
          </h1>
          <p className="Tec-p-text">
         Groverse technology enables people , businesses , governments,
developers and non-governmental organisations ( NGOs ) to
establish a highly customised and incentivized mobile renewable
energy distribution network .
          </p>
        </motion.div>
        <motion.div
          className="Tech-r"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <div className="Tec-sb-img"></div>
        </motion.div>
      </div>
      <div className="blankT"></div>



       <div className="Tec-sb">
<div data-aos="fade-up-right" className="Tec-sb-img"></div>

<div data-aos="fade-up-left" className="Tec-sb-text">
<h1 className="Tec-h-sm">Blockchain Technology</h1>
<p className="Tec-p-sm">The world.s carbon control is a very critical part of humanity’s future.
and this is one of the great fears that international bodies work daily to 
curb , fighting for clean and renewable energy for the word.
As a strategic startup in the renewable energy industry leveraging 
blockchain technology , we bring together fresh thinking and diverse
voices around innovative ideas to drive progress and tackle problems.</p>
</div>
</div>


<div className="Tec-tb">
<div data-aos="fade-up-right" className="Tec-tb-text">
  <h1 className="Tec-h-tm">Renewable <span>energy</span>  to earn</h1>
  <p className="Tec-p-tb">The world.s carbon control is a very critical part of humanity’s future.
and this is one of the great fears that international bodies work daily to 
curb , fighting for clean and renewable energy for the word.
As a strategic startup in the renewable energy industry leveraging 
blockchain technology , we bring together fresh thinking and diverse
voices around innovative ideas to drive progress and tackle problems.</p>
</div>
<div data-aos="fade-up-left" className="Tec-tb-img"></div>
</div>

       <div className="home-lb">
        <Footer />
      </div>
    </div>


  </div>;
}

export default Technology;
