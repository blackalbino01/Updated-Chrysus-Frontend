import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import PlusWhiteIcon from "src/assets/icons/svg/plus-white.svg";
import XMarkWhiteIcon from "src/assets/icons/svg/xmark-white.svg";

interface ContentToggleProps {
	title: string;
	content: React.ReactNode | React.ReactNode[];
}

export const ContentToggle = ({ title, content }: ContentToggleProps) => {
	const [collapse, setCollapse] = useState(false);
	const [status, setStatus] = useState("Closed");

	const onEntering = () => setStatus("Opening...");
	const onEntered = () => setStatus("Opened");
	const onExiting = () => setStatus("Closing...");
	const onExited = () => setStatus("Closed");
	const toggle = () => setCollapse(!collapse);

	return (
		<div>
			<Button
				color="primary"
				onClick={toggle}
				style={{
					marginBottom: "1rem",
					backgroundColor: "transparent",
					outline: "none",
					boxShadow: "none",
					border: "none",
					width: "100%",
				}}
			>
				<div className="w-100 d-flex flex-row align-items-center justify-content-between">
					<span>{title}</span>
					<span>
						{collapse ? (
							<img src={XMarkWhiteIcon} alt="xmark-white.svg" />
						) : (
							<img src={PlusWhiteIcon} alt="plus-white.svg" />
						)}
					</span>
				</div>
			</Button>
			<Collapse
				isOpen={collapse}
				onEntering={onEntering}
				onEntered={onEntered}
				onExiting={onExiting}
				onExited={onExited}
			>
				<div className="text-white p-3" style={{ opacity: 0.5 }}>
					{content}
				</div>
			</Collapse>
		</div>
	);
};
