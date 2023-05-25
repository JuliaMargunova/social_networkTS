import React, {FC} from "react";
import {
    DialogsActionTypes,
    DialogsPageType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        message: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: (action: any) => void) => {
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