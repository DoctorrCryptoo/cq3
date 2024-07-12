import {
  About,
  Footer,
  Landing,
  Navbar,
  Prize,
  Sponsors,
  Timeline,
} from "./components/index.js";

import divRight from "./assets/Images/Vector1.png";
import divLeft from "./assets/Images/Vector2.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <div className="w-screen flex justify-end">
        <img src={divRight} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <About />
      <div className="w-screen flex justify-start">
        <img src={divLeft} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Timeline />
      <div className="w-screen flex justify-end">
        <img src={divRight} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Prize />
      <div className="w-screen flex justify-start">
        <img src={divLeft} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
