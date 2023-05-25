import React from "react";
import {addPostAC, ProfileActionTypes, ProfilePageType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {
    DialogsActionTypes,
    DialogsPageType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../../redux/dialogs-reducer";
import store from "../../../redux/store";



const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        postMessage: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
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