import { useState } from "react";
import { Stepper } from "src/components/stepper";
import { H4 } from "src/components/typography";
import { FormView, FormViews } from "src/types/ui";
import { StepperForm } from "src/widgets/forms/stepper-form";
import { Link, Outlet } from "react-router-dom";

export const CHCForm = () => {
	const steps: FormViews = [
		{ title: "Select Collateral", widget: "" },
		{ title: "Vault Management", widget: "vault" },
		{ title: "Generate DAI", widget: "dai" },
		{ title: "Confirmation", widget: "confirmation" },
	];
	const [_selectedView, _setSelectedView] = useState<FormView>(steps[0]);
	return (
		<>
			<StepperForm callback={_setSelectedView} steps={steps}>
				<Outlet />
			</StepperForm>
		</>
	);
};
