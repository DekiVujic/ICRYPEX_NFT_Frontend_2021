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
            faq: 'FAQ',
            onePager: 'One Pager',
            whitePager: 'White Paper',
            forYou: 'For You',
          },
          menu: {
            marketplace: 'Marketplace',
            myNfts: "My NFT's",
            helpCenter: 'Help Center'
          }
        },
        tr: {
          common: {
            signIn: 'Sign In',
            signUp: 'Sign Up',
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
