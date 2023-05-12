import React, {FC} from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost:()=>void
    changeMessagePost:(message:string)=>void
}
const Profile: FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost posts={props.profilePage.posts} addPost={props.addPost} postMessage={props.profilePage.newPostText} changeMessagePost={props.changeMessagePost}/>
        </div>
    )
}

export default Profile;