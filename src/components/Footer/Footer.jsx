import BG from '../../assets/Images/Footer BG.png';
import Campus from '../../assets/Images/CampusQuest.png';
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='h-screen'>
      <img src={BG} className='bg-cover bottom-0 -z-50' />
      <div className='flex justify-center items-center gap-5 xl:gap-20 font-harry text-yellow-200 text-xs md:text-4xl'>
        <a href="#About" className='hover:underline' >About</a>
        <a href="#Prize Pool" className='hover:underline' >Prize Pool</a>
        <a href="#Timeline" className='hover:underline' >Timeline</a>
        <a href="#Our Sponsors" className='hover:underline' >Our Sponsors</a>
      </div>
      <div className='z-10 flex items-center justify-center'>
      <img src={Campus} className='w-1/3  mb-10 ' />
      <a href="#LinkedIn"><FaLinkedin className='md:size-10' /></a>
      <a href="#Twitter"><FaTwitterSquare className='md:size-10' /></a>
      <a href="#Instagram"><PiInstagramLogoLight className='md:size-10' /></a>
      <a href="#Discord"><BsDiscord className='md:size-10' /></a>
      <a href="#Register" className='font-harry text-white text-xl sm:text-3xl lg:text-5xl'>Register</a>
      </div>
    </div>
  );
};
export default Footer;