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
			<section id="about">
				<Landing />
				<div className="flex justify-end w-screen">
					<img
						src={divRight}
						alt=""
						className="w-[75vw] md:w-[50vw]"
					/>
				</div>
				<About />
			</section>
			<section id="prize">
				<div className="flex justify-start w-screen">
					<img
						src={divLeft}
						alt=""
						className="w-[75vw] md:w-[50vw]"
					/>
				</div>
				<Prize />
			</section>
			<section id="timeline">
				<div className="flex justify-end w-screen">
					<img
						src={divRight}
						alt=""
						className="w-[75vw] md:w-[50vw]"
					/>
				</div>
				<Timeline />
				<div className="flex justify-start w-screen">
					<img
						src={divLeft}
						alt=""
						className="w-[75vw] md:w-[50vw]"
					/>
				</div>
				<Sponsors />
			</section>
			<section id="contact">
				<Footer />
			</section>
		</div>
	);
};

export default App;
