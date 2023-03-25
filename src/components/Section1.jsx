import React from 'react';
import algoZenith from "./images/algoZenith.png"
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Section1.css";

const Section1 = () => {
    


  return (
    <div className="Section1">
      <div className="subS1">
        <h1 className="heading">Be better at DSA & CP</h1>
        <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero quis beatae dolorum voluptatum atque mollitia laborum a laudantium. Voluptatem?</p>
        <div className="btn">
            <button className="join">Join now <span className="arrow"><AiOutlineArrowRight/></span></button>
            <button className="curriculum">View curriculum</button>
        </div>
        <div className="square">
            <p className="sub1Square"><span className="rbd"></span> Lorem ipsum dolor sit amet.</p>
            <p className="sub1Square"><span className="rbd"></span> Lorem ipsum dolor sit amet.</p>
            <p className="sub1Square"><span className="rbd"></span> Lorem ipsum dolor sit amet.</p>
            <p className="sub1Square"><span className="rbd"></span> Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="subS2">
        <img className='algo' src={algoZenith} alt="img" />
      </div>
    </div>
  )
}

export default Section1;
