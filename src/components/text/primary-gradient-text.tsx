export const PrimaryGradientText = ({
	children,
	className,
}: {
	children: React.ReactNode | React.ReactNode[];
	className?: string;
}) => {
	return (
		<span className={`primary-gradient-text ${className}`}>
			<>{children}</>
		</span>
	);
};
