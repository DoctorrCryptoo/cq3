import prize from '../../assets/Images/Prize Pool.png';
import Page from '../../assets/Images/Page.png';
import Cup from '../../assets/Images/image (13).png';
const Prize = () => {
  return <div className=''>
    <img src={prize} className='w-2/3 pt-5 ml-5 md:pt-10 md:w-2/5 ' loading="lazy"/>
    <div className='flex flex-col-reverse xl:grid-cols-5 xl:items-center xl:grid'>
      <img src={Cup} className='self-start xl:col-span-3 max-w-screen ' loading="lazy"/>
    <img src={Page} className='self-center w-2/3 my-8 xl:mb-48 xl:col-span-2' loading="lazy"/>
    </div>
  </div>;
};
export default Prize;
