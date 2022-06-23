import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Global} from "./styles/GlobalStyles";
import {Provider} from "react-redux";
import {setupStore} from "./store";
import { SkeletonTheme } from 'react-loading-skeleton'

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <SkeletonTheme baseColor="#dbdbdb" highlightColor="#ebebeb">
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </SkeletonTheme>
);

