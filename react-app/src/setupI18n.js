import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const SUPPORTED_LANGUAGES = ["en", "tr"];

const init = (initialLang = "tr") => {
  return new Promise((resolve, reject) => {
    i18n.use(initReactI18next).init({
      debug: Boolean(process.env.REACT_APP_DEBUG),
      resources: {
        en: {
          common: {
            english: 'English',
            turkish: 'Turkish',
            signIn: 'Sign In',
            signUp: 'Sign Up',
            aboutUs: 'About Us',
            auction: 'Auction',
            subscribe: 'Subscribe',
            news: 'News',
            map: 'Map',
            create: 'Create',
            save: 'Save',
            send: 'Send',
            market: 'Market',
            pres: 'Pres',
            play: 'Play',
            termsOfUse: 'Terms of Use',
            faq: 'Faq',
            faqCapital: 'FAQ',
            onePager: 'One Pager',
            whitePager: 'White Paper',
            forYou: 'For You',
            alreadyHaveAnAccount: 'Already have an account?',
            oneAccountTwoPlatforms: 'One Account Two Platforms',
            socialMedia: 'Social Media',
            instagram: 'Type the Instagram',
            facebook: 'Type the Facebook',
            twitter: 'Type the Twitter'
          },
          login: {
            notARobot: "I am not a robot",
            enterCode: "Enter Verification Code",
            verificationCode: "Verification Code",
            forgotPassword: "Forgot my password",
            sendCode: "Send verification code",
            reSendCode: "Resend Code",
            email: "E-Mail",
            password: "Password",
            confirmPassword: "Confirm password",
            firstname: "Name",
            surname: "Surname",
            displayName: "Display Name",
            userName: "User Name",
            phone: "Phone",
            oldEnough: "I declare that I am at least 18 years old",
            termsOfService: "Terms of service",
            readAndAgree: "read and agree",
            readAndAgreeClick: "By clicking Sign Up, I hereby acknowledge that I agree to the ICRYPEX NFT Terms and Conditions and I???ve read the Privacy Notice.",
            readAndAgreeCapital: "Read and Agree",
            readAndAgreeNews: "I want to receive news from commercial advertisements and announcements.",
            sendAgain: "Send Again",
            resetPassword: "Reset My Password",
            hasResetPassword: "Your Password Has Been Reset",
            sentNewPassword: "Your new password has been sent via SMS.",
            dontHaveAnAccountYet: 'Don???t have an account yet?',
            userName:'User Name',
          },
          form: {
            isRequired: "This field is required",
            shouldBeMin: "Should be at least {{value}}",
            shouldBeMax: "Should be at most {{value}}",
            shouldBeMinLength: "Should be at least {{value}} characters",
            shouldBeMaxLength: "Should be at most {{value}} characters",
            passwordNotMatch: "Passwords do not match",
          },
          profile:{
            cryptoAssets: "Crypto Assets"
          },
          menu: {
            marketplace: 'Marketplace',
            myNfts: "My NFT's",
            helpCenter: 'Help Center',
            accountActivities: 'Account Activities'
          }
        },
        tr: {
          common: {
            english: '??ngilizce',
            turkish: 'T??rk??e',
            signIn: 'Giri?? Yap',
            signUp: 'Kay??t Ol',
            aboutUs: 'Hakk??m??zda',
            auction: 'Auction',
            subscribe: 'Subscribe',
            news: 'News',
            map: 'Map',
            create: 'Create',
            save: 'Kaydet',
            send: 'Send',
            market: 'Market',
            pres: 'Pres',
            play: 'Play',
            termsOfUse: 'Terms of Use',
            faq: 'Yard??m & Destek',
            faqCapital: 'Yard??m & Destek',
            onePager: 'One Pager',
            whitePager: 'White Paper',
            forYou: 'For You',
            alreadyHaveAnAccount: 'Zaten hesab??n??z var m???',
            oneAccountTwoPlatforms: 'Bir Hesap ??ki Platform',
            socialMedia: 'Sosyal Medya',
            instagram: 'Type the Instagram',
            facebook: 'Type the Facebook',
            twitter: 'Type the Twitter'
          },
          login: {
            notARobot: "Ben robot de??ilim",
            enterCode: "Do??rulama kodunu giriniz",
            verificationCode: "Do??rulama Kodunu Giriniz",
            forgotPassword: "??ifremi unuttum",
            sendCode: "Do??rulama kodu g??nder",
            reSendCode: "Kodu Tekrar G??nder",
            email: "E-Posta",
            password: "??ifre",
            confirmPassword: "??ifreyi tekrarla",
            firstname: "Ad??n??z",
            surname: "Soyad??n??z",
            displayName: "G??r??nen Ad??n??z",
            userName: "Kullan??c?? Ad??n??z",
            phone: "Telefon",
            oldEnough: "En az 18 ya????nda oldu??umu beyan ederim",
            termsOfService: "Kullan??m s??zle??mesini",
            readAndAgree: "okudum ve onayl??yorum",
            readAndAgreeCapital: "Okudum ve Onayl??yorum",
            readAndAgreeNews: "Ticari reklam ve duyurulardan haber almak istiyorum",
            readAndAgreeClick: "Kaydol'a t??klayarak, ICRYPEX NFT H??k??m ve Ko??ullar??n?? kabul etti??imi ve Gizlilik Bildirimini okudu??umu onayl??yorum.",
            sendAgain: "Tekrar G??nder",
            resetPassword: "??ifremi S??f??rla",
            hasResetPassword: "Parolan??z S??f??rlanm????t??r.",
            sentNewPassword: "Yeni parolan??z SMS olarak g??nderilmi??tir.",
            dontHaveAnAccountYet: 'Hen??z bir hesab??n??z yok mu?',
            userName:'Kullan??c?? Ad??n??z',
          },
          form: {
            isRequired: "Bu alan?? doldurmal??s??n??z",
            shouldBeMin: "En az {{value}} olabilir",
            shouldBeMax: "En ??ok {{value}} olabilir",
            shouldBeMinLength: "En az {{value}} hane olmal??",
            shouldBeMaxLength: "En fazla {{value}} hane olmal??",
            passwordNotMatch: "??ifreler e??le??miyor",
          },
          profile:{
            cryptoAssets: "Kripto Varl??klar"
          },
          menu: {
            marketplace: 'Marketplace',
            myNfts: "My NFT's",
            helpCenter: 'Help Center',
            accountActivities: 'Hesap Hareketleri'
          }
        },
      },
      supportedLngs: SUPPORTED_LANGUAGES,
      lng: initialLang,
      fallbackLng: "en",
    });

    resolve();
  });
};

export default init;
