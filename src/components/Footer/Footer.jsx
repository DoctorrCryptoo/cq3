import Campus from '../../assets/Images/campusquestnomoon.png';
import Owl from '../../assets/Images/Hogwarts 1.png';
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaMediumM } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-screen bg-cover lg:mt-40 bg-footer-img lg:bg-footer-img-desktop'>
      <div className='hidden md:flex md:justify-between md:items-center md:p-8'>
      </div>
      <div className='flex items-center justify-center gap-5 py-3 text-lg text-yellow-200 sm:justify-center xl:gap-20 font-harry md:text-4xl'>
        <a href="#about" className='relative after:bg-yellow-200 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200' >About</a>
        <a href="#prize" className='relative after:bg-yellow-200 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200' >Prize Pool</a>
        <a href="#timeline" className='relative after:bg-yellow-200 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200' >Timeline</a>
        <a href="#sponsors" className='relative after:bg-yellow-200 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200' >Our Sponsors</a>
      </div>
      <div className='hidden mt-1 md:flex md:items-end md:justify-end' >
      <img src={Owl} className='absolute w-1/12 ' loading="lazy"/>
      </div>
      <div className='flex items-center justify-center mt-10'>
      <img src={Campus} className='w-2/3 md:w-1/3 place-items-center' loading="lazy"/>
      </div >
      <div className='z-10 flex items-center justify-center gap-5 pb-10 mt-10 xl:gap-10'>
          <a target="_blank" href="https://cnsrm.vercel.app/"><AiOutlineGlobal color='white' className='md:size-10 hover:contrast-50' /></a>
          <a target="_blank" href="https://www.linkedin.com/company/coding-ninjas-club-srm/"><FaLinkedin color='white' className='md:size-10 hover:contrast-50' /></a>
          <a target="_blank" href="https://medium.com/@cnsrm"><FaMediumM color='white' className='md:size-10 hover:contrast-50' /></a>
          <a target="_blank" href="https://www.instagram.com/srm_cn?igsh=MTU2a3FzcHAzdmN1"><PiInstagramLogoLight color='white' className='md:size-10 hover:contrast-50' /></a>
          <a target="_blank" href="https://discord.com/invite/w9VE7J3W"><BsDiscord color='white' className='md:size-10 hover:contrast-50' /></a>
      </div>
     {/*<div className='flex items-end justify-end p-4 md:p-10'>
      <a href="#Register" className='text-xl text-white font-harry sm:text-3xl lg:text-5xl hover:contrast-50'>Register</a>
      </div>*/}
    </div>
  );
};
export default Footer; 