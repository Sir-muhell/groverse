import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1000px) {
   width: 100%;
   }
   
`;

const Container = styled.div`
  // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  // border: 1px solid rgba(0, 0, 0, 0.2);
  width: 600px;
   @media (max-width: 1000px) {
   width: 100%;
   margin:auto;
   padding:0.5rem;
   }
`;

const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    padding-left: 1rem;
    text-align: left;
    letter-spacing: -0.5px;

    color: #000000;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #00ffb9;
  height: fit-content;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    width: 577px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */
    padding: 1rem;
    text-align: center;
    letter-spacing: -0.5px;

    color: rgba(0, 0, 0, 0.7);
  }

   @media (max-width: 1000px) {
   width: 100%;
  p{
    width: 100%;
      padding: 1rem;
  }
   }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
