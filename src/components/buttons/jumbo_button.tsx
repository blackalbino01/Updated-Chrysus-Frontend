import React from 'react'
import { useState } from "react";
import { Button } from "react-bootstrap";



interface JumboButtonProps {
	text: string;
	icon?: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler;
}

export const JumboButton = ({
	text,
	icon,
	className,
	onClick,
}: JumboButtonProps) => {
	const [hover, setHover] = useState<boolean>(false);
	return (
		<div
			onMouseEnter={(e: any) => setHover(true)}
			onMouseLeave={(e: any) => setHover(false)}
			className={className}
			style={{
				backgroundColor:"linear-gradient(153.13deg, #846424 17.05%, #EDC452 49.23%, #846424 82.83%)",
				padding: "1px",
				borderRadius: "16px",
			}}
		>
			<Button
				onClick={onClick}
				color="primary"
				className="jumbo-buttond-flex flex-column align-items-center justify-content-center"
				style={{
					backgroundColor: "#1A1917",
					fontFamily: "'Montserrat'",
					fontStyle: "normal",
					fontWeight: "600",
					fontSize: "14px",
					lineHeight: "24px",
					color: "#846424",
					borderRadius: "16px",
					display: "flex",
					padding: "2em 3em",
			
				}}
			>
				<span
					className="jumbo-transition "
					style={{
						transform: hover ? "scale(1.5)" : "scale(1)",

					}}
				>
					{icon}
					{text}
				</span>
				{/* {text} */}
			</Button>
		</div>
	);
};
