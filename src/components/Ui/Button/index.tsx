import { Icon } from "@phosphor-icons/react";
import { Typography } from "../Typography";
import S from "./styles.module.css"

type ButtonProps = {
    icon: Icon;
    text: string
}

const Button = ({ icon, text }: ButtonProps) => {
    const CurrentIcon = icon;
    return (
        <div className={S.buttonWrap}>
            <span className="flex bg-mask absolute w-full h-full bg-primary z-10 transform-gpu -0translate-x-full"></span>
            <Typography
                size='md'
                style={{
                    type: "text",
                    color: "white",
                    className: "z-20"
                }}
            >
                <CurrentIcon size={16} className='inline mr-1' />
                {text}
            </Typography>
        </div>
    )
}

export { Button }