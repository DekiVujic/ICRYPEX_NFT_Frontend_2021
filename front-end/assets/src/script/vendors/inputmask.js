
import Inputmask from "inputmask";

if(document.querySelector('.leadform')){

    let phoneInputElem = document.querySelectorAll('.phonecountryselectmask')[0];

    let phoneInputMask = new Inputmask({
        mask: '999 999 9999',
        greedy: false,
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false,
        onincomplete:  function (e) {
            let phoneZeroVal = phoneInputElem.value.substring(0, 1);
            if (phoneZeroVal === "0"){
                console.log("Show");
                return false;
            } else {
                console.log("Hide");
            }
        },
        onBeforeWrite: function (e) {
            let phoneZeroVal = phoneInputElem.value.substring(0, 1);
            if (phoneZeroVal === "0"){
                console.log("Show");
                return false;
            } else {
                console.log("Hide");
            }
        }
    });

    phoneInputMask.mask(phoneInputElem);


    document.getElementsByClassName('jsCountryCode')[0].addEventListener('change', function() {

        console.log('Secili: ', this.value);

        const choiceCountryCode = this.value;

        switch(choiceCountryCode){

            case '90':
                phoneInputElem.value = "";

                phoneInputMask = new Inputmask({
                    mask: '999 999 9999',
                    greedy: false,
                    placeholder: '',
                    showMaskOnFocus: true,
                    showMaskOnHover: false,
                    onincomplete:  function (e) {
                        let phoneZeroVal = phoneInputElem.value.substring(0, 1);
                        if (phoneZeroVal === "0"){
                            console.log("Show");
                            return false;
                        } else {
                            console.log("Hide");
                        }
                    },
                    onBeforeWrite: function (e) {
                        let phoneZeroVal = phoneInputElem.value.substring(0, 1);
                        if (phoneZeroVal === "0"){
                            console.log("Show");
                            return false;
                        } else {
                            console.log("Hide");
                        }
                    }
                });
                phoneInputMask.mask(phoneInputElem);
                break;

            default:
                phoneInputElem.value = "";
                phoneInputMask = new Inputmask({
                    mask: '999999999999999999',
                    greedy: false,
                    placeholder: '',
                    showMaskOnFocus: true,
                    showMaskOnHover: false
                });
                phoneInputMask.mask(phoneInputElem);
                break;
        }

    });

}