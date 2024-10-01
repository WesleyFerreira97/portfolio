import { Icon } from "@phosphor-icons/react";
import { Typography } from "./Typography";

type ButtonProps = {
    icon: Icon;
    text: string;
    animation?: boolean;
    bg?: "primary" | "secondary" | "secondaryAlt",
    onClick?: () => void;
    href?: string;
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
        <a
            href={props.href}
            target="_blank"
            onClick={props.onClick}
            className={`${bgSelect} cursor-pointer relative px-9 py-3 flex justify-center items-center overflow-hidden rounded-sm active:scale-95 group`}
        >
            {animation && (
                <span className="flex bg-mask absolute w-full h-full bg-primary z-10 transform-gpu  transition-transform duration-[300ms] ease-out skew-x-[90deg] scale-x-0 origin-bottom-left group-hover:skew-x-0 group-hover:scale-x-100"></span>
            )}
            <Typography
                bpSizes="text-[0.8rem] md:text-[1rem] 2xl:text-[1.125rem]"
                style={{
                    type: "text",
                    color: "white",
                    className: "z-20 capitalize whitespace-nowrap"
                }}
            >
                <CurrentIcon size={20} className='inline mr-1' />
                {text}
            </Typography>
        </a>
    )
}

export { Button }