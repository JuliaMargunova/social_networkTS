import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer
    }
);

let store = createStore(rootReducer);
export type StoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReducer>
export default store;
