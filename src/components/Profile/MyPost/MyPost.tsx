import React, {ChangeEvent, FC, RefObject} from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostAC, PostType, ProfileActionTypes, updateNewPostTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    posts: PostType[]
    postMessage: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPost: FC<PropsType> = (props) => {
    let posts1 = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        if (newPostElement.current?.value) {
            props.addPost();
            //props.dispatch(addPostAC())
        }
    }
    const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        //props.dispatch(updateNewPostTextAC(event.currentTarget.value));
        props.updateNewPostText(event.currentTarget.value);
    }
    return (
        <div>
            My Post
            <div>
                <div>
                    <textarea value={props.postMessage} onChange={onChangeMessage} ref={newPostElement}/>
                </div>
                <button onClick={addPost}>Add</button>
            </div>
            <div>
                {posts1}
            </div>
        </div>
    )
}

export default MyPost;