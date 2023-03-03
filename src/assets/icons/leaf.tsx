import { useState, useEffect } from "react";
import { SVGProps } from "src/types/ui";
export const Leaf = ({
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
			viewBox={`0 0 ${width || 24} ${height || 24}`}
			fill={_fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.0886 8.03531C10.9219 5.34375 6.60942 7.27593 2.62505 3.05718C1.69692 2.07281 2.23598 14.0962 7.22349 18.6525C10.8699 21.9806 16.5 21.6094 18.3985 18.375C20.2969 15.1406 19.2554 10.7264 15.0886 8.03531V8.03531Z"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.10938 11.8594C12.1406 15.6562 16.3125 17.9062 21.7969 18.75"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
