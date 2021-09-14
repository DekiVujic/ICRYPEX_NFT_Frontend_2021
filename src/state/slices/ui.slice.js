import i18n from "i18next";

import { SUPPORTED_LANGUAGES } from "../../setupI18n";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lang: "tr",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLanguage: {
            reducer: (state, { payload }) => {
                state.lang = payload;
            },
            prepare: language => {
                if (SUPPORTED_LANGUAGES.includes(language)) {
                    i18n.changeLanguage(language);
                }

                return { payload: language };
            },
        },
        reset: state => {
            for (const [key, value] of Object.entries(initialState)) {
                state[key] = value;
            }
        },
    },
});

export const { setLanguage } = uiSlice.actions;

export default uiSlice.reducer;