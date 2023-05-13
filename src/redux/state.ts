import React from "react";
import {ProfileActionTypes, profileReducer} from "./profile-reducer";
import {DialogsActionTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


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
    newMessage: string
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
export type ActionsTypes = ProfileActionTypes | DialogsActionTypes;

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
            newMessage: "Hello my friend"
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
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionTypes);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionTypes);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}


export default store;
//window.store = store;

