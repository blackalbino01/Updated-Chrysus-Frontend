import React from "react";
import { useState } from "react";
import { CheckButton } from "../buttons";
import { Body } from "../typography";
import { H4 } from "../typography/h4";
import { Link } from "react-router-dom";
import { FormActionButton } from "../buttons/form_action_button";

export const Vault = () => {
	const [confirmVault, setConfirmVault] = useState<boolean>(false);
	const [confirmAllowance, setConfirmAllowance] = useState<boolean>(false);
	return (
		<div
			className="row w-100"
			style={{ borderRadius: "16px", backgroundColor: "#262522" }}
		>
			<div className="col-12">
				<div className="d-flex flex-column align-items-center mt-4">
					<H4>Vault Setup and Management</H4>
					<div className="text-start">
						<Body className="mt-5" style={{ fontWeight: "600" }}>
							Setup Vault
						</Body>
						<Body style={{ fontWeight: "300" }}>
							Configure your Vault for easy management. This only has to be done
							once.
						</Body>
						<div className="mt-3" />
						<CheckButton
							checked={false}
							callback={setConfirmVault}
							title="Confirm"
						/>
						<div className="mt-3" />
						<Body style={{ fontWeight: "300" }}>
							THIS TRANSACTION IS TAKING LONGER THAN USUAL...{" "}
							<Body>
								<Link
									style={{
										fontWeight: "600",
										color: "#fff",
										opacity: "1",
										cursor: "pointer",
										textDecoration: "none",
									}}
									to="#"
								>
									WHY IS THIS?
								</Link>
							</Body>
						</Body>
						<div className="mt-3" />
						<Body className="mt-5" style={{ fontWeight: "600" }}>
							Set allowance
						</Body>
						<Body style={{ fontWeight: "300" }}>
							This permission allows Chrysus to interact with your ETH. This has
							to be done once for each new collateral type.
						</Body>
						<div className="mt-3" />
						<CheckButton
							checked={false}
							callback={setConfirmAllowance}
							title="Set"
						/>
						<div className="mt-3" />
					</div>
				</div>
			</div>
			<div className="mt-2" />
			<div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }} />
			<div className="mt-4" />
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
	);
};
