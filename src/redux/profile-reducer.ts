import React from 'react'
import {ActionsTypes, MessagesType, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const profileReducer = (state: ProfilePageType, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: 4, message: state.newPostText, likesCount: 8};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.messagePost ? action.messagePost : "";
            return state;
        default:
            return state;
    }
}

export type ProfileActionTypes = ReturnType<typeof addPostAC > | ReturnType<typeof updateNewPostTextAC >;
export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        messagePost: text
    } as const
}