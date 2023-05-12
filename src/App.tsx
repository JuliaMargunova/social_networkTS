import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from '../../../Projects/social_networkTS/src/components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { RootStateType} from "./redux/state";
import {FC} from "react";

type PropsType = {
    state:RootStateType
    addPost:()=>void
    changeMessagePost:(message:string)=>void
}
const App:FC<PropsType> = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} changeMessagePost={props.changeMessagePost} />} />
                        <Route path='/dialogs' element={<Dialogs messages = {props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs} />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
