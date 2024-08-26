import React, {useEffect} from 'react'
import './main.css'

import {HiOutlineClipboardCheck} from 'react-icons/hi'
 import {HiOutlineLocationMarker} from 'react-icons/hi'


import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import img13 from '../../assets/img13.jpg'
import img14 from '../../assets/img14.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Maui",
    location: "Hawaii",
    grade: "CULTURAL RELAX",
    fees: '$700',
    description:
      "Discover Maui breathtaking beaches,lush rainforests, and vibrant culture. Experience the perfect blend of adventure and relaxation on Hawaii enchanting island.",
  },
  
  {
    id: 2,
    imgSrc: img2,
    desTitle: "",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: '$1700',
    description:
      "Embark on a journey along Australia's stunning coastline, where pristine beaches meet vibrant marine life. Experience the natural beauty and laid-back charm of coastal towns.",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "New York",
    location: "United States",
    grade: "CULTURAL RELAX",
    fees: '$1000',
    description:
      "Experience the energy of New York City, where iconic skyscrapers, diverse neighborhoods, and world-class attractions create an unforgettable urban adventure.",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Paris",
    location: "France",
    grade: "CULTURAL RELAX",
    fees: '$2700',
    description:
      "Immerse yourself in the romance of Paris, where iconic landmarks, charming streets, and world-class cuisine make every moment unforgettable.",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Edinburgh",
    location: "Scotland",
    grade: "CULTURAL RELAX",
    fees: '$2200',
    description:
      "Explore Scotland's rugged landscapes, ancient castles, and rich cultural heritage, where history and natural beauty come alive in every corner.",
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Dubai",
    location: "UAE",
    grade: "CULTURAL RELAX",
    fees: '$1400',
    description:
      "Experience the magic of the Dubai desert with a luxurious stay, offering breathtaking dune views, thrilling activities, and authentic Arabian hospitality. Perfect for adventure seekers and those seeking tranquility alike.",
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "London",
    location: "England",
    grade: "CULTURAL RELAX",
    fees: '$3500',
    description:
     "Discover the charm of London with a stay in the heart of the city, offering iconic sights, rich history, and world-class dining at your doorstep. Ideal for both cultural exploration and urban relaxation.",
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "St Moritz",
    location: "Switzerland",
    grade: "CULTURAL RELAX",
    fees: '$3300',
    description:
      "Experience the charm of St. Moritz, a world-renowned alpine destination with stunning mountain scenery, luxurious resorts, and year-round outdoor adventures.",
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Jaipur",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: '$1700',
    description:
      "Discover Jaipur, the vibrant 'Pink City' known for its majestic palaces, historic forts, and rich cultural heritage that brings India's royal past to life.",
  },
  {
    id: 10,
    imgSrc: img10,
    desTitle: "Kashmir",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: '$1500',
    description:
      "Experience the breathtaking beauty of Kashmir, where lush valleys, snow-capped mountains, and serene lakes create a picturesque escape into nature.",
  },
  {
    id: 11,
    imgSrc: img11,
    desTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL RELAX",
    fees: '$4500',
    description:
      "Explore Japan's unique blend of tradition and modernity, from serene temples and lush landscapes to bustling cities and cutting-edge technology.",
  },
  {
    id: 12,
    imgSrc: img12,
    desTitle: "Istanbul",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: '$2500',
    description:
      "Uncover the wonders of Turkey, where ancient ruins, vibrant bazaars, and stunning coastlines blend history with modern charm.",
  },
  {
    id: 13,
    imgSrc: img13,
    desTitle: "Lake Como",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: '$5000',
    description:
      "Discover the elegance of Lake Como, where picturesque villages, stunning lake views, and lush landscapes create a serene and glamorous retreat.",
  },
  {
    id: 14,
    imgSrc: img14,
    desTitle: "Cairo",
    location: "Egypt",
    grade: "CULTURAL RELAX",
    fees: '$2700',
    description:
      "Discover Egypt's timeless wonders, from the majestic pyramids to the enchanting Nile River, where ancient history meets vibrant culture.",
  }

];
const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  return (
  <section className='main container section'>
    <div clasName = "secTitle">
   <h3 className="title">
     Most visited destinations
   </h3>
    </div>

    <div className="setContent grid">
      {/* use high ordfer array method*/}
      {
        Data.map(({id, imgSrc , destTitle , location , grade , fees , description })=>{
        return (
          <div key={id} data-aos="fade-up" className="singleDestination">
            {/* here it will return single id from map array*/}

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="desTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>
                    {grade}
                    <small>+1</small>
                  </span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
              </div>
              <button className="btn flex">
                DETAILS <HiOutlineClipboardCheck className="icon" />
              </button>
            </div>
          </div>
        );
        })
      }
  
    </div>

  </section>
  )
}

export default Main