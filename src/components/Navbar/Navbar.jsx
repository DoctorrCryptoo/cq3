import { useState, useEffect } from "react";

const Navbar = () => {
	const [activeSection, setActiveSection] = useState("");
	const [menuOpen, setMenuOpen] = useState(false);

	const handleScroll = () => {
		const sections = document.querySelectorAll(".section");
		let currentSection = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (window.scrollY >= sectionTop - 50) {
				currentSection = section.getAttribute("id");
			}
		});
		setActiveSection(currentSection);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="sticky top-0 z-50 flex items-center justify-between w-full m-2 sm:m-0">
			<img src="cnlogopotter.png" alt="logo" className="w-16 m-1 sm:w-[5rem] sm:ml-8" />
			<div className="flex items-center justify-center flex-grow sm:hidden">
				<h1 className="text-3xl text-white font-harry">Campus Quest 3</h1>
			</div>
			<div className="flex items-center sm:hidden">
				<img
					src="steps.png"
					alt="menu"
					className="w-12 mx-4 text-3xl text-white cursor-pointer"
					onClick={() => setMenuOpen(!menuOpen)}
				/>
			</div>
			<div className="hidden sm:flex bg-[#001214] opacity-55 justify-around rounded-2xl h-16 w-[500px] mx-auto place-items-center relative">
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
						} ${
							activeSection === "contact" ? "snitch-contact" : ""
						}`}
					/>
				</div>
			</div>
			{menuOpen && (
				<div className="sm:hidden fixed top-0 left-0 w-full h-full bg-[#001214] opacity-95 flex flex-col justify-center items-center space-y-8 p-4 z-40">
					<img
						src="steps.png"
						alt="Close menu"
						className="absolute w-12 rotate-180 cursor-pointer top-4 right-4"
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
				</div>
			)}
			<div className="w-[6rem] hidden sm:block"></div>
		</div>
	);
};

export default Navbar;
