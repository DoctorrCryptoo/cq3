import Time from '../../assets/Images/Timeline.png';
import Train from '../../assets/Images/Train-Timeline.png';
const Timeline = () => {
  return <div>
    <div>
      <img src={Time} className='my-[800px] h-[60px] md:my-[1100px] md:h-[100px] mx-[130px]' />
    </div>
    <div>
      <img src={Train} className='timelinetrain' />
    </div>
  </div>;
};
export default Timeline;
