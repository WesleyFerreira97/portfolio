import { Icon } from "@phosphor-icons/react";
import { Typography } from "./Typography";

type ButtonProps = {
    icon: Icon;
    text: string;
    animation?: boolean;
    bg?: "primary" | "secondary" | "secondaryAlt",
    onClick?: () => void
}

const Button = ({ icon, text, animation = true, bg = "secondaryAlt", ...props }: ButtonProps) => {
    const CurrentIcon = icon;

    const buttonColors = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        secondaryAlt: "bg-[#313552]"
    }

    const bgSelect = bg ? buttonColors[bg] : "";

    return (
        <div
            onClick={props.onClick}
            className={`${bgSelect} cursor-pointer relative px-9 py-3 flex justify-center items-center overflow-hidden rounded-sm active:scale-95 group`}
        >
            {animation && (
                <span className="flex bg-mask absolute w-full h-full bg-primary z-10 transform-gpu  transition-transform duration-[300ms] ease-out skew-x-[90deg] scale-x-0 origin-bottom-left group-hover:skew-x-0 group-hover:scale-x-100"></span>
            )}
            <Typography
                size='md'
                style={{
                    type: "text",
                    color: "white",
                    className: "z-20"
                }}
            >
                <CurrentIcon size={20} className='inline mr-1' />
                {text}
            </Typography>
        </div>
    )
}

export { Button }