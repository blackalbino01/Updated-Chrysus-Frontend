import {
	CircleExpandButton,
	PlayTourButton,
	PrimaryGradientButton,
} from "src/components/buttons";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "src/assets/icons/leaf";
import { COLORS } from "src/assets/styles/theme";
import { Transfer } from "src/assets/icons/transfer";
import { Umbrella } from "src/assets/icons/umbrella";
import { Cart } from "src/assets/icons/cart";
// import { H5, P } from "src/components/typography";
import pic1 from "src/assets/images/pic1.jpg"
// import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import { Button, Container } from "reactstrap";
import TelegramGoldIcon from "src/assets/icons/svg/telegram-gold.svg";
import TelegramWhiteIcon from "src/assets/icons/svg/telegram-white.svg";
import TwitterGoldIcon from "src/assets/icons/svg/twitter-gold.svg";
import TwitterWhiteIcon from "src/assets/icons/svg/twitter-white.svg";
import DiscordGoldIcon from "src/assets/icons/svg/discord-gold.svg";
import DiscordWhiteIcon from "src/assets/icons/svg/discord-white.svg";
import FacebookGoldIcon from "src/assets/icons/svg/facebook-gold.svg";
import FacebookWhiteIcon from "src/assets/icons/svg/facebook-white.svg";
// import GitlabGoldIcon from "src/assets/icons/svg/gitlab-gold.svg";
import Linkd from "src/assets/icons/svg/linkd.svg";
import Linkdin from "src/assets/icons/svg/linkdin.svg";
// import GitlabWhiteIcon from "src/assets/icons/svg/gitlab-white.svg";
import { JumboButton } from "src/components/buttons/jumbo_button";
import { CCarousel, CCarouselItem } from "src/ccarousel/ccarousel";
// import { CSelectOption } from "src/types/ui";
// images and icons
// import JumbotronImage from "src/assets/images/jumbotron.svg";
import EcosystemImage from "src/assets/images/ecosystem.svg";
import LeafGold from "src/assets/icons/svg/leaf-gold.svg";
import UmbrellaGold from "src/assets/icons/svg/umbrella-gold.svg";
import CartGold from "src/assets/icons/svg/cart-gold.svg";
import SwapGold from "src/assets/icons/svg/swap-gold.svg";
import CCoinGold from "src/assets/icons/svg/c-coin-gold.svg";
// import CarouselItem1 from "src/assets/images/carousel-item.jpg";
import SendDarkIcon from "src/assets/icons/svg/send-dark.svg";
import { useWindowSize } from "src/hooks";
import { useState } from "react";
// import { MintModal } from "src/widgets/mint_modal";
// import { CInput } from "src/components/inputs/cinput";
// import { CSelect } from "src/components/select";
// import TransferBlack from "src/assets/icons/svg/transfer-black.svg";
// import Chrysus from "src/assets/icons/svg/chrysus.svg";
// import CWhite from "src/assets/icons/svg/coins/c-white.svg";
// import ETHWhite from "src/assets/icons/svg/coins/eth-white.svg";
// import DAIWhite from "src/assets/icons/svg/coins/dai-white.svg";
// import XRPWhite from "src/assets/icons/svg/coins/xrp-white.svg";
// import XLMWhite from "src/assets/icons/svg/coins/xlm-white.svg";
// import USDTWhite from "src/assets/icons/svg/coins/usdt-white.svg";
// import SearchBlack from "src/assets/icons/svg/search-black.svg";
// import ProductModalBanner from "src/assets/icons/svg/product-modal-banner.svg";
import { SwapModal } from "src/widgets/modals/swap-modal";
import { ShopModal } from "src/widgets/modals/shop-modal";

