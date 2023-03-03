import { NavLink, Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import { TopNav } from "src/components/landing/topnav/topnav";
import { Footer } from "src/widgets/landing";
import { Facebook, Gitlab, Instagram, Twitter } from "react-feather";
import DiscordWhiteIcon from "src/assets/icons/svg/discord-white.svg";
import TelegramWhiteIcon from "src/assets/icons/svg/telegram-white.svg";
import TwitterWhiteIcon from "src/assets/icons/svg/twitter-white.svg";
import FacebookWhiteIcon from "src/assets/icons/svg/facebook-white.svg";
import GitlabWhiteIcon from "src/assets/icons/svg/gitlab-white.svg";
import { ModalLink } from "src/types/ui/modal";
import { MintModal } from "src/widgets/mint_modal";
import { useEffect, useState } from "react";
import { CInput } from "src/components/inputs/cinput";
import { CSelect } from "src/components/select";
import { CSelectOption, FormViews, IOption } from "src/types/ui";
import { PrimaryGradientButton } from "src/components/buttons";
// images
import Chrysus from "src/assets/icons/svg/chrysus.svg";
import CWhite from "src/assets/icons/svg/coins/c-white.svg";
import ETHWhite from "src/assets/icons/svg/coins/eth-white.svg";
import DAIWhite from "src/assets/icons/svg/coins/dai-white.svg";
import LeafBlack from "src/assets/icons/svg/leaf-black.svg";
import BCHWhite from "src/assets/icons/svg/coins/bch-white.svg";
import XRPWhite from "src/assets/icons/svg/coins/xrp-white.svg";
import XLMWhite from "src/assets/icons/svg/coins/xlm-white.svg";
import USDTWhite from "src/assets/icons/svg/coins/usdt-white.svg";
import TransferBlack from "src/assets/icons/svg/transfer-black.svg";
import SearchBlack from "src/assets/icons/svg/search-black.svg";
import ProductModalBanner from "src/assets/icons/svg/product-modal-banner.svg";
import { Stepper } from "src/components/stepper";
import { CToggle } from "src/components/toggles";

export const Landing = () => {
	const loanViews: IOption[] = [
		{ value: "lend", label: "LEND" },
		{ value: "borrow", label: "BORROW" },
	];
	const [mintModal, setMintModal] = useState<boolean>(false);
	const [swapModal, setSwapModal] = useState<boolean>(false);
	const [loanModal, setLoanModal] = useState<boolean>(false);
	const [shopModal, setShopModal] = useState<boolean>(false);
	const [loanView, setLoanView] = useState<IOption>(loanViews[0]);
	// const modals: ModalLink[] = [
	// 	{
	// 		label: "Mint",
	// 		onClick: () => setMintModal(true),
	// 	},
	// 	{
	// 		label: "Swap",
	// 		onClick: () => setSwapModal(true),
	// 	},
	// 	{
	// 		label: "Loan",
	// 		onClick: () => setLoanModal(true),
	// 	},
	// 	{
	// 		label: "Shop",
	// 		onClick: () => setShopModal(true),
	// 	},
	// ];
	return (
		<>
			<Container fluid className="bg-black">
				<TopNav
					links={[
						{ url: "about", label: "About" },
						{ url: "services", label: "Services" },
						{ url: "ecosystem", label: "Ecosystem" },
						{ url: "whitepaper", label: "Whitepaper" },
						{ url: "faq", label: "FAQ" },
						// { url: "contact", label: "Contact" },
					]}
					// modals={modals}
				/>
				{/* <div style={{ paddingLeft: "3em", paddingRight: "3em" }}> */}
				<div style={{ }}>
					<Outlet
						context={[swapModal, setSwapModal, shopModal, setShopModal]}
					/>
				</div>
			</Container>
			<Footer
				footerLinks={[
					{
						title: "Services",
						links: [
							{ url: "#", label: "Mint" },
							{ url: "#", label: "Swap" },
							{ url: "#", label: "Loan" },
							{ url: "#", label: "Buy" },
						],
					},
					{
						title: "Learn",
						links: [
							{ url: "#", label: "Whitepaper" },
							{ url: "#", label: "FAQ" },
						],
					},
					{
						title: "Company",
						links: [
							{ url: "#", label: "Ecosystem" },
							{ url: "#", label: "About" },
							{ url: "#", label: "Contact" },
						],
					},
				]}
				socialLinks={[
					{
						url: "#",
						icon: (
							<img
								alt="discord-white.svg"
								src={TelegramWhiteIcon}
								color="white"
								style={{ opacity: 0.5 }}
							/>
						),
					},
					{
						url: "#",
						icon: (
							<img
								alt="discord-white.svg"
								src={TwitterWhiteIcon}
								color="white"
								style={{ opacity: 0.5 }}
							/>
						),
					},
					{
						url: "#",
						icon: (
							<img
								alt="discord-white.svg"
								src={FacebookWhiteIcon}
								color="white"
								style={{ opacity: 0.5 }}
							/>
						),
					},
					{
						url: "#",
						icon: (
							<img
								alt="discord-white.svg"
								src={DiscordWhiteIcon}
								color="white"
								style={{ opacity: 0.5 }}
							/>
						),
					},
					{
						url: "#",
						icon: (
							<img
								alt="discord-white.svg"
								src={GitlabWhiteIcon}
								color="white"
								style={{ opacity: 0.5 }}
							/>
						),
					},
				]}
			/>
			{/* Modals */}
			{/* Mint Modal */}
			<MintModal
				showModal={mintModal}
				body={
					<div className="d-flex flex-column align-items-center justify-content-start">
						<h2 className="primary-gradient-text">Mint Chrysus Coin (CHC)</h2>
						<CSelect
							className="mt-3"
							defaultLabel="Select Assets"
							options={mintOptions}
							optionsLabel="Mint Option"
						/>
						<CInput
							placeholder="Enter Amount"
							className="mt-3"
							type="text"
							leftIcon={<img width={15} src={Chrysus} alt="chrysus" />}
						/>
						<PrimaryGradientButton
							onClick={(event: any) => {}}
							className="mt-3"
						>
							<div className="d-flex flex-row align-items-center justify-content-center">
								Mint CHC
								<img className="mx-2" src={LeafBlack} alt="leaf-black.svg" />
							</div>
						</PrimaryGradientButton>
					</div>
				}
			/>
			{/* Swap Modal */}
			<MintModal
				showModal={swapModal}
				body={
					<div className="d-flex flex-column align-items-center justify-content-start">
						<h2 className="primary-gradient-text">Swap Chrysus Coin (CHC)</h2>
						<CInput
							placeholder="Swap From"
							className="mt-3"
							type="text"
							outline="FORM"
							rightIcon={<img width={15} src={Chrysus} alt="chrysus" />}
							bottomLeftText={<span>Amount Available</span>}
							bottomRightText={<span className="fw-bold">CHC: 00000032</span>}
						/>
						<CInput
							placeholder="Enter Amount"
							className="mt-3"
							type="text"
							outline="PRIMARY"
							leftIcon={<img width={15} src={CWhite} alt="c-white.svg" />}
						/>
						<CSelect
							className="mt-3"
							defaultLabel="Swap To"
							options={swapOptions}
							optionsLabel="Mint Option"
						/>
						<PrimaryGradientButton
							onClick={(event: any) => {}}
							className="mt-3"
						>
							<div className="d-flex flex-row align-items-center justify-content-center">
								Swap CHC
								<img
									className="mx-2"
									src={TransferBlack}
									alt="transfer-black.svg"
								/>
							</div>
						</PrimaryGradientButton>
					</div>
				}
			/>
			{/* Loan Modal */}
			<MintModal
				showModal={loanModal}
				body={
					<div className="d-flex flex-column align-items-center justify-content-start">
						<h2 className="primary-gradient-text">
							Loan with Chrysus Coin (CHC)
						</h2>
						<div
							className="p-4 w-100 d-flex flex-row align-items-center justify-content-center"
							style={{ backgroundColor: "#262522" }}
						>
							<div>
								<CToggle options={loanViews} setSelected={setLoanView} />
							</div>
						</div>
						{loanView.value === "borrow" ? (
							<>
								<CSelect
									className="mt-3"
									defaultLabel="Select Collateral Assets"
									options={mintOptions}
									optionsLabel="Select Asset"
								/>
								<CInput
									placeholder="Enter Amount"
									className="mt-3"
									type="text"
									outline="PRIMARY"
									leftIcon={<img width={15} src={CWhite} alt="c-white.svg" />}
								/>
								<PrimaryGradientButton
									onClick={(event: any) => {}}
									className="mt-3"
								>
									<div className="d-flex flex-row align-items-center justify-content-center">
										Find Borrower
										<img
											className="mx-2"
											src={SearchBlack}
											alt="transfer-black.svg"
										/>
									</div>
								</PrimaryGradientButton>
							</>
						) : (
							<>
								<CInput
									topLeftText={<span>Amount Available</span>}
									topRightText={<span className="fw-bold">CHC: 00000032</span>}
									placeholder="Enter Amount"
									className="mt-3"
									type="text"
									outline="PRIMARY"
									leftIcon={<img width={15} src={Chrysus} alt="Chrysus.svg" />}
								/>
								<PrimaryGradientButton
									onClick={(event: any) => {}}
									className="mt-3"
								>
									<div className="d-flex flex-row align-items-center justify-content-center">
										Find Lender
										<img
											className="mx-2"
											src={SearchBlack}
											alt="transfer-black.svg"
										/>
									</div>
								</PrimaryGradientButton>
							</>
						)}
						{/* For Borrow view */}
					</div>
				}
			/>
			{/* Shop Modal */}
			<MintModal
				showModal={shopModal}
				body={
					<div className="d-flex flex-column align-items-center justify-content-start">
						<h2 className="primary-gradient-text">
							Shopping easy with Chrysus Coin
						</h2>
						<CInput
							placeholder="Enter Product ASIN"
							className="mt-3"
							type="text"
							outline="PRIMARY"
						/>
						<PrimaryGradientButton
							onClick={(event: any) => {}}
							className="mt-3"
						>
							<div className="d-flex flex-row align-items-center justify-content-center">
								FETCH PRODUCT
								<img
									className="mx-2"
									src={SearchBlack}
									alt="transfer-black.svg"
								/>
							</div>
						</PrimaryGradientButton>
						<div className="mt-3"></div>
						<img
							className="w-100"
							src={ProductModalBanner}
							alt="product-modal-banner"
						/>
						<div className="mt-4"></div>
					</div>
				}
			/>
		</>
	);
};

const mintOptions: CSelectOption[] = [
	{
		icon: <img src={ETHWhite} alt="eth-white" />,
		title: "ETH",
		subTitle: "Ethereum",
	},
	{
		icon: <img src={DAIWhite} alt="dai-white" />,
		title: "DAI",
		subTitle: "MakerDAO",
	},
];
const swapOptions: CSelectOption[] = [
	{
		icon: <img src={ETHWhite} alt="eth-white" />,
		title: "ETH",
		subTitle: "Ethereum",
	},
	{
		icon: <img src={DAIWhite} alt="dai-white" />,
		title: "DAI",
		subTitle: "MakerDAO",
	},
	{
		icon: <img src={DAIWhite} alt="bch-white" />,
		title: "BCH",
		subTitle: "Bitcoin Cash",
	},
	{
		icon: <img src={XRPWhite} alt="xrp-white" />,
		title: "XRP",
		subTitle: "Ripple",
	},
	{
		icon: <img src={XLMWhite} alt="xlm-white" />,
		title: "XRP",
		subTitle: "Stellar Lumens",
	},
	{
		icon: <img src={USDTWhite} alt="usdt-white" />,
		title: "USD₮",
		subTitle: "Teather (SLP)",
	},
];
