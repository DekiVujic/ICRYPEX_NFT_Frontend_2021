export const dictSignUp = {
    tr: "/kayıt-ol",
    en: "/sign-up",
};
export const dictSignIn = {
    tr: "/giriş-yap",
    en: "/sign-in",
};

export const dictForgotPassword = {
    tr: "/şifremi-unuttum",
    en: "/forgot-password",
};

export const pathSignUp = Object.values(dictSignUp);
export const pathSignIn = Object.values(dictSignIn);
export const pathForgotPassword = Object.values(dictForgotPassword);

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
    return false;
};