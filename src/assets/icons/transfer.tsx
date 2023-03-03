import { useState, useEffect } from "react";
import { SVGProps } from "src/types/ui";
export const Transfer = ({
	fill,
	width,
	height,
	stroke,
	hoverStroke,
	hoverFill,
	style,
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
			style={{ ...style }}
			width={width || 18}
			height={height || 22}
			onMouseEnter={(e: any) => {
				_setFill(hoverFill || "none");
				_setStroke(hoverStroke || "none");
			}}
			onMouseLeave={(e: any) => {
				_setFill(fill || "none");
				_setStroke(stroke || "none");
			}}
			// viewBox="0 0 24 24"
			viewBox={`0 0 ${width || 18} ${height || 22}`}
			fill={_fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.25 1.25L16.5 6.5M16.5 6.5L11.25 11.75M16.5 6.5H1.5M6.75 20.75L1.5 15.5M1.5 15.5L6.75 10.25M1.5 15.5H16.5"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
