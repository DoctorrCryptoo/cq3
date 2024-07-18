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
      <img src={Sponsor} className='' />
    </div>
    <div className='flex flex-wrap'>
      <img src={Red} className=''></img>
      <img src={Red1} className='' />
      <img src={Yellow} className=''></img>
      <img src={Yellow1} className='' />
      <img src={Blue} className=''></img>
      <img src={Blue1} className='' />
      <img src={Green} className=''></img>
      <img src={Green1} className='' />
    </div>
  </div>;
};
export default Sponsors;
