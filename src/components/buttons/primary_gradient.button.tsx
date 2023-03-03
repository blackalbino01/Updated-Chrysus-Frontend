import { Button } from "reactstrap";

interface IPrimaryGradientButtonProps {
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode | React.ReactNode[];
}

export const PrimaryGradientButton = ({
	className,
	style,
	onClick,
	children,
}: IPrimaryGradientButtonProps) => {
	return (
		<Button
			onClick={onClick}
			className={`${className}`}
			style={{
				background:
					"linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #846424",
				borderRadius: "40px",
				outline: "none",
				border: "none",
				color: "black",
				fontWeight: "bold",
				padding: "12px 32px",
				...style,
			}}
		>
			{children}
		</Button>
	);
};
