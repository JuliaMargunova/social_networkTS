import React, {ChangeEvent, FC, RefObject} from "react";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

import {
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}
const DialogsContainer: FC<PropsType> = (props) => {

    const state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onUpdateMessage = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }
    return (
        <Dialogs dialogs={state.dialogs} messages={state.messages} message={state.newMessage}
                 sendMessageClick={onSendMessageClick} updateMessage={onUpdateMessage}/>
    )
}

export default DialogsContainer;