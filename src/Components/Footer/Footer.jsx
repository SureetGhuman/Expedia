import React, { useEffect } from "react";
import "./footer.css";
import video from "../../assets/video.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted className="background-video" />
        <div className="overlay"></div>
      </div>

      <div className="secContent container">
        {/* Contact Section */}
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="email" placeholder="Enter Email Address" />
            <button className="btn-flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="footerCard flex">
          <div className="footerIntro">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Expedia.
              </a>
            </div>
            <p className="footerParagraph">
              Explore the world with us. We bring you the best travel
              experiences, adventure, and comfort.
            </p>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Payment
                </li>
              </ul>
            </div>

            {/* Group Two */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> TripAdvisor
                </li>
              </ul>
            </div>

            {/* Group Three */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" /> Europe
                </li>
              </ul>
            </div>
          </div>

          <div className="footerBottom">
            <small>Best Travel Website</small>
            <small>© 2024 Expedia. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