export const Home = () => {
	const [width, height] = useWindowSize();
	const [swapModal, setSwapModal] = useState<boolean>(false);
	const [shopModal, setShopModal] = useState<boolean>(false);
	const navigate = useNavigate();
	return (
		< div>
			<Container>
				{/* Jumbotron section */}
				<div className="row my-5"></div>
				<div className="row my-5">
					<div className="col-md-6">
						<div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
							<div className="d-flex flex-column justify-content-start align-items-start w-100">
								<span
									style={{
										fontStyle: "normal",
										fontWeight: 600,
										fontSize: "52px",
										lineHeight: "40px",
										color: "#846424",
									}}
								>
									Decenterlized
								</span>
								<br />
								<span
									style={{
										fontStyle: "normal",
										fontWeight: 600,
										fontSize: "52px",
										lineHeight: "40px",
										color: "#846424",
									}}
								>
									All-Rounder
								</span>
								<span
									className="my-3"
									style={{
										fontStyle: "normal",
										fontWeight: "400",
										fontSize: "16px",
										lineHeight: "24px",
										color: "#FFFFFF",
									}}
								>
									Innovative, secure and smart ecosystem
								</span>
								<PlayTourButton className="my-3 mb-5 " />
							</div>
						</div>
					</div>
					<div className="col-md-6 mt-5 ">
						<div className="d-flex flex-row align-items-center justify-content-center">
							<div className="d-flex flex-column align-items-center justify-content-center">
								{/* Jumbotron buttons section start */}
								<div className="jumbotron-actions">
									{/* <img src={JumbotronImage} alt="jumbotron" /> */}
									<JumboButton
										className="action top-left"
										text="MINT"
										icon={
											<img
												className="jumbo-button-icon"
												src={LeafGold}
												alt="leaf-gold"
											/>
										}
									/>
									<JumboButton
										className="action bottom-left"
										text="LOAN"
										icon={
											<img
												className="jumbo-button-icon"
												src={UmbrellaGold}
												alt="umbrella-gold"
											/>
										}
									/>
									<JumboButton
										className="action top-right"
										text="SWAP"
										icon={
											<img
												className="jumbo-button-icon"
												src={SwapGold}
												alt="swap-gold"
											/>
										}
									/>
									<JumboButton
										className="action bottom-right"
										text="BUY"
										icon={
											<img
												className="jumbo-button-icon"
												src={CartGold}
												alt="card-gold"
											/>
										}
									/>
									<span className="action action-center coin-rotating">
										<img src={CCoinGold} alt="c-coin-gold.sg" />
									</span>
								</div>
								{/* Jumbotron buttons section end */}
							</div>
						</div>
					</div>
				</div>
				<div className="row my-5"></div>
			</Container>
			{/* About CHC section */}
			<div className="row my-5"></div>
			<Container>
				<div className="row my-5">
					<div className="d-flex flex-row align-items-center justify-content-center w-100">
						<div className="d-flex flex-column align-items-center justify-content-center w-100">
							<span
								style={{
									fontStyle: "normal",
									fontWeight: "600",
									fontSize: "24px",
									lineHeight: "32px",
									textAlign: "center",
									color: "#846424",
								}}
							>
								About Chrysus Coin (CHC)
							</span>
							<span
								style={{
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "16px",
									lineHeight: "24px",
									textAlign: "center",
									color: "#FFFFFF",
									marginTop: "20px"
								}}
							>
								Project Chrysus aims to be a fully decentralized ecosystem
								revolving around Chrysus Coin. Chrysus Coin (Chrysus) is an
								ERC20 token, deployed on the Ethereum network which is pegged to
								the price of gold (XAU/USD) using Decentralized Finance (DeFi)
								best practices.
							</span>
							{/* <span
								style={{
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "16px",
									lineHeight: "24px",
									textAlign: "center",
									color: "#FFFFFF",
								}}
							>
								Project Chrysus aims to be a fully decentralized ecosystem
								revolving around Chrysus Coin. Chrysus Coin (Chrysus) is an
								ERC20 token, deployed on the Ethereum network which is pegged to
								the price of gold (XAU/USD) using Decentralized Finance (DeFi)
								best practices.
							</span> */}
							<a target="_blank" href="https://chrysusofficial.medium.com/"
								className="my-5"
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "14px",
									lineHeight: "16px",
									letterSpacing: "1px",
									textDecorationLine: "underline",
									color: "#846424",
								}}
							>
								Explore the Technology
							</a>
						</div>
					</div>
				</div>
			</Container>
			{/* Bg animation start */}
			<div className="row ">
				<div className="col-12 digital-bg-animation">
					<div className="row animation-wrapper ">
						<div className="col-14  content p-lg-5">
							{/* Cards section */}
							<div className="row my-5 py-4 ">
								<div className="col-md-6 cards-section-fix ">
										<LeftCard
											title="Mint CHC"
											text="Mint your CHC token now"
											icon={
												<Leaf
													fill="none"
													stroke={COLORS.white}
													hoverStroke={COLORS.primary}
													style={{ transform: "scale(1.5)" }}
												/>
											}
										/>
								</div>
								<div className="col-md-6 cards-section-fix">
									<RightCard
										title="Swap CHC"
										text="Swap your CHC tokens with other cryptocurrencies"
										icon={
											<Transfer
												fill="none"
												stroke={COLORS.white}
												hoverStroke={COLORS.primary}
												style={{ transform: "scale(1.5)" }}
											/>
										}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="w-100">
										<LeftCard
											title="Loan with CHC"
											text="Individuals with long-term investments in Ether and tokens (“HODLers”) can use a money market as a source of additional returns on their investment."
											icon={
												<Umbrella
													fill="none"
													stroke={COLORS.white}
													hoverStroke={COLORS.primary}
													style={{ transform: "scale(1.5)" }}
												/>
											}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<RightCard
										title="Buy with CHC"
										text="With the ever increasing use of the internet and its popularity among all demographic segments, electronic commerce is by all means the way to go for virtually all businesses."
										icon={
											<Cart
												fill="none"
												stroke={COLORS.white}
												hoverStroke={COLORS.primary}
												style={{ transform: "scale(1.5)" }}
											/>
										}
									/>
								</div>
							</div>

							{/* Ecosystem section */}
							<div className="row my-5 " style={{ paddingLeft: "4em", paddingRight: "4em" }}>
								<div
									className="d-flex flex-row   align-items-center justify-content-center w-100 p-5"
									style={{ background: "#262522", borderRadius: "12px" }}
								>
									<div className="d-flex flex-column  align-items-center justify-content-center">
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "32px",
												textAlign: "center",
												color: "#846424",
												marginBottom: "10px",

											}}
										>
											Chrysus Ecosystem
										</div>
										<div
											style={{
												fontFamily: "'Montserrat'",
												fontStyle: "normal",
												fontWeight: "300",
												fontSize: "16px",
												lineHeight: "24px",
												textAlign: "center",
												color: "#FFFFFF",
												borderRadius: "12px",
											}}
										>
											<div className="mx-5">
												The Chrysus ecosystem is a blockchain-based financial infrastructure that enables users to earn yield,
												<br />
												borrow and lend, and access DeFi liquidity through a single, unified platform. It utilizes Chrysus Protocols to
												<br />
												create a secure, transparent, and efficient system for exchanging digital assets and fiat currency. The Chrysus coin
												<br />
												ecosystem is powered by Chrysus tokens, which are used to govern the network, incentivize user
												<br />
												engagement, and facilitate transactions within the platform.
											</div>
											<div className="my-3">
												<img
													style={{ width: "100%" }}
													src={EcosystemImage}
													alt="ecosystem"
												/>
											</div>
											<div className="col-12 my-3 mb-3" style={{ zIndex: 6 }}>
												<div>
													<a target="_blank" href="https://chrysusofficial.medium.com/">
														<CardReadMore />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bg animation end */}
			{/* Community Section */}
			<div className="row my-5 p-lg-5" style={{ paddingLeft: "3em", paddingRight: "3em" }}>
				<div className="col-lg-6">
					<div className="w-100">
						<span
							style={{
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "24px",
								lineHeight: "32px",
								color: "#846424",
							}}
						>
							Join Our Community
						</span>
					</div>
					<div className="w-100 my-5">
						<p
							style={{
								fontStyle: "normal",
								fontWeight: "300",
								fontSize: "16px",
								lineHeight: "24px",
								color: "#FFFFFF",
							}}
						>
							Our community is vibrant and welcoming to all who share our passions. We foster
							meaningful relationships, learn from each other, and provide support and
							resources to help everyone achieve their goals. Join us in improving the future.{" "}
						</p>
					</div>
				</div>
				<div className="col-lg-6 text-center">
					<div className="my-4"></div>
					<a target="_blank" href="https://t.me/chrysusofficial">
						<CircleExpandButton
							color="primary"
							outline={true}
							icon={<img src={TelegramGoldIcon} alt="telegram-gold.svg" />}
							hoverIcon={<img src={TelegramWhiteIcon} alt="telegram-white.svg" />}
							text={"Telegram"}
						/>
					</a>
					<a target="_blank" href=" https://twitter.com/chrysus_coin01">
						<CircleExpandButton
							color="primary"
							outline={true}
							icon={<img src={TwitterGoldIcon} alt="twitter-gold.svg" />}
							hoverIcon={<img src={TwitterWhiteIcon} alt="twitter-white.svg" />}
							text="Twitter"

						/>
					</a>
					<a target="_blank" href="https://www.facebook.com/chrysuscoin">
						<CircleExpandButton
							color="primary"
							outline={true}
							icon={<img src={FacebookGoldIcon} alt="facebook-gold.svg" />}
							hoverIcon={<img src={FacebookWhiteIcon} alt="facebook-white.svg" />}
							text="Facebook"
						/>
					</a>
					<a target="_blank" href=" https://discord.gg/e7kfZPRa">
						<CircleExpandButton
							color="primary"
							outline={true}
							icon={<img src={DiscordGoldIcon} alt="discord-gold.svg" />}
							hoverIcon={<img src={DiscordWhiteIcon} alt="discord-white.svg" />}
							text="Discord"
						/>
					</a>
					<a target="_blank" href=" https://www.linkedin.com/company/chrysus-gold-coin/">
						<CircleExpandButton
							color="primary"
							outline={true}
							icon={<img style={{ width: "30px", height: "20px" }} src={Linkd} alt="linkd.svg" />}
							hoverIcon={<img src={Linkdin} style={{ width: "30px", height: "20px" }} alt="linkdin.svg" />}
							text="Linkdin"
						/>
					</a>
				</div>
			</div>
			{/* Carousel and blog section */}
			<div className="row p-7 ml-5 " style={{ paddingLeft: "3em", paddingRight: "3em" }}>
				<div className="col-lg-6">
					<div className="flex flex-row justify-content-center align-items-center mb-3">

						<CCarousel>
							{[1, 2, 3, 4].map((item) => (
								<CCarouselItem>
									<div className="row ml-5 m-5  mt-2">
										<h1 className="text-primary text-center mt-3">Featured Blog</h1>
										<div className="col-lg-7">
											<img src={pic1} style={{ width: "300px", height: "200px", borderRadius: "5%" }} alt="carousel-item.jpg" />
										</div>
										<div className="col-lg-5 p-2 ">
											<div className="mb-3"></div>
											<p
												className="text-white text-center"
												style={{ whiteSpace: "normal", fontFamily: "'Montserrat'", fontWeight: "5", fontSize: "16px", lineHeight: "24px" }}
											>
												Ethereum, and other digital currencies to create a secure,
												fast, and reliable digital asset for global payments.
											</p>
											<p className="text-primary text-center ">April 7, 2022</p>
											<a target="_blank" href="https://chrysusofficial.medium.com/">
												<PrimaryGradientButton
													className="text-uppercase mx-4"
													onClick={() => { }}
												>
													Read More
												</PrimaryGradientButton>
											</a>
										</div>
									</div>
								</CCarouselItem>
							))}
						</CCarousel>

					</div>
				</div>
				<div className="col-lg-4 mt-5">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<h1 className="text-white">Subscribe</h1>
							</div>
							<div className="row mt-3">
								<p className="text-primary">
									Enter your email below for latest blogs and news
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div
							className="d-flex flex-row align-item-center justify-content-between mt-3"
							style={{
								border: "1px solid #846424",
								borderRadius: "32px",
								backgroundColor: "transparent",
								padding: "0.5em",
							}}
						>
							<input
								type="email"
								placeholder="Email"
								style={{
									outline: "none",
									border: "none",
									paddingLeft: "1em",
									fontFamily: "'Montserrat'",
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "16px",
									lineHeight: "24px",
									color: "white",
									background: "transparent",
								}}
							/>
							{width <= 460 ? (
								<PrimaryGradientButton
									className="text-uppercase"
									onClick={() => { }}
								>
									<img src={SendDarkIcon} alt="send-dark.svg" />
								</PrimaryGradientButton>
							) : (
								<PrimaryGradientButton
									className="text-uppercase"
									onClick={() => { }}
								>
									Subscribe
								</PrimaryGradientButton>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="mb-5"></div>
			{/* Swap Modal */}
			<SwapModal showSwapModal={swapModal} />
			{/* Shop Modal */}
			<ShopModal showShopModal={shopModal} />
		</div >
	);
};

