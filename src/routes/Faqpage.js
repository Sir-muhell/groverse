import React ,{useEffect} from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import img6 from "../asset/Rectangle 10.png";
import img7 from "../asset/Rectangle 11.png";
import Accordion from "../faq/Accordion";   
import "./faq.css"
import  AOS  from 'aos';
import "aos/dist/aos.css"



function Faqpage() {
           useEffect(()=>{
  AOS.init({duration:2000});
}, []);
  return (
    <div>
         <div className="faq_f" >
        <h4 className="faq-head">FAQ’s & News</h4>

        <div className="faq-contents">
          <div data-aos="fade-right" className="f-faq">
            <Accordion />
          </div>
           <div className="faq-blog">
            <div data-aos="flip-up"className="faq-blogs">
              <div className='img'>              <img src={img6} alt="" srcset="" /></div>

              <h1 className="faq-blog-th">How will solar change the world</h1>
              <p className="faq-blog-tp">
                Solar energy has created more job opportunities for individuals
                and industries today by leveraging the sun as the main source of
                power today.
                <br />{" "}
                <a href="https://medium.com/@Groversetech/how-will-solar-change-the-world-c1793ce0a576">
                <span>
                  see more <BsArrowRightCircle />
                </span></a>
              </p>
            </div>
            <div data-aos="flip-down" className="faq-blogs">
               <div className='img'>        <img src={img7} alt="" srcset="" /></div>
              <h1 className="faq-blog-th">Transforming Renewable Energy</h1>
              <p className="faq-blog-tp">
                Solar energy has created more job opportunities for individuals
                and industries today by leveraging the sun as the main source of
                power today.
                <br />
                <a href="https://medium.com/@Groversetech/transforming-renewable-energy-2896e36cfa5e">
                <span>
                  see more <BsArrowRightCircle />
                </span></a>
              </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Faqpage