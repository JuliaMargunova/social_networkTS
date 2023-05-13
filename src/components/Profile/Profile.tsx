import React, {FC} from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileActionTypes, ProfilePageType} from "../../redux/profile-reducer";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionTypes) => void
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