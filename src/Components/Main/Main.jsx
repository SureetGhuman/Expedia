import React, { useEffect } from "react";
import "./main.css";

import { HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Maui",
    location: "Hawaii",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Discover Maui breathtaking beaches, lush rainforests, and vibrant culture. Experience the perfect blend of adventure and relaxation on Hawaii's enchanting island.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Australia", // Added title here
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$1700",
    description:
      "Embark on a journey along Australia's stunning coastline, where pristine beaches meet vibrant marine life. Experience the natural beauty and laid-back charm of coastal towns.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "New York",
    location: "United States",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description:
      "Experience the energy of New York City, where iconic skyscrapers, diverse neighborhoods, and world-class attractions create an unforgettable urban adventure.",
  },
  // ... other destinations ...
  {
    id: 14,
    imgSrc: img14,
    destTitle: "Cairo",
    location: "Egypt",
    grade: "CULTURAL RELAX",
    fees: "$2700",
    description:
      "Discover Egypt's timeless wonders, from the majestic pyramids to the enchanting Nile River, where ancient history meets vibrant culture.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {/* Use high-order array method */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small> +1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;
