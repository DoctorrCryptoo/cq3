import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PiInstagramLogoLight } from "react-icons/pi";
import BG from "../../assets/Images/Landingbg.png";
import Campus from "../../assets/Images/CampusQuest.png";
import register from "../../assets/Images/register button landing.png";
import join from "../../assets/Images/join us.png";

const Landing = () => {
	useEffect(() => {
		showInstagramToast();
	}, []);

	const showInstagramToast = () => {
		toast.info(
			<div className="cursor-pointer">
				Follow us on instagram for updates{" "}
				<span className="text-pink-600">@srm_cn</span>
			</div>,
			{
				position:
					window.innerWidth > 480 ? "top-right" : "bottom-right",
				autoClose: 60000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
				icon: ({ theme, type }) => (
					<PiInstagramLogoLight
						size={20}
						className="inline text-pink-600"
					/>
				),
			}
		);
	};
	return (
		<div className="h-[calc(100vh-80px)]">
			<img
				src={BG}
				className="absolute top-0 bg-cover -z-50"
				loading="lazy"
			/>
			<div className="flex flex-col items-center justify-center w-screen h-full">
				<img src={Campus} loading="lazy" className="lg:w-2/3" />
				<div className="flex flex-wrap justify-center w-[80%]">
					<img
						src={register}
						alt=""
						className="w-[250px] my-3 mx-2 sm:w-[400px] hover:contrast-200 transition-all cursor-pointer"
						loading="lazy"
						onClick={() => {
							window.open(
								"http://cnsrm.vercel.app/cq-registration",
								"_blank"
							);
						}}
					/>
					<img
						src={join}
						alt=""
						className="w-[250px] my-3 mx-2 sm:w-[400px] hover:contrast-200 transition-all cursor-pointer"
						loading="lazy"
						onClick={() => {
							window.open(
								"https://cnsrm.vercel.app/apply-now",
								"_blank"
							);
						}}
					/>
				</div>
				<ToastContainer
					position={
						window.innerWidth > 480 ? "top-right" : "bottom-right"
					}
					autoClose={5000}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					theme="dark"
					onClick={() => {
						window.open(
							"https://www.instagram.com/srm_cn?igsh=MTU2a3FzcHAzdmN1",
							"_blank"
						);
					}}
				/>
			</div>
		</div>
	);
};
export default Landing;
