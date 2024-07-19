import prize from '../../assets/Images/Prize Pool.png';
import Page from '../../assets/Images/Page.png';
import Cup from '../../assets/Images/image (13).png';
const Prize = () => {
  return <div className=''>
    <img src={prize} className='mx-8' />
    <div className='flex flex-col-reverse xl:grid-cols-5 xl:items-center xl:grid'>
      <img src={Cup} className='self-start xl:col-span-3 max-w-screen ' />
    <img src={Page} className='self-center w-2/3 mb-48 xl:col-span-2' />
    </div>
  </div>;
};
export default Prize;
