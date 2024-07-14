import prize from '../../assets/Images/Prize Pool.png';
import Vector1 from '../../assets/Images/Vector1.png';
import Vector2 from '../../assets/Images/Vector2.png';
import Cup from '../../assets/Images/Prize.png';
import Fire from '../../assets/Images/Fire.png';
import Page from '../../assets/Images/Page.png';
import CL from '../../assets/Images/Group 32.png';
const Prize = () => {
  return <div>
        <img src={Vector1} className='absolute top-[1500px] left-[1000px] md:top-[2100px] md:left-[815px] md:w-[700px]' />
    <div>
    <img src={prize} className='h-[60px] absolute top-[1600px] mx-[1000px] md:h-[100px] md:top-[2200px] md:mx-[1000px]' />
    </div>
    <div>
      <img src={Cup} className='absolute h-[600px] w-[400px] mx-[400px] top-[1450px] z-10 md:w-[600px] md:h-[800px] md:top-[2050px] md:mx-[200px]' />
    </div>
    <div>
      <img src={Fire} className='Fire' />
    </div>
    <div>
      <img src={CL} className='' />
    </div>
    <div>
      <img src={Page} className='absolute h-[100px] mx-[1000px] my-[30px] md:h-[200px] md:mx-[1050px] md:my-[100px]' />
    </div> 
    <img src={Vector2} className='absolute left-0 top-[2300px] md:w-[700px] md:my-[720px]' />
    </div>;
};
export default Prize;
