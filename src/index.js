import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

import initI18n from "./setupI18n";
import {getStore} from "./state";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

run();

let Store, Persistor;
async function run() {
    const { store, persistor } = await getStore();
    const {
        ui: { lang },
    } = store.getState();
    Store = store;
    Persistor = persistor;
    await initI18n(lang);
    render();
}

function render() {
    const App = require("./App").default;

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={Store}>
                <PersistGate loading={null} persistor={Persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
}