import React from 'react'
const VideoBg = () => {
    return (
        <video width={"100%"} height={"100%"} autoPlay loop muted>
            <source src="/videos/bg2.mp4" type='video/mp4' />
        </video>
    )
}
export default function About() {
    return (
        <div>
            About
            <VideoBg />
        </div>
    )
}
