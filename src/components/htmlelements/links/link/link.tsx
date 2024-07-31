import {LinkHTMLAttributes} from "react";

export const Link = (props: LinkHTMLAttributes<HTMLElement>) => {

    return <a className={props.className ?? "transition underline text-eapo-blue-dark cursor-pointer hover:text-eapo-red"} {...props}>
        {
            props.children ?? "Скачать"
        }
    </a>

}