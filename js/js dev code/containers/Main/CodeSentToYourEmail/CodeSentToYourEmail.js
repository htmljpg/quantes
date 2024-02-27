import PINCode from "../../../plugins/PINCode";

const CodeSentToYourEmail = () => {
    const codeEmail = document.getElementById('codeEmail');

    new PINCode({
        elementContainer: codeEmail
    });
}

export default CodeSentToYourEmail;