import React from 'react'
import {DialogsPageType, MessagesType, PostType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
export const dialogsReducer = (state: DialogsPageType, action: any):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessage ? action.newMessage : "";
            return state;
        case SEND_MESSAGE:
            const message: MessagesType = {id: 4, message: state.newMessage}
            state.messages.push(message);
            state.newMessage = ""
            return state;
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