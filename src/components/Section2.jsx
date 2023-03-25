import React from "react";
import "./Section2.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import graph from "./images/graph.png";
import aa from "./images/aa.jpg";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="s2sub1">
        <div className="head">
          <h1 className="p1">Invest in skills,</h1>
          <h1 className="p2">
            <span className="earn">earn 10X</span> of what you paid.
          </h1>
        </div>
        <p className="para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          saepe reprehenderit cum eum quibusdam atque molestias! Sit, animi
          nulla veritatis, deleniti sapiente repudiandae aliquid, eaque eveniet
          saepe harum porro iure?
        </p>
        <div className="box">
          <div className="para4">
            <div className="ack">
              <div className="sq">
                <span className="rbd2 rbd"></span>
              </div>
              <div className="divs2">
                <div className="div1">1.2Cr/Year</div>
                <div className="div2">highest fresher package</div>
              </div>
            </div>
            <div className="ack">
              <div className="sq">
                <span className="rbd2 rbd"></span>
              </div>
              <div className="divs2">
                <div className="div1">Multiple &lt;100 Ranks</div>
                <div className="div2">in kickstart last year</div>
              </div>
            </div>
            <div className="ack">
              <div className="sq">
                <span className="rbd2 rbd"></span>
              </div>
              <div className="divs2">
                <div className="div1">1000+ Offers</div>
                <div className="div2">from top companies</div>
              </div>
            </div>
            <div className="ack">
              <div className="sq">
                <span className="rbd2 rbd"></span>
              </div>
              <div className="divs2">
                <div className="div1">Trusted by IITians</div>
                <div className="div2">for their career prep</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s2sub2">
        <div className="temp">
          <div className="sub2sub1">
            <p className="batch">Premium Victor Batch</p>
            <p className="cutPrice">
              <s>&#8377;19,999</s>
            </p>
            <p className="cutPrice cp">
              <span className="bt">&#8377;13</span>,999
            </p>
            <img src={aa} alt="img" className="aa" />
          </div>
          <div className="sub2sub2">
            <div className="sub2sub2sub1">
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">100+ Hrs Live Content</div>
              </p>
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">50+ Hrs Contest</div>
              </p>
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">500+ Problems</div>
              </p>
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">
                  Inlcudes an interview bootcamp and access to a mentor network
                </div>
              </p>
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">
                  Enjoy access to our content for 1year (Paid extensions
                  available)
                </div>
              </p>
              <p className="sub1Square">
                <span className="rbd rbd3"></span>
                <div className="cont">
                  Flexible payment option, including no cost EMI are available
                </div>
              </p>
              <button className="join now">
                Join now{" "}
                <span className="arrow">
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={graph} alt="img" className="graph" />
    </div>
  );
};

export default Section2;
