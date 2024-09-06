import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiInstagramLogoLight } from "react-icons/pi";
import BG from "../../assets/Images/Landingbg.png";
import Campus from "../../assets/Images/CampusQuest.png";
import register from "../../assets/Images/register button landing.png";
import join from "../../assets/Images/join us.png";

const Landing = () => {
	useEffect(() => {
		showInstagramToast();
	}, []);

const showInstagramToast = () => {
  toast(
    <div>
      <a 
        href="https://www.instagram.com/srm_cn?igsh=MTU2a3FzcHAzdmN1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:underline flex justify-center items-center gap-1"
      >
      <PiInstagramLogoLight size={20} />  @srm_cn
      </a>
    </div>,
    { position: 'top-center', autoClose: 120000 }
  );
};
  return <div className='h-screen'>
    <img src={BG} className='absolute top-0 bg-cover -z-50' loading="lazy" />
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      {/*<img src={Campus} loading="lazy" className='lg:w-2/3'/>*/}
      <div className='flex items-center justify-center  '>
        <h1 className='text-white w-[500px] mx-15 text-5xl' >Come Join us for this embarking journey Where dreams turn into reality!!</h1>
        <a href='https://cn24recruitment.vercel.app/' target='_blank'>
      {/* <div className='grid w-full grid-cols-1 justify-items-center mt-[-17rem] z-70'>
      <svg xmlns="http://www.w3.org/2000/svg" width="150" fill="none" viewBox="852 748 203 5">   <g filter="url(#filter0_dddddd_116_80)">     <path d="M953.186 748L852 750.193L953.186 753L1055 750.193L953.186 748Z" fill="#4BDAE5"></path>   </g>   <defs>     <filter id="filter0_dddddd_116_80" x="-339.96" y="-443.96" width="2586.92" height="2388.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">       <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="14.19"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="28.38"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect1_dropShadow_116_80" result="effect2_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="99.33"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect2_dropShadow_116_80" result="effect3_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="198.66"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect3_dropShadow_116_80" result="effect4_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="340.56"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect4_dropShadow_116_80" result="effect5_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="595.98"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect5_dropShadow_116_80" result="effect6_dropShadow_116_80"></feBlend>       <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_116_80" result="shape"></feBlend>     </filter>   </defs> </svg>
  <p id='register-text-landing' className='my-2 text-5xl text-white font-harry'>Register</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="150" fill="none" viewBox="852 748 203 5">   <g filter="url(#filter0_dddddd_116_80)">     <path d="M953.186 748L852 750.193L953.186 753L1055 750.193L953.186 748Z" fill="#4BDAE5"></path>   </g>   <defs>     <filter id="filter0_dddddd_116_80" x="-339.96" y="-443.96" width="2586.92" height="2388.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">       <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="14.19"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="28.38"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect1_dropShadow_116_80" result="effect2_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="99.33"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect2_dropShadow_116_80" result="effect3_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="198.66"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect3_dropShadow_116_80" result="effect4_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="340.56"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect4_dropShadow_116_80" result="effect5_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="595.98"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect5_dropShadow_116_80" result="effect6_dropShadow_116_80"></feBlend>       <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_116_80" result="shape"></feBlend>     </filter>   </defs> </svg>
      </div> 
      <img src={register} alt="" className='w-[300px] mt-8 mb-10 sm:w-[400px] hover:contrast-200 transition-all' loading="lazy"/>*/}
      <button className='rounded-full w-[200px] m-10 h-20 bg-slate-500 hover:bg-slate-600 font-sans text-white text-3xl'>Join Now!</button>
</a>
</div>
      <ToastContainer className={'max-w-40 sm:max-w-60'} />
    </div>
    </div>;
};
export default Landing;
