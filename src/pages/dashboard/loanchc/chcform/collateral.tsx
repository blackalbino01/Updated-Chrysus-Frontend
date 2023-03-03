import { FormActionButton } from "src/components/buttons/form_action_button";
import { Table } from "src/components/table";
import { Body, H4, P } from "src/components/typography";
import { Info } from "react-feather";
import { COLORS } from "src/assets/styles/theme";
export const Collateral = () => {
	return (
		<div className="row w-100" style={{ borderRadius: "16px" }}>
			<div className="col-md-8 p-0">
				<div
					className="w-100 d-flex flex-column align-items-center"
					style={{
						backgroundColor: "#262522",
						borderTopLeftRadius: "16px",
						borderBottomLeftRadius: "16px",
					}}
				>
					<div className="mt-3"></div>
					<H4>Select a collateral type</H4>
					<P>Each Collateral type has its own risk parameters.</P>
					<Table
						actions={[]}
						selection={true}
						borderBottom={true}
						className="w-100"
						headings={[
							"Collateral",
							"Stability Fee",
							"LIQ Ratio",
							"LIQ Fee",
							"Your Balance",
						]}
						data={[
							[
								{ data: "ETH-A" },
								{ data: "0.75 %" },
								{ data: "150.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
							[
								{ data: "BAT-A" },
								{ data: "0.50 %" },
								{ data: "120.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
							[
								{ data: "ETH" },
								{ data: "1.00 %" },
								{ data: "120.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
							[
								{ data: "USDC-A" },
								{ data: "3.00 %" },
								{ data: "150.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
							[
								{ data: "WBTC-A" },
								{ data: "0.75 %" },
								{ data: "120.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
							[
								{ data: "TUSD-A" },
								{ data: "1.00 %" },
								{ data: "150.00 %" },
								{ data: "0.00 %" },
								{ data: "0.00223001" },
							],
						]}
					/>
					<div className="mt-3"></div>
					<div className="w-100 d-flex flex-row justify-content-start p-3">
						{/* Form Actions */}
						<FormActionButton color="white" outline={true}>
							Cancel
						</FormActionButton>
						<FormActionButton
							color="primary"
							gradient={true}
							outline={true}
							className="mx-2"
						>
							Continue
						</FormActionButton>
					</div>
				</div>
			</div>
			<div
				className="col-md-4 p-0"
				style={{
					backgroundColor: "#262522",
					borderTopRightRadius: "16px",
					borderBottomRightRadius: "16px",
					borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
					position: "relative",
				}}
			>
				<div className="pt-5">
					<div style={{ position: "absolute", right: 30, top: 30 }}>
						<Info color={COLORS.white} />
					</div>
					<div className="p-3">
						<Body className="mt-5" style={{ fontWeight: "600" }}>
							Stability Fee
						</Body>
						<Body style={{ fontWeight: "300" }}>
							The fee calculated based on the outstanding debt of your position.
							This is continiously added to your existing debt.
						</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Liquidation Ratio
						</Body>
						<Body style={{ fontWeight: "300" }}>
							The collateral-to-dai ratio at which the position becomes
							vulnerable to liquidation.
						</Body>
						<Body className="mt-3" style={{ fontWeight: "600" }}>
							Liquidation Fee
						</Body>
						<Body style={{ fontWeight: "300" }}>
							The fee that is added to the total outstanding DAI debt when a
							liquidation occurs.
						</Body>
					</div>
				</div>
			</div>
		</div>
	);
};
