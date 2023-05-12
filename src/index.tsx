import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, changeMessagePost, RootStateType, subscribe} from './redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeMessagePost={changeMessagePost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
