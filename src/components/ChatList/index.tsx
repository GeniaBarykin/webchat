import {FC } from "react";
import { ChatItemList } from "./ChatItemList";
import { IProps, IChat} from "./interface"
import style from "./index.module.scss"
import { Header } from "../Header";



export const ChatList: FC<IProps> = ({selectedChat, selectNewChat, chats}) => {
    
    return (
        <div className={style.chatlist}>
            <Header title={"All chats"}/>
            <div className={style.chatlist_chats}>
                {chats ? chats.map((chat:   IChat )=>{
                    return <ChatItemList
                    chatInfo={chat} 
                    key={chat.id} 
                    selectChat={selectNewChat}
                    selected={selectedChat === chat.id}></ChatItemList>
                }) : "loading..."} 
            </div>
        </div>
    )
}

