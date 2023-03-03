import { useState } from "react";
import { Stepper } from "src/components/stepper";
import { H3, H4 } from "src/components/typography";
import { PrimaryGradientText } from "src/components/text";
import { FormView, FormViews } from "src/types/ui";
interface IStepperFormProps {
	steps: FormViews;
	callback: any;
	children: React.ReactNode | React.ReactNode[];
}
export const StepperForm = ({
	steps,
	callback,
	children,
}: IStepperFormProps) => {
	return (
		<div className="d-flex flex-column align-items-center w-100">
			<Stepper steps={steps} callback={callback} />
			<>{children}</>
		</div>
	);
};
