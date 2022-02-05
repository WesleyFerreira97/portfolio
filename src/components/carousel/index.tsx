import React, { useState } from 'react';
import { Section, SectionWrap, Navigation } from './style';
import { useSwipeable } from "react-swipeable";

interface SectionProps {
  children: React.ReactNode;
}


export function SectionScroll({ children }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

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
  });

  const disableInteraction = () => {
    setIsMoving(true);
    console.log(isMoving);

    setTimeout(() => {
      console.log(isMoving);
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
      <Navigation>
        <button onClick={() => updateIndex(activeIndex - 1)}>{'prev'}</button>
        <button onClick={() => updateIndex(activeIndex + 1)}>{'Next >'}</button>
      </Navigation>
      <Section {...handlers}>
        <div onWheel={(e) => scrollWheel(e)}>
          <SectionWrap style={{ transform: `translateX(-${activeIndex * 100}% )` }}>
            {React.Children.map(children, (child: any, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </SectionWrap>
        </div>
      </Section>



    </>
  );
}

