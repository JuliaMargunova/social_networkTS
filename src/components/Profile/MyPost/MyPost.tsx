import React, {ChangeEvent, FC, RefObject} from "react";
import s from './MyPost.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: PostType[]
    postMessage:string
    addPost:()=>void
    changeMessagePost:(message:string)=>void

}
const MyPost: FC<PropsType> = (props) => {
    let posts1 = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)
    let newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();
    const addPost =()=>{
        if(newPostElement.current?.value){
            props.addPost();
        }
    }
    const onChangeMessage =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        props.changeMessagePost(event.currentTarget.value);
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