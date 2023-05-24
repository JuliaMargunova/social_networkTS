import React, {FC, RefObject} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

type PropsType = {}

const MyPostContainer: FC<PropsType> = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage;
                    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text));
                    }
                    return <MyPost
                        posts={state.posts}
                        postMessage={state.newPostText}
                        addPost={addPost}
                        updateNewPostText={onPostChange}/>
                }}
        </StoreContext.Consumer>
    )
}

export default MyPostContainer;