import Sponsor from "../../assets/Images/Our Sponsors.png";
import Red from "../../assets/Images/Red.png";
import Yellow from "../../assets/Images/Yellow.png";
import Blue from "../../assets/Images/Blue.png";
import Green from "../../assets/Images/Green.png";
const Sponsors = () => {
	return (
		<div id="sponsors">
			<img src={Sponsor} className="w-4/5 pt-5 ml-5 md:w-1/2 md:pt-10" />
			<div className="flex flex-wrap justify-center gap-4 p-4 mx-4">
				<div>
					<img src={Red} className="max-h-[250px] md:max-h-[550px] max-w-[350px]" loading="lazy"/>
					<p className="font-bluu text-[#C90909] text-xl sm:text-4xl text-center text-nowrap">
						And that's Anime
					</p>
				</div>
				<div>
					<img src={Yellow} className="max-h-[250px] md:max-h-[550px] max-w-[350px]" loading="lazy"/>
					<p className="font-bluu text-[#FBD702] text-xl sm:text-4xl text-center text-nowrap">
						Rasoe
					</p>
				</div>
				<div>
					<img src={Blue} className="max-h-[250px] md:max-h-[550px] max-w-[350px]" loading="lazy"/>
					<p className="font-bluu text-[#00587E] text-xl sm:text-4xl text-center text-nowrap">
						Interview Cake
					</p>
				</div>
				<div>
					<img src={Green} className="max-h-[250px] md:max-h-[550px] max-w-[350px]" loading="lazy"/>
					<p className="font-bluu text-[#1D7239] text-xl sm:text-4xl text-center text-nowrap">
						Chocoff
					</p>
				</div>
			</div>
		</div>
	);
};
export default Sponsors;
