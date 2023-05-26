import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {ActionTypeUser, follow, setUser, unFollow, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type MapStatePropsType = {
    users: UserType[]
}
export type MapDispatcPropsType = {
    follow: (idUser: number) => void
    unFollow: (idUser: number) => void
    setUsers: (users: UserType[]) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatcPropsType => {
    return {
        follow: (idUser: number) => {
            dispatch(follow(idUser))
        },
        unFollow: (idUser: number) => {
            dispatch(unFollow(idUser))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUser(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;