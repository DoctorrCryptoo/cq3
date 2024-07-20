import BG from '../../assets/Images/Footer BG.png';
import Campus from '../../assets/Images/CampusQuest.png';
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-screen bg-cover bg-footer-img'>
      {/* <img src={BG} className='bottom-0 bg-cover -z-50' /> */}
      <div className='flex items-center justify-center gap-5 mt-32 text-xs text-yellow-200 xl:gap-20 font-harry md:text-4xl'>
        <a href="#About" className='hover:underline' >About</a>
        <a href="#Prize Pool" className='hover:underline' >Prize Pool</a>
        <a href="#Timeline" className='hover:underline' >Timeline</a>
        <a href="#Our Sponsors" className='hover:underline' >Our Sponsors</a>
      </div>
      <div className='z-10 flex items-center justify-center'>
      <img src={Campus} className='w-1/3 mb-10 ' />
      <a href="#LinkedIn"><FaLinkedin className='md:size-10' /></a>
      <a href="#Twitter"><FaTwitterSquare className='md:size-10' /></a>
      <a href="#Instagram"><PiInstagramLogoLight className='md:size-10' /></a>
      <a href="#Discord"><BsDiscord className='md:size-10' /></a>
      <a href="#Register" className='text-xl text-white font-harry sm:text-3xl lg:text-5xl'>Register</a>
      </div>
    </div>
  );
};
export default Footer;