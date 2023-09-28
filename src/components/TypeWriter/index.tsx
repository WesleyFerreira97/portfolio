import React, { useCallback, useEffect, useRef, useState } from 'react'
type TypeWriterProps = {
    textArray: string[]
}

export function TypeWriter({ textArray }: TypeWriterProps) {
    const [currentText, setCurrentText] = useState("")
    let textArrayIndex = 0;
    let [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (charIndex <= textArray[textArrayIndex].length) {
            timeout = setTimeout(() => {
                const currentArrayEl = textArray[textArrayIndex]
                setCurrentText(prevState => prevState + currentArrayEl.charAt(charIndex))

                setCharIndex(prevState => prevState + 1)
            }, 300)
        } else {
            console.log("bateu aqui");
        }

        return () => {
            clearTimeout(timeout)
        }

    }, [charIndex, textArray, textArrayIndex])

    return (
        <>
            <span>{currentText}</span>
        </>
    )
}

