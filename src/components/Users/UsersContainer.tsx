import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUserAC, unFollowAC, UserType} from "../../redux/users-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (idUser: number) => {
            dispatch(followAC(idUser))
        },
        unFollow: (idUser: number) => {
            dispatch(unFollowAC(idUser))
        },
        setUsers:(users:UserType[])=>{dispatch(setUserAC(users))}
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;