import React, {FC} from "react";

import {
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type PropsType = {}
const DialogsContainer: FC<PropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const state = store.getState().dialogsPage;
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                const onUpdateMessage = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                return <Dialogs dialogs={state.dialogs}
                                messages={state.messages}
                                message={state.newMessage}
                                sendMessageClick={onSendMessageClick}
                                updateMessage={onUpdateMessage}/>
            }
        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;