import { Card } from ".";
import { H4 } from "../typography";
import { RoundedPillButton } from "src/components/buttons";

type ListAction = "DEPOSIT" | "WITHDRAW" | "PAYBACK";

interface IListItem {
	heading: string;
	title: string;
	subTitle?: string;
	action: ListAction;
}

interface IActionCardProps {
	heading: string;
	list: IListItem[];
}

export const FinActionCard = ({ heading, list }: IActionCardProps) => {
	return (
		<Card>
			<div className="row w-100">
				<div className="col-12">
					<H4>{heading}</H4>
				</div>
				<div className="col-12">
					{list.map((item) => (
						<>
                            <div className="my-4"></div>
							<ListItem
								heading={item.heading}
								title={item.title}
								subTitle={item.subTitle}
								action={item.action}
							/>
						</>
					))}
				</div>
			</div>
		</Card>
	);
};

const ListItem = ({ heading, title, subTitle, action }: IListItem) => {
	return (
		<div className="d-flex flex-row align-items-center justify-content-between w-100">
			<div className="d-flex flex-column align-items-between justify-content-start">
				<div>
					<ListHeading text={title} />
				</div>
				<div className="d-flex flex-column align-items-between justify-content-start">
                    <div className="my-1"></div>
					<ListTitle text={title} />
                    <div className="my-1"></div>
					<ListSubTitle text={subTitle} />
				</div>
			</div>
			<div>
				<RoundedPillButton color="primary" text={action} />
			</div>
		</div>
	);
};

const ListHeading = ({ text }: any) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "16px",
				lineHeight: "20px",
				color: "#FFFFFF",
				opacity: "0.5",
			}}
		>
			{text}
		</div>
	);
};

const ListTitle = ({ text }: any) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "14px",
				lineHeight: "17px",
				color: "#FFFFFF",
			}}
		>
			{text}
		</div>
	);
};

const ListSubTitle = ({ text }: any) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "12px",
				lineHeight: "15px",
				color: "#FFFFFF",
				opacity: "0.5",
			}}
		>
			{text}
		</div>
	);
};
