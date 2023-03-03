import { useState, useEffect } from "react";
import { SVGProps } from "src/types/ui";
export const CPU = ({
	fill,
	width,
	height,
	stroke,
	hoverStroke,
	hoverFill,
}: SVGProps) => {
	const [_fill, _setFill] = useState<string>(fill || "none");
	const [_stroke, _setStroke] = useState<string>(stroke || "none");
	const [_hover, _setHover] = useState<boolean>(false);
	useEffect(() => {
		if (_hover === true) {
			_setFill(hoverFill || "none");
			_setStroke(hoverStroke || "none");
		} else {
			_setFill(fill || "none");
			_setStroke(stroke || "none");
		}
	}, [_hover]);
	return (
		<svg
			width={width || 24}
			height={height || 24}
			onMouseEnter={(e: any) => {
				_setFill(hoverFill || "none");
				_setStroke(hoverStroke || "none");
			}}
			onMouseLeave={(e: any) => {
				_setFill(fill || "none");
				_setStroke(stroke || "none");
			}}
			// viewBox="0 0 24 24"
			viewBox={`0 0 ${width || 24} ${height || 24}`}
			fill={_fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75Z"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M16.5 6.75H7.5C7.08579 6.75 6.75 7.08579 6.75 7.5V16.5C6.75 16.9142 7.08579 17.25 7.5 17.25H16.5C16.9142 17.25 17.25 16.9142 17.25 16.5V7.5C17.25 7.08579 16.9142 6.75 16.5 6.75Z"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M2.25 8.25H3.75M12 3.75V2.25V3.75ZM15.75 3.75V2.25V3.75ZM8.25 3.75V2.25V3.75ZM12 21.75V20.25V21.75ZM15.75 21.75V20.25V21.75ZM8.25 21.75V20.25V21.75ZM20.25 12H21.75H20.25ZM20.25 15.75H21.75H20.25ZM20.25 8.25H21.75H20.25ZM2.25 12H3.75H2.25ZM2.25 15.75H3.75H2.25Z"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
