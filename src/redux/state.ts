import React from "react";
import {rerenderEntireTree} from "../render";

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
    messages: MessagesType[]
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

const state: RootStateType = {
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Marina", avatar: ''},
            {id: 1, name: "Marina", avatar: ''},
            {id: 1, name: "Marina", avatar: ''}
        ]
    }
}

export const addPost = () => {
    const newPost: PostType = {id: 4, message: state.profilePage.newPostText, likesCount: 8};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const changeMessagePost = (messagePost:string)=>{
    state.profilePage.newPostText = messagePost;
    rerenderEntireTree(state);
}

export default state;

