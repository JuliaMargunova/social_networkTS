import React, {FC} from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}
const Profile: FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.profilePage.posts} postMessage={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;