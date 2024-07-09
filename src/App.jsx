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
      <Landing />
      <About />
      <Timeline />
      <Prize />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default App;
