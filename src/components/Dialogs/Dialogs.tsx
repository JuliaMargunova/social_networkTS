import React, {ChangeEvent, FC, RefObject} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

import {
    DialogsActionTypes,
    DialogsType,
    MessagesType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";

type PropsType ={
    dialogs:DialogsType[]
    messages:MessagesType[],
    message:string
    sendMessageClick:()=>void,
    updateMessage:(text:string)=>void

}
const Dialogs:FC<PropsType> = (props) => {

    const dialogsElements = props.dialogs.map((d,index) => <DialogItem key={index} name={d.name} id={d.id} />)
    const messageElements = props.messages.map((m,index) => <Message key={index} message={m.message} />)
    const message:RefObject<HTMLTextAreaElement> = React.createRef();
    const onSendMessageClick = ()=>{
        if(message.current){
            props.sendMessageClick()
        }
    }
    const onUpdateMessage=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateMessage(e.currentTarget.value)
    }
    return (
        <div >
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <textarea value={props.message} onChange={onUpdateMessage} ref={message} />
            <button onClick={onSendMessageClick}>add</button>
        </div>
    )
}

export default Dialogs;