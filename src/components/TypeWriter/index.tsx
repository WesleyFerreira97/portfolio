import React, { use, useCallback, useEffect, useRef } from 'react'

type TypeWriterProps = {
    textArray: string[]
}

export function TypeWriter({ textArray }: TypeWriterProps) {
    const writerRef = useRef<HTMLSpanElement | null>(null);
    let textArrayIndex = 0;
    let charIndex = 0;

    const typeAndErase = useCallback(() => {

        const type = () => {
            if (charIndex < textArray[textArrayIndex].length) {
                const currentTextTyped = writerRef.current;

                if (currentTextTyped) {
                    currentTextTyped.textContent += textArray[textArrayIndex].charAt(charIndex)
                    console.log(textArray[textArrayIndex].charAt(charIndex), "log aqui");

                    charIndex++
                    setTimeout(type, 400)
                }
            } else {
                setTimeout(erase, 400)
            }
        }

        const erase = () => {
            console.log("bateuAqui");

        }

        type()
    }, [charIndex, textArray, textArrayIndex])


    useEffect(() => {
        typeAndErase()
    }, [typeAndErase])

    return (
        <>
            <span ref={writerRef}>{ }</span>
        </>
    )
}
