import i18n from "i18next";

import { SUPPORTED_LANGUAGES } from "../../setupI18n";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name="",
    surname="",
    email="",
    phone="",
    password=""
};

const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {        
        reset: state => {
            for (const [key, value] of Object.entries(initialState)) {
                state[key] = value;
            }
        },
    },
});

export const {  } = authorizationSlice.actions;

export default authorizationSlice.reducer;