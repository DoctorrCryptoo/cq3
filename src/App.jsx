import {
  About,
  Footer,
  Landing,
  Navbar,
  Prize,
  Sponsors,
  Timeline,
} from "./components/index.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="section" id="about"><Landing  /></div>
      <div className="section" id="about"><About  /></div>
      <div className="section" id="timeline"><Timeline /></div>
      <div className="section" id="prize"><Prize  /></div>
      <div className="section" id=""><Sponsors  /></div>
      <div className="section" id="contact"><Footer  /></div>
    </div> 
  );
};

export default App;
