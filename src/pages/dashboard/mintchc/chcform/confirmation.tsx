import { useState } from "react";
import { CheckButton } from "src/components/buttons";
import { Body } from "src/components/typography";
import { H4 } from "src/components/typography/h4";
import { Link } from "react-router-dom";
import { FormActionButton } from "src/components/buttons/form_action_button";
import { CCheckbox } from "src/components/inputs/ccheckbox";
import { ConfirmationItem } from "src/components/confirmation_item";

export const Confirmation = () => {
	const [confirmVault, setConfirmVault] = useState<boolean>(false);
	const [confirmAllowance, setConfirmAllowance] = useState<boolean>(false);
	return (
		<div
			className="row w-100"
			style={{ borderRadius: "16px", backgroundColor: "#262522" }}
		>
			<div className="col-12">
				<div className="d-flex flex-column align-items-center mt-4">
					<H4>Confirm Vault Details</H4>
					<div className="d-flex flex-column align-items-center justify-content-center col-5">
						<ConfirmationItem title="Depositing" value="1ETH" />
						<ConfirmationItem title="Generatingg" value="200 DAI" />
						<ConfirmationItem title="Collateralization ratio" value="0%" />
						<ConfirmationItem title="Liquidation ratio" value="150%" />
						<ConfirmationItem title="Liquidation price" value="$122" />
						<ConfirmationItem title="Liquidation fee" value="$10" />
						<ConfirmationItem title="Stability fee" value="5.85%" />
						<div className="d-flex flex-row align-items-center justify-content-start my-3 w-100">
							<CCheckbox />
							<Body className="m-0 mx-3">
								Understand the Stability Fee is not fixed and is likely to
								change over time
							</Body>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-2"></div>
			<div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}></div>
			<div className="mt-4"></div>
			<div className="w-100 d-flex flex-row justify-content-start p-3">
				{/* Form Actions */}
				<FormActionButton color="white" outline={true}>
					Back
				</FormActionButton>
				<FormActionButton
					color="primary"
					gradient={true}
					outline={true}
					className="mx-2"
				>
					Open Position
				</FormActionButton>
			</div>
		</div>
	);
};
