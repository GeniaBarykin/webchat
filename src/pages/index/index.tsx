import React, {FC, useEffect, useMemo, useState} from "react";
import {IPage} from "../../interface/page";
import { ChatList } from "../../components/ChatList";
import { getChatList } from "../../api/chat";
import type { AppDispatch, RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChatList, fetchMessages } from '../../store/chatSlice'
import { ChatWindow } from "../../components/ChatWindow";
import style from "./index.module.scss"

export const PageIndex: FC<IPage> = (props: IPage) => {
    const [selectedChat, setSelectedChat] = useState<string | null>(null)
    const [selectedChatName, setSelectedChatName] = useState<string | null>(null)
    const chats = useSelector((state: RootState) => state.chat.chats);
    const messages = useSelector((state: RootState) => state.chat.messages);
    const dispatch = useDispatch<AppDispatch>();

    const selectNewChat = (newChat: string, title: string) => {
        setSelectedChat(newChat);
        setSelectedChatName(title);
    }

    useEffect(()=>{
        dispatch(fetchChatList());        
    }, [dispatch])

    useEffect(()=>{
        if (selectedChat) {
            dispatch(fetchMessages(selectedChat));
        }     
    }, [selectedChat, dispatch])

    return (
        <div className={style.chat_page}>             
            <ChatList
            selectedChat={selectedChat}
            selectNewChat={selectNewChat}
            chats={chats}                
            />
            <ChatWindow
                title={selectedChatName}
                messages={messages}
            />
        </div>
    )
}