import React, {ChangeEvent, FC, RefObject} from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostAC, PostType, ProfileActionTypes, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {StoreType} from "../../../redux/redux-store";

type PropsType = {
    /*posts: PostType[]
    postMessage: string
    dispatch: (action: ProfileActionTypes) => void*/
    store:StoreType
}

const MyPostContainer: FC<PropsType> = (props) => {
    const state = props.store.getState().profilePage;
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
            props.store.dispatch(addPostAC())
    }
    const onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostTextAC(text));
    }
    return (
        <MyPost posts={state.posts} postMessage={state.newPostText} addPost={addPost} updateNewPostText={onPostChange} />
    )
}

export default MyPostContainer;