import {FC} from "react"
import { IProps, IMessage } from "./interface"
import { Header } from "../Header"
import style from "./index.module.scss"
import { Message } from "./Message"
const dayjs = require('dayjs');

export const ChatWindow: FC<IProps> = ({messages, title}) => {
    
    const groupedMessages =messages? [...messages].reverse().reduce((acc, message) => {
        const date = dayjs(message.created_at*1000).format("DD.MM.YYYY");
        
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(message);
        return acc;
    }, {} as { [key: string]: IMessage[] }) : {};

    return <div className={style.chat_window}>
        <div>
            <Header title={title} hasIcon={true}/>
        </div>
        
        <div className={style.chat_window_messages}>
            {(!messages && title) && "loading ..."}            
            {messages && Object.entries(groupedMessages).map(([date,messages]) => {
                return <div key={date} >
                    <div className={style.chat_window_date}>
                        {date}
                    </div>
                    <div> {messages.map((message, index) => {
                        return <Message 
                        key={message.id} 
                        message_data={message}
                        new_line = {message.is_new && (!messages[index-1] || !messages[index-1].is_new)}
                        same_user={messages[index-1] && message.user.id == messages[index-1].user.id}/>
                    })}
                    </div>
                </div>
            })}
        </div>        
    </div>
}