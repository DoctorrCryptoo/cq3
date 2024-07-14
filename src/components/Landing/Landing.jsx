import BG from '../../assets/Images/Landingbg.png';
import Campus from '../../assets/Images/CampusQuest.png';
import V from '../../assets/Images/Register.png';

const Landing = () => {
  return <div>
    <img src={BG} className='absolute bg-cover top-0' />
    <div>
      <img src={Campus} className='absolute md:mx-[190px] md:h-[150px] md:my-[100px] lg:h-[220px] lg:my-[140px] xl:my-[240px] xl:h-[300px] xl:mx-[300px] ' />
    </div>
    <a href="#Register"><img src={V} alt='Register' className='opacity-90' /></a>
    </div>;
};
export default Landing;