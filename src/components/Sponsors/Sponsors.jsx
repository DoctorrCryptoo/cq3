import Vector1 from '../../assets/Images/Vector1.png';
import Sponsor from '../../assets/Images/Our Sponsers.png';
import Red from '../../assets/Images/Red.png';
import Red1 from '../../assets/Images/Red1.png';
import Yellow from '../../assets/Images/Yellow.png';
import Yellow1 from '../../assets/Images/Yellow1.png';
import Blue from '../../assets/Images/Blue.png';
import Blue1 from '../../assets/Images/Blue1.png';
import Green from '../../assets/Images/Green.png';
import Green1 from '../../assets/Images/Green1.png';
const Sponsors = () => {
  return <div>
    <div>
      <img src={Sponsor} className='absolute h-[60px] my-[700px] md:h-[100px] md:my-[800px] mx-[50px]' />
    </div>
    <div className='flex flex-wrap'>
      <img src={Red} className='absolute h-[300px] mx-[100px] my-[900px] md:h-[400px] md:mx-[100px] md:my-[1000px]'></img>
      <img src={Red1} className='absolute mx-[75px] md:my-[1440px] md:mx-[110px] my-[1240px]' />
      <img src={Yellow} className='absolute h-[300px] mx-[400px] my-[900px] md:h-[400px] md:mx-[450px] md:my-[1000px]'></img>
      <img src={Yellow1} className='absolute mx-[385px] md:my-[1440px] md:mx-[463px] my-[1240px]' />
      <img src={Blue} className='absolute h-[300px] mx-[700px] my-[900px] md:h-[400px] md:mx-[800px] md:my-[1000px]'></img>
      <img src={Blue1} className='absolute mx-[685px] md:my-[1440px] md:mx-[820px] my-[1240px]' />
      <img src={Green} className='absolute h-[300px] mx-[1000px] my-[900px] md:h-[400px] md:mx-[1150px] md:my-[1000px]'></img>
      <img src={Green1} className='absolute mx-[985px] md:my-[1440px] md:mx-[1170px] my-[1240px]' />
    </div>
    <img src={Vector1} className='absolute top-[3100px] left-[1000px] w-[700px] md:left-[815px] md:my-[960px]' />
  </div>;
};
export default Sponsors;