// Card components

interface ICardData {
	title: string;
	text: string;
	icon: React.ReactNode;
}

const LeftCard = ({ title, text, icon }: ICardData) => {
	return (
		<div className="row position-relative px-5 my-4 ">
			<div className="col-12 " style={{marginLeft:"6em"}}>
				<div className="row">
				<div className="col-2 my-5 " style={{ zIndex: 6 }}>
						{icon}
					</div>
					<div className="col-6 my-5" style={{ zIndex: 6 }}>
						<div className=" d-flex flex-column align-items-start justify-content-start">
							<CardTitle text={title} />
							<CardText text={text} />
						</div>
					</div>
					
					{/* <div className="col-12 my-3 mb-3" style={{ zIndex: 6 }}>
						<div>
							<CardReadMore />
						</div>
					</div> */}
				</div>
			</div>
			<div
				className="position-absolute"
				style={{
					right: 25,
					width: "80%",
					height: "300px",
					background: "#262522",
					zIndex: "0",
					borderRadius: "12px",
					paddingLeft: "3em",
					paddingRight: "3em"
				}}
			></div>
		</div>
	);
};
const RightCard = ({ title, text, icon }: ICardData) => {
	return (
		<div className="row position-relative px-5 my-4">
			<div className="col-12">
				<div className="row">
					<div className="col-2 my-5" style={{ zIndex: 5 }}>
						{icon}
					</div>
					<div className="col-6 my-5" style={{ zIndex: 6 }}>
						<div className="d-flex flex-column align-items-start justify-content-start">
							<CardTitle text={title} />
							<CardText text={text} />
						</div>
					</div>
					{/* <div className="col-12 my-3 mb-3" style={{ zIndex: 6 }}>
						<div>
							<CardReadMore />
						</div>
					</div> */}
				</div>
			</div>
			<div
				className="position-absolute"
				style={{
					left: 25,
					width: "80%",
					height: "300px",
					background: "#262522",
					zIndex: "0",
					borderRadius: "12px",
					paddingLeft: "3em",
					paddingRight: "3em"
				}}
			></div>
		</div>
	);
};

const CardTitle = ({ text }: { text: string }) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "600",
				fontSize: "24px",
				lineHeight: "32px",
				color: "#846424",
				marginBottom: "20px",
			}}
		>
			{text}
		</div>
	);
};

const CardText = ({ text }: { text: string }) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "300",
				fontSize: "16px",
				lineHeight: "24px",
				color: "#FFFFFF",
			}}
		>
			{text}
		</div>
	);
};

const CardReadMore = () => {
	return (
		<span
			style={{
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "14px",
				lineHeight: "16px",
				alignItems: "center",
				letterSpacing: "1px",
				textDecorationLine: "underline",
				color: "#846424",
				textDecoration: "underline",
			}}
		>
			Read More
		</span>
	);
};

const getWindowSize = () => {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
};
