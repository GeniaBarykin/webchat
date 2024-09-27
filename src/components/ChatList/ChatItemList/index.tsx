import {FC, useState,useEffect} from "react";
import {Avatar} from "../../Avatar/index";
import { Time } from "../../Time";
import styles from "./index.module.scss";
import {IChat} from "../interface"

export interface IProps {
    chatInfo: IChat,
    selected: boolean,
    selectChat: Function
}


export const ChatItemList: FC<IProps> = ({chatInfo, selectChat, selected}) => {
    const classes = [styles.chatitem]
    const onClick = () => {
        selectChat(chatInfo.id, chatInfo.title);
    }

    if (selected) {        
        classes.push(styles.active)
    }
    
    return <div className={classes.join(" ")} onClick= {onClick}>
        <Avatar src={chatInfo.avatar} size="md"></Avatar>
        <div className={styles.chatitem_text}>
            <div className={styles.chatitem_text_info}>
                <div className={styles.chatitem_text_title}>{chatInfo.title}</div>
                <Time time={chatInfo.last_message.created_at}></Time>
            </div>                        
            <div className={styles.chatitem_text_message}>{chatInfo.last_message.message}</div>
        </div>     
    </div>
         
}

