import React from "react";
import {
    DialogType,
    MessageType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type MapStatePropsType = {
    dialogs: DialogType[],
    messages: MessageType[],
    message: string
}
export type MapDispatcPropsType = {
    sendMessageClick: () => void
    updateMessage: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        message: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatcPropsType => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        updateMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;