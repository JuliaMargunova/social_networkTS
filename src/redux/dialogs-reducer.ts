import React from 'react'

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}
export type InitialStateType = typeof initialState
const initialState = {
    dialogs:
        [
            {id: 1, name: "Yuli",},
            {id: 2, name: "Valery",},
            {id: 3, name: "Olga",},
            {id: 4, name: "Kat",}
        ] as DialogType[],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Love you"}
    ] as MessageType[],
    newMessage: "Hello my friend"
}
export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage ? action.newMessage : ""
            };
        case SEND_MESSAGE:
            const message: MessageType = {id: 4, message: state.newMessage}
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