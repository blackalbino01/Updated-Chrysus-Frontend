interface ICardProps {
	children?: React.ReactNode | React.ReactNode[];
	className?: string;
	background?: string;
	style?: any;
}

export const Card = ({
	children,
	className,
	style,
	background,
}: ICardProps) => {
	return (
		<div
			className={`${className}`}
			style={{
				background: background !== undefined ? background : "#41403E",
				borderRadius: "16px",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				padding: "24px",
				gap: "16px",
				...style,
			}}
		>
			{children}
		</div>
	);
};
