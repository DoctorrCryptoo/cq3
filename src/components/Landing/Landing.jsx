import BG from '../../assets/Images/Landingbg.png';
import Campus from '../../assets/Images/CampusQuest.png';
import register from '../../assets/Images/register button landing.png';

const Landing = () => {
  return <div className='h-screen'>
    <img src={BG} className='absolute top-0 bg-cover -z-50' loading="lazy" />
    <div className='flex flex-col items-center justify-center w-screen h-full'>
      <img src={Campus} loading="lazy" />
      <p className='mx-2 text-xl tracking-wider text-center text-white sm:text-4xl'>lorem ipsum lorem ipsum lorem ipsum </p>
    <a href='#register'>
      {/* <div className='grid w-full grid-cols-1 justify-items-center mt-[-17rem] z-70'>
      <svg xmlns="http://www.w3.org/2000/svg" width="150" fill="none" viewBox="852 748 203 5">   <g filter="url(#filter0_dddddd_116_80)">     <path d="M953.186 748L852 750.193L953.186 753L1055 750.193L953.186 748Z" fill="#4BDAE5"></path>   </g>   <defs>     <filter id="filter0_dddddd_116_80" x="-339.96" y="-443.96" width="2586.92" height="2388.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">       <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="14.19"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="28.38"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect1_dropShadow_116_80" result="effect2_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="99.33"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect2_dropShadow_116_80" result="effect3_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="198.66"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect3_dropShadow_116_80" result="effect4_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="340.56"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect4_dropShadow_116_80" result="effect5_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="595.98"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect5_dropShadow_116_80" result="effect6_dropShadow_116_80"></feBlend>       <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_116_80" result="shape"></feBlend>     </filter>   </defs> </svg>
  <p id='register-text-landing' className='my-2 text-5xl text-white font-harry'>Register</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="150" fill="none" viewBox="852 748 203 5">   <g filter="url(#filter0_dddddd_116_80)">     <path d="M953.186 748L852 750.193L953.186 753L1055 750.193L953.186 748Z" fill="#4BDAE5"></path>   </g>   <defs>     <filter id="filter0_dddddd_116_80" x="-339.96" y="-443.96" width="2586.92" height="2388.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">       <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="14.19"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="28.38"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect1_dropShadow_116_80" result="effect2_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="99.33"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect2_dropShadow_116_80" result="effect3_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="198.66"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect3_dropShadow_116_80" result="effect4_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="340.56"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect4_dropShadow_116_80" result="effect5_dropShadow_116_80"></feBlend>       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>       <feOffset></feOffset>       <feGaussianBlur stdDeviation="595.98"></feGaussianBlur>       <feColorMatrix type="matrix" values="0 0 0 0 0.294118 0 0 0 0 0.854902 0 0 0 0 0.898039 0 0 0 1 0"></feColorMatrix>       <feBlend mode="normal" in2="effect5_dropShadow_116_80" result="effect6_dropShadow_116_80"></feBlend>       <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_116_80" result="shape"></feBlend>     </filter>   </defs> </svg>
      </div> */}
      <img src={register} alt="" className='w-[300px] mt-8 sm:w-[400px]' loading="lazy"/>
</a>
    </div>
    </div>;
};
export default Landing;