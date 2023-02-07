import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import img1 from "../asset/Rectangle 3.svg";
import img2 from "../asset/Rectangle 5.png";
import img3 from "../asset/Frame 2.png";
import img4 from "../asset/Frame 3.png";
import img5 from "../asset/Frame 4.png";
import Faqpage from "./Faqpage";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="home">
        <motion.div
          className="home-l"
          initial={{ x: "-100" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="h-textp">
            RENEWABLE <span>ENERGY</span>
          </h1>
          <h1 className="h-textp" style={{ marginTop: "-70px" }}>
            meets <span>BLOCKCHAIN</span>
          </h1>
          <p className="p-text" style={{ marginTop: "-70px" }}>
            Groverse is building renewable energy solutions with users in mind
            and paying them for usage.
          </p>
          <motion.button
            className="btn"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <Link to="./waitlist" className="waitlist">
              Join our waitlist
            </Link>
          </motion.button>
        </motion.div>
        <motion.div
          className="home-r"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={img1} alt="" srcset="" />
        </motion.div>
      </div>
      <div className="blankh"></div>

      <div className="home-sb">
        <div data-aos="fade-right" className="sm-l">
          <img src={img2} alt="" srcset="" />
        </div>
        <div data-aos="fade-left" className="sm-r">
          <h1 className="h-sm">The Future is Solar</h1>
          <p className="p-sm">
            Solar energy is here to stay by providing easy and long lasting
            power to everyone. We at Groverse are making sure of that as we
            integrate blockchain technology as well for easy adoption ,
            transaction and simulation of the whole process to store data and
            make easy payment. Solar energy is here to stay by providing easy
            and long lasting power to everyone. We at Groverse are making sure
            of that as we integrate blockchain technology as well for easy
            adoption , transaction and simulation of the whole process to store
            data and make easy payment.Solar energy is here to stay by providing
            easy and long lasting power to everyone. We at Groverse are making
            sure of that as we integrate blockchain technology as well for easy
            adoption , transaction and simulation of the whole process to store
            data and make easy payment.
          </p>
        </div>
      </div>
      <div className="home-tm">
        <h1 className="tm-text">Why choose Us ?</h1>
        <div className="listf">
          <div data-aos="flip-left" className="listsf">
            <img src={img3} alt="" srcset="" />
            <h3 className="list-text">Pocket-friendly</h3>
            <p className="list-p">
              Users can purchase our product within their specific budget and
              enjoy our services.
            </p>
          </div>
          <div data-aos="flip-right" className="listsf">
            <img src={img4} alt="" srcset="" />
            <h3 className="list-text">Earn Incentives</h3>
            <p className="list-p">
              Users get paid incentives in our token for using our product and
              services.
            </p>
          </div>
          <div data-aos="flip-left" className="listsf">
            <img src={img5} alt="" srcset="" />
            <h3 className="list-text">Reliable Energy</h3>
            <p className="list-p">
              Tested and trusted solar energy provider across different
              countries .
            </p>
          </div>
        </div>
      </div>
      <>
        <Faqpage />
      </>
      <div className="home-lb">
        <Footer />
      </div>
    </>
  );
}

export default Home;
