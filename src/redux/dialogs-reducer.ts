import React from 'react'

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessage: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}
const initialState = {
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
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionTypes): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage ? action.newMessage : ""
            };
        case SEND_MESSAGE:
            const message: MessagesType = {id: 4, message: state.newMessage}
            return {...state, messages: [...state.messages, message], newMessage: ""};
        default:
            return state;
    }
}
export type DialogsActionTypes = ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>;
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const
}
export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}