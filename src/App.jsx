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
      <Landing/>
      <div className="flex justify-end w-screen">
        <img src={divRight} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <About />
      <div className="flex justify-start w-screen">
        <img src={divLeft} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Prize />
      <div className="flex justify-end w-screen">
        <img src={divRight} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Timeline />
      <div className="flex justify-start w-screen">
        <img src={divLeft} alt="" className="w-[75vw] md:w-[50vw]" />
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
