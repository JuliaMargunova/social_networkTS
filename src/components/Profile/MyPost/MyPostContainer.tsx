import React from "react";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {UserType} from "../../../redux/users-reducer";
import {Dispatch} from "redux";


export type MapStatePropsType = {
    posts: PostType[],
    postMessage: string
}
export type MapDispatcPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        postMessage: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatcPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;