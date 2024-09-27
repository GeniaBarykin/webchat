import {FC} from "react"
import { IMessage } from "../interface"
import style from "./index.module.scss"
import { Avatar } from "../../Avatar"
import { Time } from "../../Time"

interface IProps {
    message_data: IMessage,
    same_user: boolean,
    new_line: boolean
}

export const Message :FC<IProps> = ( {message_data, same_user, new_line }
) => {
    const {created_at,
        id,
        is_new,
        message,
        user} = message_data;
    const classes_message = [style.message_info_text];
    const classes_main = [style.message];
    if (user.you){
        classes_message.push(style.message_my);
        classes_main.push(style.message_right);
    }
    return <div className={style.message_wrapper}> {new_line && <div className={style.message_wrapper_new}>Новые сообщения</div>}
                <div className={classes_main.join(" ")}>
                {!user.you && !same_user ? <Avatar src={user.avatar} size="sm"></Avatar>
                : <div className={style.message_placeholder}></div>}
                <div className={style.message_info}>
                    {!user.you && !same_user && <div className={style.message_info_header}>{user.name + " " + user.surname}</div>}
                    <div className={classes_message.join(" ")}>
                        {message}
                        <div className={style.message_info_time}>
                            <div className={style.message_info_time_filler}>
                            <Time time={created_at}/>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
}