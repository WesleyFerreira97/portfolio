import React, { useEffect, useState } from 'react';
import { Section, SectionWrap } from './style';
import { useSwipeable } from "react-swipeable";

interface SectionProps {
  children: React.ReactNode;
  newIndex: any;
}

export function Carousel({ children, newIndex }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  console.log(newIndex);

  useEffect(() => {
    setActiveIndex(newIndex);
  }, [newIndex]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {

      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {

      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    // Add Swipe top and bottom 
    // Add Control by Arrows 
  });

  const disableInteraction = () => {
    setIsMoving(true);

    setTimeout(() => {
      setIsMoving(false);
    }, 1000)
  }

  const scrollWheel = (key: React.WheelEvent<HTMLDivElement>) => {

    if (isMoving) return
    disableInteraction();

    if (key.deltaY > 0) {

      return updateIndex(activeIndex + 1)
    }

    updateIndex(activeIndex - 1)
  }


  return (
    <>
      <Section {...handlers}>
        {/* <div onWheel={(e) => scrollWheel(e)}> */}
        <SectionWrap style={{ transform: `translateX(-${activeIndex * 100}% )` }}>
          {React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, { width: "100%" })
          })}
        </SectionWrap>
        {/* </div> */}
      </Section>
    </>
  );
}



// Update futuro : Forçar elemento filho do map a ter propriedades fixas css e evitar bugs
// Update futuro : Possibiltiar que o scrol seja tanto vertical quando horizontal