import React, { useEffect, useState } from "react";
import { Section, SectionWrap } from "./style";
import { useSwipeable } from "react-swipeable";
import { useDisableInteraction } from "../../hooks/useDisableInteraction";

interface SectionProps {
	children: React.ReactNode;
	newIndex: number;
	setIndex: (index: number) => void;
}

export function Carousel({ children, newIndex, setIndex }: SectionProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const { isDisable, disableInteraction } = useDisableInteraction(1000);

	useEffect(() => {
		setActiveIndex(newIndex);
	}, [newIndex]);

	const updateIndex = (newIndex: number) => {

		if (newIndex < 0) {

			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {

			newIndex = 0;
		}

		setIndex(newIndex);
		setActiveIndex(newIndex);
	};

	const swipeTouchScreen = useSwipeable({
		onSwipedUp: () => updateIndex(activeIndex + 1),
		onSwipedDown: () => updateIndex(activeIndex - 1),
	});

	const scrollWheel = (key: React.WheelEvent<HTMLDivElement>) => {

		if (isDisable) return;
		disableInteraction();

		if (key.deltaY > 0) {

			return updateIndex(activeIndex + 1);
		}

		updateIndex(activeIndex - 1);
	};

	const arrowNavigation = (eventKey: React.KeyboardEvent<HTMLDivElement>) => {
		if (isDisable) return;
		disableInteraction();

		if (eventKey.key === "ArrowUp" || eventKey.key === "PageUp") {
			updateIndex(activeIndex - 1);
		}
		if (eventKey.key === "ArrowDown" || eventKey.key === "PageDown") {
			updateIndex(activeIndex + 1);
		}
	};

	return (
		<>
			<Section
				{...swipeTouchScreen}
				onWheel={(e) => scrollWheel(e)}
				onKeyDown={(e) => arrowNavigation(e)}
				tabIndex={0}
			>
				<SectionWrap style={{ transform: `translateY(-${activeIndex * 100}% )` }}>
					{children}
				</SectionWrap>
			</Section>
		</>
	);
}

