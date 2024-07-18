import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import image from "./img/Group 48.png";
import image2 from "./img/Group 46.png";
import image3 from "./img/Group 47.png";
import image5 from "./img/Register.png";
import image6 from "./img/image 84.png";

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="mainimg" id="mainimg">
        <img src={image} alt="" />
      </div>
      <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <ul className="flex space-x-10 text-white text-3xl">
          <li>
            <a
              href="#about"
              className="hover:underline cursor-pointer relative group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#sponsor"
              className="hover:underline cursor-pointer relative group"
            >
              Sponsors
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#prizes"
              className="hover:underline cursor-pointer relative group"
            >
              Prizes
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="hover:underline cursor-pointer relative group"
            >
              Timeline
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="social flex justify-end space-x-8 items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <PiInstagramLogoLight className="insta-icon w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <BsDiscord className="discord w-3 h-3 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </a>
      </div>
      <div className="mainname" id="albus">
        <img src={image3} alt="" />
      </div>
      <div className="hagrid" id="hagrid">
        <img src={image6} alt="" />
      </div>
      <div className="albus" id="hagrid">
        <img src={image2} alt="" />
      </div>

      <a href="#" className="register" id="register">
        <img src={image5} alt="" />
      </a>
    </section>
  );
};
export default Footer;