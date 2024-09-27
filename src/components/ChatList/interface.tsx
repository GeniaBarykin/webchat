export interface IProps {
    selectedChat: string | null,
    selectNewChat: Function,
    chats: [] | null
}

export interface IChat {
    id: string,
    avatar: string, 
    title: string,
    last_message: {
        message: string,
        created_at: number
    }
}