import Time from '../../assets/Images/Timeline.png';
import Train from '../../assets/Images/Train-Timeline.png';
const Timeline = () => {
  return <div className='p-10'>
      <img src={Time} className='float-right'/>
      <img src={Train} className='timeline' />
  </div>;
};
export default Timeline;
