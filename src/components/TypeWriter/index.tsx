import React, { useEffect, useRef } from 'react'

type TypeWriterProps = {
    strings: string[]
}

export function TypeWriter({ strings }: TypeWriterProps) {
    const writerRef = useRef<HTMLSpanElement | null>(null);
    const stringsToWriter = [];
    const finalStrings = splitStrings(strings);

    function splitStrings(stringsArr: string[]) {
        const convertedStrings = stringsArr.map(item => {
            return item.split("")
        })

        return convertedStrings
    }

    stringsToWriter.push(...finalStrings)

    return (
        <span ref={writerRef}>{stringsToWriter[0]}</span>
    )
}
