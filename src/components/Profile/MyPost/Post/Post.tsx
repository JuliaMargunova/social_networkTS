import React, {FC} from "react";
import s from './Post.module.css';

type PropsType = {
    message: string,
    likesCount: number
}

const Post: FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <img
                src="https://png.pngtree.com/png-vector/20210222/ourlarge/pngtree-red-rose-logo-jasmine-flowers-for-flower-shop-png-image_2933774.jpg"/>
            <div>{props.message}</div>
        </div>
    )
}

export default Post;