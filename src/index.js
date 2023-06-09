import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux";


import './index.css';
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter basename= "/react.project">
            <App/>
        </BrowserRouter>
    </Provider>
);
