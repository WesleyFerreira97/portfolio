import React, { useCallback, useEffect, useRef, useState } from 'react'
type TypeWriterProps = {
    textArray: string[]
}

export function TypeWriter({ textArray }: TypeWriterProps) {
    const writerRef = useRef<HTMLSpanElement | null>(null);
    const [isErase, setIsErase] = useState<Boolean>(false)
    let textArrayIndex = 0;
    let charIndex = 0;

    const typeAndErase = useCallback(() => {
        const currentTextTyped = writerRef.current;

        const type = () => {
            if (charIndex < textArray[textArrayIndex].length) {

                if (currentTextTyped) {
                    currentTextTyped.textContent += textArray[textArrayIndex].charAt(charIndex)

                    charIndex++
                    setTimeout(typeAndErase, 400)
                }
            } else {

                setTimeout(erase, 2400)
                setIsErase(true)

            }
        }

        const erase = () => {
            console.log("bateuAqui");

            if (charIndex > 0 && currentTextTyped) {
                currentTextTyped.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
                charIndex--
                setTimeout(erase, 400)
            }
        }

        type()
    }, [charIndex, textArray, textArrayIndex])

    useEffect(() => {
        if (!isErase) {
            typeAndErase();
        }
    }, [typeAndErase, isErase])

    return (
        <>
            <span ref={writerRef}></span>
        </>
    )
}

