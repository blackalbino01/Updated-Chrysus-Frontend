import { useState, useEffect } from "react";
import { SVGProps } from "src/types/ui";
export const Umbrella = ({
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
			height={height || 22}
			onMouseEnter={(e: any) => {
				_setFill(hoverFill || "none");
				_setStroke(hoverStroke || "none");
			}}
			onMouseLeave={(e: any) => {
				_setFill(fill || "none");
				_setStroke(stroke || "none");
			}}
			// viewBox="0 0 22 22"
			viewBox={`0 0 ${width || 22} ${height || 22}`}
			fill={_fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 11.75V19.25C11 19.6478 10.842 20.0294 10.5607 20.3107C10.2794 20.592 9.89782 20.75 9.5 20.75C9.10218 20.75 8.72064 20.592 8.43934 20.3107C8.15804 20.0294 8 19.6478 8 19.25M11 11.75L10.5458 11.4092C9.83921 10.8794 8.96524 10.6221 8.0843 10.6847C7.20336 10.7473 6.37455 11.1256 5.75 11.75C5.45453 11.4545 5.10376 11.2201 4.7177 11.0602C4.33164 10.9003 3.91787 10.818 3.5 10.818C3.08213 10.818 2.66836 10.9003 2.2823 11.0602C1.89624 11.2201 1.54547 11.4545 1.25 11.75C1.25 6.365 5.615 2 11 2M11 11.75L11.4542 11.4092C12.1608 10.8794 13.0348 10.6221 13.9157 10.6847C14.7966 10.7473 15.6254 11.1256 16.25 11.75C16.5455 11.4545 16.8962 11.2201 17.2823 11.0602C17.6684 10.9003 18.0821 10.818 18.5 10.818C18.9179 10.818 19.3316 10.9003 19.7177 11.0602C20.1038 11.2201 20.4545 11.4545 20.75 11.75C20.75 6.365 16.385 2 11 2M11 2V1.25"
				stroke={_stroke || "white"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
