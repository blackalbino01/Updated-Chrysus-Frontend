import { Card } from ".";
import { H4 } from "../typography";

interface IList {
	label: string;
	value: string;
}

interface IPriceRatioCardProps {
	heading: string;
	title: string;
	titleSub?: string;
	list: IList[];
}

export const PriceRatioCard = ({
	heading,
	title,
	titleSub,
	list,
}: IPriceRatioCardProps) => {
	return (
		<Card>
			<div className="row w-100">
				<div className="col-12">
					<H4>{heading}</H4>
				</div>
				<div className="col-12 my-3">
					<div
						style={{
							fontStyle: "normal",
							fontWeight: "300",
							fontSize: "24px",
							lineHeight: "29px",
							color: "#FFFFFF",
						}}
					>
						{title} <sub> {titleSub} </sub>
					</div>
				</div>
				{list.map((item) => (
					<ListItem label={item.label} value={item.value} />
				))}
			</div>
		</Card>
	);
};

const ListItem = ({ label, value }: any) => {
	return (
		<div className="d-flex flex-row align-items-center justify-content-between">
			<div
				className="my-2"
				style={{
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "14px",
					lineHeight: "17px",
					color: "#FFFFFF",
					opacity: "0.5",
				}}
			>
				{label}
			</div>
			<div
				className="my-2"
				style={{
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "14px",
					lineHeight: "17px",
					color: "#FFFFFF",
				}}
			>
				{value}
			</div>
		</div>
	);
};
