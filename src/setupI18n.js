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
            alreadyHaveAnAccount : 'Already have an account',
            oneAccountTwoPlatforms :'One Account Two Platforms',
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
              readAndAgreeClick: "By clicking Sign Up, I hereby acknowledge that I agree to the ICRYPEX NFT Terms and Conditions and I’ve read the Privacy Notice.",
              readAndAgreeCapital: "Read and Agree",
              sendAgain: "Send Again",
              resetPassword: "Reset My Password",
              hasResetPassword: "Your Password Has Been Reset",
              sentNewPassword: "Your new password has been sent via SMS.",
              dontHaveAnAccountYet :'Don’t have an account yet?',
            },
            form: {
              isRequired: "This field is required",
              shouldBeMin: "Should be at least {{value}}",
              shouldBeMax: "Should be at most {{value}}",
              shouldBeMinLength: "Should be at least {{value}} characters",
              shouldBeMaxLength: "Should be at most {{value}} characters",
              passwordNotMatch: "Passwords do not match",
            },

          },
          menu: {
            marketplace: 'Marketplace',
            myNfts: "My NFT's",
            helpCenter: 'Help Center'
          }
        },
        tr: {
          common: {
            english: 'İngilizce',
            turkish: 'Türkçe',
            signIn: 'Giriş Yap',
            signUp: 'Kayıt Ol',
            aboutUs: 'Hakkımızda',
            auction: 'Auction',
            subscribe: 'Subscribe',
            news: 'News',
            map: 'Map',
            create: 'Create',
            send: 'Send',
            market: 'Market',
            pres: 'Pres',
            play: 'Play',
            termsOfUse: 'Terms of Use',
            faq: 'Yardım & Destek',
            faqCapital: 'Yardım & Destek',
            onePager: 'One Pager',
            whitePager: 'White Paper',
            forYou: 'For You',
            alreadyHaveAnAccount : 'Zaten hesabınız var mı',
            oneAccountTwoPlatforms :'Bir Hesap İki Platform'
          },
          login: {
            notARobot: "Ben robot değilim",
            enterCode: "Doğrulama kodunu giriniz",
            verificationCode: "Doğrulama Kodunu Giriniz",
            forgotPassword: "Şifremi unuttum",
            sendCode: "Doğrulama kodu gönder",
            reSendCode: "Kodu Tekrar Gönder",
            email: "E-Posta",
            password: "Şifre",
            confirmPassword: "Şifreyi tekrarla",
            firstname: "Adınız",
            surname: "Soyadınız",
            displayName: "Görünen Adınız",
            userName: "Kullanıcı Adınız",
            phone: "Telefon",
            oldEnough: "En az 18 yaşında olduğumu beyan ederim",
            termsOfService: "Kullanım sözleşmesini",
            readAndAgree: "okudum ve onaylıyorum",
            readAndAgreeCapital: "Okudum ve Onaylıyorum",
            readAndAgreeClick: "Kaydol'a tıklayarak, ICRYPEX NFT Hüküm ve Koşullarını kabul ettiğimi ve Gizlilik Bildirimini okuduğumu onaylıyorum.",
            sendAgain: "Tekrar Gönder",
            resetPassword: "Şifremi Sıfırla",
            hasResetPassword: "Parolanız Sıfırlanmıştır.",
            sentNewPassword: "Yeni parolanız SMS olarak gönderilmiştir.",
            dontHaveAnAccountYet :'Henüz bir hesabınız yok mu?',
          },
          form: {
            isRequired: "Bu alanı doldurmalısınız",
            shouldBeMin: "En az {{value}} olabilir",
            shouldBeMax: "En çok {{value}} olabilir",
            shouldBeMinLength: "En az {{value}} hane olmalı",
            shouldBeMaxLength: "En fazla {{value}} hane olmalı",
            passwordNotMatch: "Şifreler eşleşmiyor",
          },
          menu: {
            marketplace: 'Marketplace',
            myNfts: "My NFT's",
            helpCenter: 'Help Center'
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
