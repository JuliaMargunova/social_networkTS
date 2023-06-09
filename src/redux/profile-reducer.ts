import React from 'react'
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
const initialState = {
    posts: [
        {id: 1, message: "hi", likesCount: 10},
        {id: 2, message: "hello", likesCount: 12},
        {id: 3, message: "yo", likesCount: 2}
    ] as PostType[],
    newPostText: ""
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionTypes): InitialStateType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: 4, message: state.newPostText, likesCount: 8};
            return {...state,posts:[...state.posts,newPost],newPostText:""};
        case UPDATE_NEW_POST_TEXT:
            return {...state,newPostText:action.messagePost ? action.messagePost : ""};
        default:
            return state;
    }
}

export type ProfileActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>;
export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        messagePost: text
    } as const
}