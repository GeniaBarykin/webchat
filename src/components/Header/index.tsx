import {FC } from "react";
import style from "./index.module.scss"
import icon from "../../img/Shape.svg"
interface IProps {
    title: string | null,
    hasIcon?: boolean
}

export const Header: FC<IProps> = ({title, hasIcon=false}) => {
    return <div className={style.header}>
        {hasIcon && <img className={style.header_image} src={icon} alt="messages"></img>}
    <div className={style.header_text}>{title ? title : "Select chat"}</div>
</div>
}


