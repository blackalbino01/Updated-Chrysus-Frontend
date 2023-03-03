import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface CCarouselItemProps {
	children?: React.ReactNode | React.ReactNode[];
	width?: number;
}

interface CCarouselProps {
	children?: React.ReactNode | React.ReactNode[];
}

export const CCarouselItem = ({ children, width }: CCarouselItemProps) => {
	return (
		<div className="carousel-item" style={{ width: width }}>
			{children}
		</div>
	);
};

export const CCarousel = ({ children }: CCarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(true);

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 3000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	return (
		<div
			{...handlers}
			className="carousel"
			// onMouseEnter={() => setPaused(true)}
			// onMouseLeave={() => setPaused(false)}
		>
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child: any, index) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>
		
		</div>
	);
};



{/* <div className="indicators">
<div className="col-12 text-center">
	{React.Children.map(children, (child, index) => {
		return (
			<button
				className={`${index === activeIndex ? "active" : ""}`}
				onClick={() => {
					updateIndex(index);
				}}
			>
			</button>
		);
	})}
</div>
</div> */}