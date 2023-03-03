interface IH4Props {
	children?: React.ReactNode | React.ReactNode[];
	className?: string;
}
export const H4 = ({ children, className }: IH4Props) => {
	return (
		<h4
			className="h4 primary-text-gradient"
			style={{
				background:
					"-webkit-linear-gradient(270deg, #EDC452 0.26%, #846424 99.99%, #846424 100%), #FFFFFF",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
				backgroundClip: "text",
				// textFillColor: "transparent",
			}}
		>
			<>{children}</>
		</h4>
	);
};
