export interface IProps {
    messages: IMessage[] | null,
    title: string | null
}

export interface IMessage {
    created_at: number;
    id: string
    is_new: boolean
    message: string
    user: IUser
}

export interface IUser {
    id: string;
    name: string;
    surname: string;
    avatar: string;
    you: boolean;
}

