import {
	Card,
	FigureCard,
	FinActionCard,
	PriceRatioCard,
} from "src/components/cards";
import { WalletDropdown } from "src/components/dropdowns";
import { H4 } from "src/components/typography";
import { Button } from "reactstrap";
import Dash from "src/assets/icons/svg/dash.svg";
import C from "src/assets/icons/svg/c.svg";
import Ether from "src/assets/icons/svg/ether.svg";
import { Link } from "react-router-dom";
import { Table } from "src/components/table";
import { ChevronDown, ChevronUp } from "react-feather";
interface IDash1Props {}

export const Dash2 = ({}: IDash1Props) => {
	return (
		<div className="row">
			{/* Left Section */}
			<div className="col-md-8">
				{/* Top section */}
				<div className="row">
					<div className="col-md-6">
						<PriceRatioCard
							heading="Liquidation Price"
							title="114.92 USD"
							titleSub="(ETH/USD)"
							list={[
								{ label: "Current Price Information", value: "249.06 USD" },
								{ label: "Liquidation Penalty", value: "15%" },
							]}
						/>
					</div>
					<div className="col-md-6">
						<PriceRatioCard
							heading="Collateralization Ratio"
							title="171.65%"
							list={[
								{ label: "Minimum Ratio", value: "150.00%" },
								{ label: "Stability Fee", value: "2.500%" },
							]}
						/>
					</div>
				</div>
				{/* Middle Section */}
				<div className="my-4"></div>
				<div className="row">
					<div className="col-md-6">
						<FinActionCard
							heading="ETH Locked"
							list={[
								{
									heading: "ETH Locked",
									title: "ETH 3.00",
									subTitle: "USD 2,352.03",
									action: "DEPOSIT",
								},
								{
									heading: "Able to Withdraw",
									title: "ETH 2.50",
									subTitle: "USD 1,960.03",
									action: "WITHDRAW",
								},
							]}
						/>
					</div>
					<div className="col-md-6">
						<FinActionCard
							heading="Outstanding Dai Debt"
							list={[
								{
									heading: "Outstanding DAI Debt",
									title: "DAI 3.00",
									action: "PAYBACK",
								},
								{
									heading: "Available to Generate",
									title: "DAI 4,002.08",
									action: "PAYBACK",
								},
							]}
						/>
					</div>
				</div>
				{/* Bottom Section */}
				<div className="my-3"></div>
				<Card>
					<H4>Activity</H4>
					<div className="mt-3"></div>
					<Table
						className="w-100"
						headings={["Time", "Type", "Amount", "Destination", "TxID"]}
						data={[
							[
								{ data: "4/5/2022 8:16 pm", indicator: null },
								{ data: "Buy", indicator: <ChevronUp color="white" /> },
								{ data: "0.00223001", indicator: null },
								{ data: "13Dpd3...e9gp01", indicator: null },
								{ data: "9ae3d0...5agD03", indicator: null },
							],
							[
								{ data: "4/5/2022 8:16 pm", indicator: null },
								{ data: "Swap", indicator: <ChevronDown color="white" /> },
								{ data: "0.00223001", indicator: null },
								{ data: "13Dpd3...e9gp01", indicator: null },
								{ data: "9ae3d0...5agD03", indicator: null },
							],
							[
								{ data: "4/5/2022 8:16 pm", indicator: null },
								{ data: "Buy", indicator: <ChevronUp color="white" /> },
								{ data: "0.00223001", indicator: null },
								{ data: "13Dpd3...e9gp01", indicator: null },
								{ data: "9ae3d0...5agD03", indicator: null },
							],
							[
								{ data: "4/5/2022 8:16 pm", indicator: null },
								{ data: "Lend", indicator: <ChevronUp color="white" /> },
								{ data: "0.00223001", indicator: null },
								{ data: "13Dpd3...e9gp01", indicator: null },
								{ data: "9ae3d0...5agD03", indicator: null },
							],
							[
								{ data: "4/5/2022 8:16 pm", indicator: null },
								{ data: "Borrow", indicator: <ChevronUp color="white" /> },
								{ data: "0.00223001", indicator: null },
								{ data: "13Dpd3...e9gp01", indicator: null },
								{ data: "9ae3d0...5agD03", indicator: null },
							],
						]}
						actions={[]}
					></Table>
				</Card>
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
