import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from '../../../Projects/social_networkTS/src/components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import {RootStateType, StoreType} from "./redux/state";
import {FC} from "react";

type PropsType = {
    store:StoreType
}
const App:FC<PropsType> = (props) => {
   const state = props.store.getState();
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} changeMessagePost={props.store.changeMessagePost.bind(props.store)} />} />
                        <Route path='/dialogs' element={<Dialogs messages = {state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs} />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
