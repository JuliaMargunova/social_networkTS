import React from "react";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export type MessagesType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}
export type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage:string
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    subscribe: (observer: () => void) => void,
    _callSubscriber: () => void,
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC > | ReturnType<typeof updateNewPostTextAC> |ReturnType<typeof updateNewMessageTextAC>|ReturnType<typeof sendMessageAC>;

export const addPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        messagePost: text
    } as const
}
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: text
    } as const
}
export const sendMessageAC = () => {
    return {type: 'SEND-MESSAGE'} as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hi", likesCount: 10},
                {id: 2, message: "hello", likesCount: 12},
                {id: 3, message: "yo", likesCount: 2}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs:
                [
                    {id: 1, name: "Yuli",},
                    {id: 2, name: "Valery",},
                    {id: 3, name: "Olga",},
                    {id: 4, name: "Kat",}
                ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "Love you"}
            ],
            newMessage:"Hello my friend"
        },
        sidebar: {
            friends: [
                {id: 1, name: "Marina", avatar: ''},
                {id: 1, name: "Marina", avatar: ''},
                {id: 1, name: "Marina", avatar: ''}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {id: 4, message: this._state.profilePage.newPostText, likesCount: 8};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.messagePost ? action.messagePost : "";
            this._callSubscriber();
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT ){
            this._state.dialogsPage.newMessage = action.newMessage ? action.newMessage:""
            this._callSubscriber();
        }else if(action.type === SEND_MESSAGE){
            const message:MessagesType ={id:4, message: this._state.dialogsPage.newMessage}
            this._state.dialogsPage.messages.push(message);
            this._state.dialogsPage.newMessage=""
            this._callSubscriber();
        }
    }
}


export default store;
//window.store = store;

