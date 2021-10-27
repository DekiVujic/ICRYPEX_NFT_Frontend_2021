/* Translation */
const translateObject = {

    'tr': {
        'LPRegisterFirstNameAlert':'En Az 2 Karakter',
        'LPRegisterLastNameAlert':'En Az 2 Karakter',
        'LPRegisterIdentityAlert':'Hatalı',
        'LPRegisterHesCodeAlert':'Hatalı',
        'LPRegisterSmsCodeAlert':'6 Karakter',
        'LPRegisterPhoneAlert':'Hatalı Telefon',
        'LPRegisterEmailAlert':'Hatalı E-Posta',
        'LPRegisterPleaseChoose':'Lütfen Seçiniz',
        'LPRegisterDateSelectAlert':'Tarih Seçiniz',
        'LPRegisterUseTermCheck':'İşaretle',
        'LPRegisterPasswordAlert':'En Az 8 Karakter',
        'LPRegisterRePasswordAlert':'Şifreler Uyuşmuyor',
    },
    'en':{
        'LPRegisterFirstNameAlert':'En Az 2 Karakter',
        'LPRegisterLastNameAlert':'En Az 2 Karakter',
        'LPRegisterIdentityAlert':'Hatalı',
        'LPRegisterHesCodeAlert':'Hatalı',
        'LPRegisterSmsCodeAlert':'6 Karakter',
        'LPRegisterPhoneAlert':'Hatalı Telefon',
        'LPRegisterEmailAlert':'Hatalı E-Posta',
        'LPRegisterPleaseChoose':'Lütfen Seçiniz',
        'LPRegisterDateSelectAlert':'Tarih Seçiniz',
        'LPRegisterUseTermCheck':'İşaretle',
        'LPRegisterPasswordAlert':'En Az 8 Karakter',
        'LPRegisterRePasswordAlert':'Şifreler Uyuşmuyor',
    }
};

class Translation {
    static translate(language, translationKey){
        if(translateObject.hasOwnProperty(language)){

            if(translateObject[language].hasOwnProperty(translationKey)){
                return translateObject[language][translationKey];
            }
            return "";
        }
        return "";
    }
}
/* Translation */

/* LP Register Form */
class LPRegisterForm {

    constructor(){}

    sendLPRegisterForm(){}

    setLPRegisterFormErrorMessages(inputIdSelector, inputErrorMessage){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
    }
    setLPRegisterFormErrorInput(inputIdSelector){
        let ErrorInputClass = document.getElementById(inputIdSelector);
    }
    setLPRegisterFormErrorIcon(inputIdSelector, inputAddErrorIcon, inputRemoveErrorIcon){
        let ErrorIconClass = document.getElementById(inputIdSelector);
        ErrorIconClass.classList.add(inputAddErrorIcon);
        ErrorIconClass.classList.remove(inputRemoveErrorIcon);
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let phonePatternGsm = /^\(5\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // GSM Phone Pattern
        let phonePatternAll = /^\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // ALL Phone Pattern
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);

        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length < 2){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterFirstNameAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterLastNameAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputIdentityProcess":
                if(val.length < 11){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterIdentityAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputHesCodeProcess":
                if(val.length < 12){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterHesCodeAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSmsCodeProcess":
                if(val.length < 6){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterSmsCodeAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.replace(/\s/g, "").length < 11){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPhoneAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneTurProcess":

                var selectCountryCodeVal =  document.getElementsByClassName('jsCountryCode')[0].value === "90" ? 10 : 6;

                if(val.replace(/\s/g, "").length < selectCountryCodeVal){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPhoneAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterEmailAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "selectPleaseChoose":
                if(val !== "-1"){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPleaseChoose'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "selectBirthDateMulti":
                if(val !== "-1"){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterDateSelectAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPasswordProcess":
                if(val.length < 8){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPasswordAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector,"");
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check", "error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);
        let val = inputSelectorTag.value.trim();
        let checkbox = inputSelectorTag;

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterFirstNameAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterLastNameAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputIdentityProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterIdentityAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputHesCodeProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterHesCodeAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputSmsCodeProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterSmsCodeAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPhoneAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPhoneTurProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPhoneAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterEmailAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "selectPleaseChoose":
                if(val === "-1"){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPleaseChoose'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr',''));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check","error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "selectBirthDateMulti":
                if(val === "-1"){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterDateSelectAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error","check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }else{
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr',''));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"check","error");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;

            case "inputPasswordProcess":
                if(val.length===0){
                    this.setLPRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','LPRegisterPasswordAlert'));
                    this.setLPRegisterFormErrorIcon(messageIconSelector,"error", "check");
                    this.setLPRegisterFormErrorInput(inputIdSelector);
                }
                break;
        }
    }
}

window.lpregisterform = new LPRegisterForm();
/* LP Register Form */

/* Loading Info */
// console.log("LP Register Form Validations Javascript Loading Successful");
/* Loading Info */