import React, { useCallback, useEffect, useRef, useState } from 'react'

type TypeWriterProps = {
    textArray: string[]
}

export function TypeWriter({ textArray }: TypeWriterProps) {
    const [currentText, setCurrentText] = useState("")
    let [textArrayIndex, setTextArrayIndex] = useState(0);
    let [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeoutTypewrite: NodeJS.Timeout;
        let timeoutErase: NodeJS.Timeout;

        if (charIndex <= textArray[textArrayIndex].length) {
            timeoutTypewrite = setTimeout(() => {
                const currentArrayEl = textArray[textArrayIndex]
                setCurrentText(prevState => prevState + currentArrayEl.charAt(charIndex))

                setCharIndex(prevState => prevState + 1)
            }, 200)
        } else {
            timeoutErase = setTimeout(() => {
                eraseText()
            }, 2500)
        }

        function eraseText() {
            setCurrentText("")
            setCharIndex(0)

            if (textArrayIndex < textArray.length - 1) {
                setTextArrayIndex(prevState => prevState + 1)
            } else {
                setTextArrayIndex(0)
            }
        }

        return () => {
            clearTimeout(timeoutTypewrite)
            clearTimeout(timeoutErase)
        }

    }, [charIndex, textArray, textArrayIndex])

    return <span>{currentText}</span>
}

