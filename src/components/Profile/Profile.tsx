import React, {FC} from "react";
import MyPost from "./MyPost/MyPost";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileActionTypes, ProfilePageType} from "../../redux/profile-reducer";
import MyPostContainer from "./MyPost/MyPostContainer";
import {StoreType} from "../../redux/redux-store";

type PropsType = {/*
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionTypes) => void*/
    store: StoreType
}
const Profile: FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}

export default Profile;