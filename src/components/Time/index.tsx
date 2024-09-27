import {FC} from "react";
import {ITime} from "./interface";
import style from "./index.module.scss";

const dayjs = require('dayjs');

export const Time: FC<ITime> = ({time}) => {

    const translateDate = (date : number | undefined) => {
        if (date) {
            return <>{dayjs(date*1000).format("HH:MM")}</>
        }
        return <></>        
    };

    return (
        <div className={style.time}>
            {translateDate(time)}           
        </div>
    )
}