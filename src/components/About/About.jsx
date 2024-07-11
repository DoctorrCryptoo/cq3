import Vector1 from '../../assets/Images/Vector1.png';
import Vector2 from '../../assets/Images/Vector2.png';
import Abouti from '../../assets/Images/About.png';
import Book from '../../assets/Images/Book.png';
import Train from '../../assets/Images/Train-About.png';
import Cloudl from '../../assets/Images/cl-ab-l.png';
import Cloudr from '../../assets/Images/cl-ab-r.png';
const About = () => {
  return <div>
    <img src={Vector1} className='absolute left-[1000px] w-[700px] md:left-[815px] md:my-[60px]' />
    <div>
      <img src={Cloudl} className="z-30 absolute md:my-[40px] md:w-[650px] md:mx-[4px] md:h-[431px]" />
      </div>
      <div>
      <img src={Cloudr} className="z-20 absolute my-[40px] md:my-[10px] mx-[50px] md:mx-[120px] md:h-[531px] md:w-[760px]" />
      </div>
      <div>
      <img src={Train} className="mx-2 absolute w-[600px] my-[200px] md:my-[280px] md:w-[700px] md:h-[570px]" />
      </div>
      <div>
        <img src={Abouti} className='absolute h-[60px] mx-[820px] my-[100px] md:mx-[1080px] md:my-[240px] md:w-[250px] md:h-[100px]' />
      </div>
      <div>
    <p className='text-white font-sans text-center absolute text-xl mx-[700px] my-[200px] w-[400px] md:text-xl md:my-[420px] md:mx-[950px] md:w-[500px]'>Campus Quest is a team game with a combination of Treasure Hunt and Capture The Flag. The game will essentially involve the first-year students and make them explore the campus through the due course of the event. </p>
    </div>
    <div>
      <img src={Book} className='absolute h-[80px] mx-[500px] my-[380px] md:mx-[900px] md:h-[160px] md:my-[600px] ' />
      </div>
      <div>
      <a href="#" className='text-white absolute font-harry text-6xl mx-[530px] my-[440px] md:text-6xl md:my-[720px] md:mx-[970px]'>Rules</a>
      </div>
      <img src={Vector2} className='absolute left-0 my-[600px] md:w-[700px] md:my-[920px]' />
  </div>;
};
export default About;

