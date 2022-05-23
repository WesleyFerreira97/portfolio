import React, { useEffect, useState } from 'react'
import { Section, SectionWrap } from './style'
import { useSwipeable } from 'react-swipeable'

interface SectionProps {
	children: React.ReactNode;
	newIndex: number;
}

export function Carousel({ children, newIndex }: SectionProps) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isMoving, setIsMoving] = useState(false)

	useEffect(() => {
		setActiveIndex(newIndex)
	}, [newIndex])

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {

			newIndex = React.Children.count(children) - 1
			console.log(React.Children)

		} else if (newIndex >= React.Children.count(children)) {

			newIndex = 0
		}
		setActiveIndex(newIndex)
	}

	const swipeTouchScreen = useSwipeable({
		onSwipedUp: () => updateIndex(activeIndex + 1),
		onSwipedDown: () => updateIndex(activeIndex - 1),
	})

	const disableInteraction = () => {
		setIsMoving(true)

		setTimeout(() => {
			setIsMoving(false)
		}, 1000)
	}

	const scrollWheel = (key: React.WheelEvent<HTMLDivElement>) => {

		if (isMoving) return
		disableInteraction()

		if (key.deltaY > 0) {

			return updateIndex(activeIndex + 1)
		}

		updateIndex(activeIndex - 1)
	}

	const arrowNavigation = (eventKey: React.KeyboardEvent<HTMLDivElement>) => {
		if (isMoving) return
		disableInteraction()

		if (eventKey.key === 'ArrowUp' || eventKey.key === 'PageUp') {
			updateIndex(activeIndex - 1)
		}
		if (eventKey.key === 'ArrowDown' || eventKey.key === 'PageDown') {
			updateIndex(activeIndex + 1)
		}
	}

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
	)
}


