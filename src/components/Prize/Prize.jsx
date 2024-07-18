import prize from '../../assets/Images/Prize Pool.png';
import Cup from '../../assets/Images/Prize.png';
import Fire from '../../assets/Images/Fire.png';
import Page from '../../assets/Images/Page.png';
import CL from '../../assets/Images/Group 32.png';
const Prize = () => {
  return <div className='min-h-screen min-w-screen max-h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between p-4 md:p-0'>
    <img src={Cup} className='h-[160px] md:h-[600px]' />
    <img src={Fire} className='h-[80px] md:h-[200px] opacity-20 w-[200px] filter: drop-shadow(25px 4px 4px rgba(0, 0, 0, 0.72)) ' />
    <img src={CL} className='h-[60px] md:h-[400px]' />
    <img src={prize} className='h-[100px] md:h-[200px]' />
    <img src={Page} className='h-[100px] md:h-[200px]' />
  </div>;
};
export default Prize;
