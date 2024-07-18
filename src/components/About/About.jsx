import Abouti from "../../assets/Images/About.png";
import Book from "../../assets/Images/Book.png";
import train from "../../assets/Images/aboutTrain.png";
const About = () => {
  return (
    <div className="min-h-screen min-w-screen max-h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between p-4 md:p-0">
      <img src={train} className="w-[60vw] sm:w-[40vw] md:w-[30vw]" alt="" />
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={Abouti} alt="About" />
        <p className="text-white font-sans text-center text-xl md:text-xl max-w-[75vw] md:max-w-[30vw]">
          Campus Quest is a team game with a combination of Treasure Hunt and
          Capture The Flag. The game will essentially involve the first-year
          students and make them explore the campus through the due course of
          the event.{" "}
        </p>
        <div className="flex flex-col items-center justify-center pt-4">
          <img src={Book} className="h-[80px] md:h-[160px]" alt="Books" />
          <a href="#Rules" className="text-white font-harry text-6xl md:text-6xl -my-4 md:-my-8">Rules</a>
        </div>
      </div>
    </div>
  );
};
export default About;