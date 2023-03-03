import { D } from "src/assets/icons/d";
import { COLORS } from "src/assets/styles/theme";
import { Card, FigureCard } from "src/components/cards";
import { WalletDropdown } from "src/components/dropdowns";
import { Table } from "src/components/table";
import { H4 } from "src/components/typography";
import { Button } from "reactstrap";
import Dash from "src/assets/icons/svg/dash.svg";
import C from "src/assets/icons/svg/c.svg";
import Ether from "src/assets/icons/svg/ether.svg";
import { Link } from "react-router-dom";
interface IDash1Props {}

export const Dash1 = ({}: IDash1Props) => {
	return (
		<div className="row">
			{/* Left Section */}
			<div className="col-md-8">
				{/* Top section */}
				<div className="row">
					<div className="col-12">
						<div className="d-flex flex-row justify-content-start align-items-center flex-wrap">
							<div className="mx-2 my-1">
								<FigureCard
									amount="$255.52"
									currency="USD"
									bottomHeading="Total Collateral Locked"
								></FigureCard>
							</div>
							<div className="mx-2 my-1">
								<FigureCard
									amount="2,150.00"
									currency="DAI"
									bottomHeading="Total DAI Debt"
								></FigureCard>
							</div>
						</div>
					</div>
				</div>
				{/* Middle Section */}
				<div className="row">
					<div className="col-12">
						<Card className="col-12 my-5">
							<H4>Open Positions</H4>
							<Table
								actions={["settings"]}
								className="w-100"
								headings={[
									"Token",
									"Vault ID",
									"Current Ratio",
									"Deposited",
									"Avail to Withdraw",
									"DAI",
								]}
								data={[
									[
										{ data: "ETH-A" },
										{ data: "3228" },
										{ data: "300.50%" },
										{ data: "534.19 ETH" },
										{ data: "534.19 ETH" },
										{ data: "534.19 DAI" },
									],
								]}
							/>
						</Card>
					</div>
				</div>
			</div>
			{/* Right Section */}
			<div className="col-md-4">
				<Card background="linear-gradient(0deg, #262522, #262522), linear-gradient(180deg, #FEFBF1 0%, #F1FEFE 100%)">
					{/* top */}
					<div className="w-100 d-flex flex-row justify-content-between align-items-center">
						<div className="position-relative">
							Metamask
							<span
								className="position-absolute translate-middle p-1 bg-success rounded-circle"
								style={{
									top: 9,
									right: -20,
								}}
							>
								<span className="visually-hidden">New alerts</span>
							</span>
						</div>
						<WalletDropdown
							onChange={(e) => {}}
							items={[
								"0xee42..0Dz4",
								"0xee42..0Dz5",
								"0xee42..0Dz6",
								"0xee42..0Dz7",
							]}
						/>
					</div>
					{/* Wallet balances */}
					<div className="w-100">
						<div className="d-flex flex-row justify-content-start align-items-center w-100">
							<H4>Wallet Balances</H4>
						</div>
						<table
							className="w-100"
							style={{ borderCollapse: "separate", borderSpacing: "0.5em" }}
						>
							<thead>
								<tr>
									<td>
										<span style={{ color: "#B79841" }}>ASSET</span>
									</td>
									<td>
										<span style={{ color: "#B79841" }}>BALANCE</span>
									</td>
									<td>
										<span style={{ color: "#B79841" }}>USD</span>
									</td>
									<td>
										<span style={{ color: "#B79841" }}> </span>
									</td>
								</tr>
							</thead>
							<tbody>
								{/* one */}
								<tr>
									<td>
										<img src={Dash} alt="d" width={13} height={11} />
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											512,534
										</div>
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											$512,535
										</div>
									</td>
									<td>
										<Button
											className="rounded-pill px-4 py-2"
											color="primary"
											outline={true}
											style={{
												fontStyle: "normal",
												fontWeight: "700",
												fontSize: "12px",
												lineHeight: "16px",
											}}
										>
											SEND
										</Button>
									</td>
								</tr>
								{/* tow */}
								<tr>
									<td>
										<img src={C} alt="d" width={13} height={11} />
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											0.912
										</div>
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											$9,052.86
										</div>
									</td>
									<td>
										<Button
											className="rounded-pill px-4 py-2"
											color="primary"
											outline={true}
											style={{
												fontStyle: "normal",
												fontWeight: "700",
												fontSize: "12px",
												lineHeight: "16px",
											}}
										>
											SEND
										</Button>
									</td>
								</tr>
								{/* three */}
								<tr>
									<td>
										<img src={Ether} alt="d" width={13} height={11} />
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											898.301
										</div>
									</td>
									<td>
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "12px",
												lineHeight: "15px",
												color: "#FFFFFF",
											}}
										>
											$130,073
										</div>
									</td>
									<td>
										<Button
											className="rounded-pill px-4 py-2"
											color="primary"
											outline={true}
											style={{
												fontStyle: "normal",
												fontWeight: "700",
												fontSize: "12px",
												lineHeight: "16px",
											}}
										>
											SEND
										</Button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					{/* Price Feeds */}
					<div className="w-100">
						{/* heading */}
						<div className="d-flex flex-row align-items-center justify-content-between">
							<H4>Price Feeds</H4>
							<Link
								to="#"
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									textDecorationLine: "underline",
									color: "#FFFFFF",
									opacity: "0.5",
								}}
							>
								View price feeds
							</Link>
						</div>
						{/* single item */}
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								DAI/USD
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								1.00 USD
							</div>
						</div>
						{/* single item */}
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								CHC/USD
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								1,045.07 USD
							</div>
						</div>
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								ETH/USD
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								312.45 USD
							</div>
						</div>
						<div className="d-flex flex-row align-items-center justify-content-center my-2">
							<Link
								to="#"
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									textDecorationLine: "underline",
									color: "#FFFFFF",
									opacity: "0.5",
								}}
							>
								View more
							</Link>
						</div>
					</div>
					{/* System Info */}
					<div className="w-100">
						{/* heading */}
						<div className="d-flex flex-row align-items-center justify-content-between">
							<H4>System Info</H4>
							<Link
								to="#"
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									textDecorationLine: "underline",
									color: "#FFFFFF",
									opacity: "0.5",
								}}
							>
								View chc.calc
							</Link>
						</div>
						{/* single item */}
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								COLLATERALIZATION
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								318%
							</div>
						</div>
						{/* single item */}
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								TOTAL DAI SUPPLY
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								95,314,510 DAI
							</div>
						</div>
						<div className="d-flex flex-row align-items-center justify-content-between my-2">
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								ACTIVE CDPS
							</div>
							<div
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "12px",
									lineHeight: "15px",
									color: "#FFFFFF",
								}}
							>
								4,124 CDPs
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};
