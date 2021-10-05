import { dictSignUp, dictSignIn, dictForgotPassword, 
    dictFaq, dictAboutUs, dictProfile, dictMyWallet,
     dictAccActivities, dictMyNfts,dictSettings } from "./constants";

export const pathSignUp = Object.values(dictSignUp);
export const pathSignIn = Object.values(dictSignIn);
export const pathForgotPassword = Object.values(dictForgotPassword);
export const pathFaq = Object.values(dictFaq);
export const pathAboutUs = Object.values(dictAboutUs);
export const pathSettings = Object.values(dictSettings);
export const pathProfile = Object.values(dictProfile);
export const pathMyWallet = Object.values(dictMyWallet);
export const pathAccActivities = Object.values(dictAccActivities);
export const pathMyNfts = Object.values(dictMyNfts);


export const getLocalePath = (pathname, lang) => {
    if (pathSignUp.includes(pathname)) {
        return dictSignUp[lang];
    }
    if (pathSignIn.includes(pathname)) {
        return dictSignIn[lang];
    }
    if (pathForgotPassword.includes(pathname)) {
        return dictForgotPassword[lang];
    }
    if (pathFaq.includes(pathname)) {
        return dictFaq[lang];
    }
    if (pathAboutUs.includes(pathname)) {
        return dictAboutUs[lang];
    }    
    if (pathProfile.includes(pathname)) {
        return dictProfile[lang];
    }
    if (pathMyWallet.includes(pathname)) {
        return dictMyWallet[lang];
    }
    if (pathAccActivities.includes(pathname)) {
        return dictAccActivities[lang];
    }
    if (pathMyNfts.includes(pathname)) {
        return dictMyNfts[lang];
    }
    if (pathSettings.includes(pathname)) {
        return dictSettings[lang];
    }

    return false;
};