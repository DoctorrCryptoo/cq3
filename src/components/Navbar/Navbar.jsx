import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const sections = document.querySelectorAll("section");
		let currentSection = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (window.scrollY >= sectionTop - 100) {
				currentSection = section.getAttribute("id");
			}
		});
		if (
			window.innerHeight + window.scrollY >=
			document.body.offsetHeight - 10
		) {
			currentSection = "contact";
		}
		setActiveSection(currentSection);

		// Check if the page has been scrolled down a little bit
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
<div className="sticky top-0 z-50 flex items-center justify-center w-screen h-20 md:h-24">
  <div
    className={`sm:hidden -z-10 absolute inset-0 bg-gradient-to-b from-[#001113] via-[#001113]/90 to-transparent transition-opacity duration-500 ${
      scrolled ? "opacity-100" : "opacity-0"
    }`}
  />

  <img
    src="cnlogopotter.png"
    alt="logo"
    className="absolute top-1 left-3 w-14 pl-3 pt-4 sm:w-[5rem] sm:pt-2"//"w-16 m-1 pl-3 pt-2 sm:w-[5rem] sm:ml-8 sm:pt-2"
  />
  <div className="flex items-center justify-center flex-grow sm:hidden">
    <a href="#about">
      <h1 className="text-3xl text-white font-harry">Campus Quest 3</h1>
    </a>
  </div>
  <div className="absolute flex items-center right-2 sm:hidden">
    <RxHamburgerMenu
      className="w-10 mx-2 text-3xl text-white cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  </div>
  
  {/* Centered Navigation Bar */}
	<div className="hidden sm:flex bg-[#001214]/[0.55] justify-around rounded-2xl h-16 w-[500px] place-items-center relative">
    <a
      href="#about"
      className={`text-xl sm:text-3xl text-white font-harry ${
        activeSection === "about" ? "active" : ""
      }`}
    >
      About
    </a>
    <a
      href="#prize"
      className={`text-xl sm:text-3xl text-white font-harry ${
        activeSection === "prize" ? "active" : ""
      }`}
    >
      Prize
    </a>
    <a
      href="#timeline"
      className={`text-xl sm:text-3xl text-white font-harry ${
        activeSection === "timeline" ? "active" : ""
      }`}
    >
      Timeline
    </a>
    <a
      href="#contact"
      className={`text-xl sm:text-3xl text-white font-harry ${
        activeSection === "contact" ? "active" : ""
      }`}
    >
      Contact Us
    </a>
    <div className="absolute w-full h-full pointer-events-none">
      <img
        src="snitch.png"
        alt="Golden Snitch"
        className={`absolute transition-all duration-300 w-20 ease-in-out transform ${
          activeSection === "about" ? "snitch-about" : ""
        } ${activeSection === "prize" ? "snitch-prize" : ""} ${
          activeSection === "timeline" ? "snitch-timeline" : ""
        } ${activeSection === "contact" ? "snitch-contact" : ""}`}
      />
    </div>
  </div>

  {menuOpen && (
    <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-[#001214] opacity-95 flex flex-col justify-center items-center space-y-8 p-4 z-40">
      <IoClose
        className="absolute w-12 h-6 text-white cursor-pointer top-7 right-2"
        onClick={() => setMenuOpen(false)}
      />
      <a
        href="#about"
        className="text-3xl text-white font-harry"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#prize"
        className="text-3xl text-white font-harry"
        onClick={() => setMenuOpen(false)}
      >
        Prize
      </a>
      <a
        href="#timeline"
        className="text-3xl text-white font-harry"
        onClick={() => setMenuOpen(false)}
      >
        Timeline
      </a>
      <a
        href="#contact"
        className="text-3xl text-white font-harry"
        onClick={() => setMenuOpen(false)}
      >
        Contact Us
      </a>
      <a
        href="#"
        className="px-8 py-1 text-3xl text-[#A6F0FF] border border-white rounded-4 font-harry bg-slate-200/15"
        onClick={() => setMenuOpen(false)}
      >
        Join Now
      </a>
    </div>
  )}
</div>

	);
};

export default Navbar;
