import { PrimaryGradientText } from "src/components/text";
import Picture from "src/assets/images/picture.png"


export const About = () => {
	return (
		<>
			<div className="mt-3"></div>
			<div className="row d-flex flex-row justify-content-center">
				<div className="col-8 text-center">
					<p style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "100px", marginBottom: "60px" }}>About US </p>
					<div className="mt-5"></div>
					<p className="text-white">
						Project Chrysus aims to be a fully decentralized ecosystem revolving around Chrysus Coin.
						Chrysus Coin (Chrysus) is an ERC20 token, deployed on the Ethereum network which is pegged
						to the price of gold (XAU/USD) using Decentralized Finance (DeFi) best practices.
						The ecosystem around Chrysus will involve a SWAP solution, a lending solution and an
						eCommerce integration solution allowing for the use of Chrysus outside of the DeFi
						ecosystem. One of the main goals of Chrysus is to not just closely follow the price of
						gold, but also to be a cash flow generating token. This is achieved through the Chrysus
						Governance Token (CGT) which will serve both as a decentralization tool for the system
						and as a reward tool for Chrysus token minters. Fees collected through the different
						components of the Project Chrysus ecosystem will be re-distributed to CGT token holders who
						actively participate in the stability mechanisms of the platform.
					</p>
				</div>
			</div>
			<div className="text-center" >
				< p style={{ fontWeight: "600", fontSize: "44px", color: "#846424", marginTop: "100px", marginBottom: "60px" }}>Our Roadmap</p>
				<div className=" text-center">
					<img src={Picture} alt="picture.png" />
				</div>
			</div>

			{/* <div className="row">
				<div className="col-12 text-center">
					<div className="mt-5"></div>
					<PrimaryGradientText>About US</PrimaryGradientText>
					<div >
					<img src={Picture} style={{width: "1300px", height: "500px", borderRadius: "5%"}} alt="picture.png" />

					</div>
					<div className="w-100 d-flex flex-row justify-content-center">
						<div className="roadmap">
							<div className="now  d-flex flex-column align-items-start">
								<PrimaryGradientText> Now</PrimaryGradientText>
								<ul>
									<li className="text">Scelerisque ultrices sit sed neque</li>
									<li className="text">Nisi, tortor in facilisi aliquam</li>
									<li className="text">
										Elementum, massa sollicitudin dui dolor
									</li>
								</ul>
							</div>
							<div className="milestone1 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 1</PrimaryGradientText>
								<ul>
									<li className="text">Quam tortor rhoncus in enim</li>
									<li className="text">Tincidunt morbi mattis vitae commodo</li>
									<li className="text">
										Vestibulum vitae diam malesuada ultrices
									</li>
									<li className="text">Euismod vitae turpis arcu amet</li>
									<li className="text">
										Magnis sit porttitor magna pellentesque
									</li>
								</ul>
							</div>
							<div className="milestone2 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 2</PrimaryGradientText>
								<ul>
									<li className="text">Semper neque augue interdum sagittis</li>
									<li className="text">Mauris facilisis nibh faucibus eu</li>
									<li className="text">
										Bibendum ultrices nisl, eget habitasse
									</li>
									<li className="text">Pulvinar enim posuere id mus</li>
									<li className="text">
										Sit gravida molestie egestas praesent
									</li>
									<li className="text">
										Tellus ullamcorper convallis eget augue
									</li>
								</ul>
							</div>
							<div className="milestone3 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 3</PrimaryGradientText>
								<ul>
									<li className="text">
										<b>Nibh mattis elementum libero lacinia</b>
									</li>
									<li className="text">Nunc odio venenatis sit suspendisse</li>
									<li className="text">Arcu id mollis dignissim habitasse</li>
									<li className="text">Lectus arcu risus integer molestie</li>
									<li className="text">Lectus lobortis congue donec eget</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-4"></div>
				</div>
			</div> */}
		</>
	);
};
