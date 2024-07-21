import Abouti from "../../assets/Images/About.png";
import Book from "../../assets/Images/Book.png";
import train from "../../assets/Images/aboutTrain.png";
const About = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center max-h-full min-h-screen p-4 min-w-screen md:flex-row md:justify-between md:p-0">
      <img src={train} className="w-[60vw] sm:w-[40vw] md:w-[30vw]" alt="" loading="lazy" />
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={Abouti} alt="About" loading="lazy"/>
        <p className="text-white font-sans text-center text-xl md:text-xl max-w-[75vw] md:max-w-[30vw]">
          Campus Quest is a team game with a combination of Treasure Hunt and
          Capture The Flag. The game will essentially involve the first-year
          students and make them explore the campus through the due course of
          the event.{" "}
        </p>
        <div className="relative flex flex-col items-center justify-center mt-16">
        <div className="absolute inset-0 bg-[#0596B4] blur-[42.7px] rounded-md"></div>
          <a href="#Rules" className="relative">
            <img src={Book} className="h-[100px] md:h-[160px]" alt="Books" loading="lazy" />
            <p className="ml-4 -my-4 text-3xl text-center text-white font-harry md:text-5xl md:-my-6">RULES</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;