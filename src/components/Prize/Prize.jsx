import prize from '../../assets/Images/Prize Pool.png';
import Vector1 from '../../assets/Images/Vector1.png';
import Vector2 from '../../assets/Images/Vector2.png';
import Cup from '../../assets/Images/Prize.png';
import Fire from '../../assets/Images/Fire.png';
import Page from '../../assets/Images/Page.png';
import Cl1 from '../../assets/Images/cl-1-P.png';
import Cl2 from '../../assets/Images/cl-2-P.png';
import Cl3 from '../../assets/Images/cl-3-P.png';
import Cl4 from '../../assets/Images/cl-4-P.png';
import Cl5 from '../../assets/Images/cl-5-P.png';
import Cl6 from '../../assets/Images/cl-6-P.png';
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
      <img src={Page} className='absolute h-[100px] mx-[1000px] my-[30px] md:h-[200px] md:mx-[1050px] md:my-[100px]' />
    </div> 
    <div>
      <p className='absolute font-harry text-black text-3xl mx-[1030px] my-[50px] w-[100px] md:text-5xl md:my-[150px] md:mx-[1130px] md:w-[200px]'>Yet to be</p>
      <p className='absolute font-harry text-red-900 text-3xl mx-[1040px] my-[85px] w-[100px] md:text-5xl md:my-[210px] md:mx-[1140px]'>Revealed</p>
    </div>
    <div>
      <div>
        <img src={Cl1} className='absolute w-[500px] my-[140px] md:my-[200px] ' />
      </div>
      <div>
        <img src={Cl2} className='absolute w-[500px] my-[160px] mx-[200px] md:my-[200px] md:mx-[100px]' />
      </div>
      <div>
        <img src={Cl3} className='absolute w-[500px] my-[160px] mx-[300px] md:my-[260px] md:mx-[220px]' />
      </div>
      <div>
        <img src={Cl4} className='absolute w-[500px] my-[160px] mx-[400px] md:mx-[350px] md:my-[300px]' />
      </div>
      <div>
       <img src={Cl5} className='absolute w-[500px] z-20 my-[180px] md:my-[170px]' />
      </div>
      <div>
        <img src={Cl6} className='absolute w-[600px] z-20 my-[180px] mx-[400px] md:my-[200px] md:mx-[400px]' />
      </div>
    </div>
    <img src={Vector2} className='absolute left-0 top-[2300px] md:w-[700px] md:my-[720px]' />
    </div>;
};
export default Prize;
