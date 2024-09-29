import React from 'react'

export function HomeVideoBg() {
    const BASE_PATH = "portfolio"
    
    return (
        <div className="h-full w-full absolute top-0 left-0 object-cover">
            <video className="absolute top-0 left-0 h-full w-full object-cover" autoPlay loop muted>
                <source src={`${BASE_PATH}/videos/bg2.mp4`} type='video/mp4' />
            </video>
            <div className="h-full w-full absolute top-0 left-0 bg-[rgb(5,9,25)]/[.40]" />
        </div>
    )
}

