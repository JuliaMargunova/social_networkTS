import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css';


type PropsType = {
    id: number
    name: string
}
const DialogItem: FC<PropsType> = ({id, name}) => {
    const path: string = `/dialog/${id}`
    return (
        <div className={s.dialogItem}>
            <NavLink to={path}>
                {name}
            </NavLink>
        </div>)
}
export default DialogItem;