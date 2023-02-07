import React ,{useEffect} from "react";
import "./Token.css"
import img1 from "../asset/Frame 23.png"
import { GoTriangleRight } from 'react-icons/go';
import Footer from "./Footer";
import  AOS  from 'aos';
import "aos/dist/aos.css"
function Token() {
       useEffect(()=>{
  AOS.init({duration:2000});
}, []);
  return (
    <div className="Token">
      <div data-aos="flip-up" className="f-Token">
        <div className="text-Token">
          <h1 className="h-Token">THE GROVERSE ECONOMY</h1>
          <span className="spn">22,000,000,000</span>
          <p className="p-Token">Token metrics and formation of Grove token total supply would be 22,000,000,000 with a decimal of 18 .Groverse exists to enable community-driven 
innovation to benefit people around the world. The ecosystem relies on the efforts of a broad community of users , promoters , merchants and more
to succeed. The section below will help you understand how the core financing component of the Grove token is distributed to support the ecosystem.</p>
        </div>
      </div>

      <div className="s-Token">
        <img data-aos="zoom-out-up" src={img1} alt=""/>
        <div className="side">
          <div data-aos="flip-up"className="list1 lists">Foundation and grants 27.71%</div>
            <div data-aos="flip-up" className="list2 lists">Lockdrop 25%</div>
              <div data-aos="flip-up"className="list3 lists">Groverse investor 22%</div>
                <div data-aos="flip-up"className="list4 lists">Team , Advisors and partners 10.92%</div>
                  <div data-aos="flip-up"className="list5 lists">Ecosystem treasury 7.74 %</div>
                    <div data-aos="flip-up"className="list6 lists">Private round 3.33 %</div>
                      <div data-aos="flip-up" className="list7 lists">Seed round 2.68 %</div>
                        <div data-aos="flip-up" className="list8 lists">  Public round 1.33%</div>
        </div>
      </div>

      <div className="td-Token" style={{margin: "auto"}}>
        <div data-aos="zoom-in-down"className="box">
          <h1>  Project Use cases </h1>
          <li><GoTriangleRight/> <p>Access to energy</p></li>
          <li><GoTriangleRight/> <p>Access to Information</p></li>
          <li><GoTriangleRight/> <p>Incentives for using renewable energy</p></li>
          <li><GoTriangleRight/> <p>Donation for global campaign</p></li>
        </div>
         <div data-aos="zoom-in-down" className="box">
          <h1>Our promoters </h1>
           <li><GoTriangleRight/> <p>Can mint token by using our solar power unit</p></li>
          <li><GoTriangleRight/><p>Earn token from promotion , referral and affiliate programs</p> </li>
          <li><GoTriangleRight/> <p>Advertising : with our user base we would offer a valuable 
advertisement spot for promoters to pay in Grove token to place
 their adverts.</p></li>
         </div>
          <div data-aos="zoom-in-down"className="box">
            <h1>Our users </h1>
             <li><GoTriangleRight/><p>Can mint token by using our solar power system</p> </li>
          <li><GoTriangleRight/> <p>Can pay for product on the marketplace with the token</p></li>
          <li><GoTriangleRight/><p>Can stake token to earn reward</p> </li>
          </div>
           <div data-aos="zoom-in-down" className="box">
            <h1>Our platform </h1>
             <li><GoTriangleRight/> <p>Distribute token between minters and users</p></li>
          <li><GoTriangleRight/> <p>Provide Token for ecosystem building</p></li>
          <li><GoTriangleRight/> <p>Provide Token for service charge</p></li>
           </div>
      </div>
       <div className="home-lb">
        <Footer />
      </div>
    </div>
  );
}

export default Token;
