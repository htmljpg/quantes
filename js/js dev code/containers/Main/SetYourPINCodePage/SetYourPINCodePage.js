import PINCode from "../../../plugins/PINCode";

const SetYourPINCodePage = () => {
    const yourPINCode = document.getElementById('yourPINCode');
    const repeatYourPINCode = document.getElementById('repeatYourPINCode');

    new PINCode({
        elementContainer: yourPINCode
    });

    new PINCode({
        elementContainer: repeatYourPINCode
    });
}

export default SetYourPINCodePage;