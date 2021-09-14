
import rootReducer from "./rootReducer";
import storage from "localforage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
const persistConfig = {
    key: "root",
    storage,
    debug: Boolean(process.env.REACT_APP_DEBUG),
    blacklist: [
        "ui",
    ],
};

export let store;
const reducer = persistReducer(persistConfig, rootReducer);

export const getStore = () => {
    return new Promise(resolve => {
        store = configureStore({
            reducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        });

        const persistor = persistStore(store, null, () => {
            resolve({ store, persistor });
        });
    });
};
