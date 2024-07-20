import Campus from '../../assets/Images/CampusQuest.png';
import Owl from '../../assets/Images/Hogwarts 1.png';
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-screen bg-cover bg-footer-img'>
      <div className='flex items-center justify-center gap-5 mt-32 text-xs text-yellow-200 xl:gap-20 font-harry md:text-4xl'>
        <a href="#About" className='hover:underline' >About</a>
        <a href="#Prize Pool" className='hover:underline' >Prize Pool</a>
        <a href="#Timeline" className='hover:underline' >Timeline</a>
        <a href="#Our Sponsors" className='hover:underline' >Our Sponsors</a>
      </div>
      <div className='flex items-end justify-end mt-5' >
      <img src={Owl} className='absolute w-1/12 ' />
      </div>
      <div className='flex items-center justify-center mt-10'>
      <img src={Campus} className='w-1/3 place-items-center' />
      </div >
      <div className='z-10 flex items-center justify-center mt-10 gap-5 xl:gap-10 '>
          <a href="#LinkedIn"><FaLinkedin color='white' className='md:size-10' /></a>
          <a href="#Twitter"><FaTwitterSquare color='white' className='md:size-10' /></a>
          <a href="#Instagram"><PiInstagramLogoLight color='white' className='md:size-10' /></a>
          <a href="#Discord"><BsDiscord color='white' className='md:size-10' /></a>
      </div>
      <div className='flex items-end justify-end p-4 md:p-10'>
      <a href="#Register" className='text-xl text-white font-harry sm:text-3xl lg:text-5xl '>Register</a>
      </div>
    </div>
  );
};
export default Footer; 