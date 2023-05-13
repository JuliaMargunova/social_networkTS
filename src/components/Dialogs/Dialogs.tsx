import React, {ChangeEvent, FC, RefObject} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsType,
    MessagesType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/state";

type PropsType ={
    dialogs:DialogsType[]
    messages:MessagesType[],
    message:string
    dispatch:(action:ActionsTypes)=>void
}
const Dialogs:FC<PropsType> = (props) => {

    const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)
    const messageElements = props.messages.map((m) => <Message message={m.message} />)
    const message:RefObject<HTMLTextAreaElement> = React.createRef();
    const onSendMessageClick = ()=>{
        if(message.current){
            props.dispatch(sendMessageAC())
        }
    }
    const updateMessage=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
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
            <textarea value={props.message} onChange={updateMessage} ref={message} />
            <button onClick={onSendMessageClick}>add</button>
        </div>
    )
}

export default Dialogs;