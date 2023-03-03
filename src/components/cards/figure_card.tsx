import { H4 } from "../typography";
import { Card } from "./card";

interface IFigureCardProps {
	className?: string;
	amount: string;
	currency: string;
	bottomHeading: string;
}

export const FigureCard = ({
	className,
	amount,
	currency,
	bottomHeading,
}: IFigureCardProps) => {
	return (
		<Card className={`${className}`} style={{ width: "280px" }}>
			<div className="d-flex flex-row align-items-center justify-content-start">
				<div
					style={{
						fontStyle: "normal",
						fontWeight: "300",
						fontSize: "32px",
						lineHeight: "39px",
						color: "#FFFFFF",
					}}
				>
					{amount}
				</div>
				<div
					className="mx-5"
					style={{
						fontStyle: "normal",
						fontWeight: "300",
						fontSize: "14px",
						lineHeight: "17px",
						color: "#FFFFFF",
						opacity: "0.5",
					}}
				>
					{currency}
				</div>
			</div>
			<H4>{bottomHeading}</H4>
		</Card>
	);
};
