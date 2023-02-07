import React,{useEffect} from "react";
import { motion } from "framer-motion";
import img1 from "../asset/Rectangle 3.png";
import Footer from "./Footer";
import "./product.css"
import  AOS  from 'aos';
import "aos/dist/aos.css"
function Product() {
         useEffect(()=>{
  AOS.init({duration:2000});
}, []);
  return (
    <div >
       <div className="product">
        <motion.div
          className="product-l"
          initial={{ x: "-100" }}
          animate={{ x: 0 }}
          transition={{ delay: 1 }}
          style={{Width:
"721px",}}
        >
          <h1 className="h-textp" >
           Incentives for Sustainable <span>Energy </span>for all.
          </h1>
          <p className="p-textp">
            Our affordable Solar panel smart  devices provide efficient
renewable energy access to our users. Groverse allows users
to access electrical energy seamlessly and conveniently with
our Smart features that makes a user earn from using our 
devices by mining the Groverse token daily.
          </p>
        </motion.div>
        <motion.div
          className="product-r"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <img src={img1} alt="" srcset="" />
        </motion.div>
      </div>
      <div className="blankp"></div>



       <div className="pro-sb">
<div data-aos="fade-up" className="sb-img"></div>

<div data-aos="fade-left" className="sb-text">
<h1 className="h-sm">Grove unit cell</h1>
<p className="p-sm">This is the smallest unit of the Groverse solar power unit with a 
minimium of 1000 WATT solar panel unit.</p>
</div>
</div>


<div className="pro-tb">
<div data-aos="fade-up-right"className="tb-text">
  <h1 className="h-tm">Grove unit cell</h1>
  <p className="p-tb">This is the smallest unit of the Groverse solar power unit with a 
minimium of 1000 WATT solar panel unit.</p>
</div>
<div data-aos="fade-up-left"className="tb-img"></div>
</div>

       <div className="home-lb">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
