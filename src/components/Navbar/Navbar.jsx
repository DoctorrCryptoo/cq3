const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-full m-4">
			<img src="cnlogopotter.png" alt="logo" className="w-[6rem]" />
			<div className="bg-[#001214] opacity-55 flex justify-around rounded-2xl h-16 w-[40%] mx-auto place-items-center">
				<a href="" className="text-3xl text-white font-harry">About</a>
				<a href="" className="text-3xl text-white font-harry">Prize</a>
				<a href="" className="text-3xl text-white font-harry">Timeline</a>
				<a href="" className="text-3xl text-white font-harry">Contact Us</a>
			</div>
			<div className="w-[6rem]"></div>
		</div>
	);
};
export default Navbar;
