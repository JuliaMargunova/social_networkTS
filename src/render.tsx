import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, changeMessagePost, RootStateType} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export function rerenderEntireTree(state:RootStateType) {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeMessagePost={changeMessagePost}/>
    </BrowserRouter>,
    document.getElementById('root')
);
}

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
