import React, {FC} from "react";

type PropsType={
    message:string
}
const Message:FC<PropsType> = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export default Message;