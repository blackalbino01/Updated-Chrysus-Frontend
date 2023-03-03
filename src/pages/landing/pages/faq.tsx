import { PrimaryGradientText } from "src/components/text";
import { ContentToggle } from "src/components/toggles";

export const FAQ = () => {
	return (
		<>
			<div className="mt-5 d-flex flex-column align-items-center justify-content-center">
				<div className="col-8">
					<div className="d-flex flex-column align-items-center justify-content-center">
						{/* <PrimaryGradientText>FAQ's</PrimaryGradientText> */}
						<p style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "30px", marginBottom: "20px" }}>FAQ's </p>
						<div className="mt-5"></div>
						<h2 className="mb-3">How does project Chrysus utilize the CHC/CGT tokens?</h2>
						<p className="text-white ">
						Project Chrysus utilizes the CHC/CGT tokens to incentivize users to participate in the 
						network by providing rewards for completing tasks, such as validating transactions, 
						storing data, and providing services. The tokens can also be used for buying services, 
						such as data storage and access to a decentralized exchange. Additionally, 
						users can stake CHC/CGT tokens to earn rewards from the Chrysus platform.
						</p>
						<div className="w-100">
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<ContentToggle
									title="The most popular question"
									content="Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5"></div>
		</>
	);
};
