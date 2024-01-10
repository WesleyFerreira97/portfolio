import { Icon } from "@phosphor-icons/react";
import { Typography } from "./Typography";

type ButtonProps = {
    icon: Icon;
    text: string
}

const Button = ({ icon, text }: ButtonProps) => {
    const CurrentIcon = icon;
    return (
        <div className='bg-secondaryAlt px-9 py-2'>
            <Typography
                size='md'
                style={{
                    type: "text",
                    color: "white",
                }}
            >
                <CurrentIcon size={16} className='inline mr-1' />
                {text}
            </Typography>
        </div>
    )
}

export { Button }