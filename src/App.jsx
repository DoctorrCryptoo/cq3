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
      <div className="h-lvh section" id="about"><Landing  /></div>
      <div className="h-lvh section" id="about"><About  /></div>
      <div className="h-lvh section" id="timeline"><Timeline /></div>
      <div className="h-svh section" id="prize"><Prize  /></div>
      <div className="h-svh section" id=""><Sponsors  /></div>
      <div className="h-svh section" id="contact"><Footer  /></div>
    </div> 
  );
};

export default App;
