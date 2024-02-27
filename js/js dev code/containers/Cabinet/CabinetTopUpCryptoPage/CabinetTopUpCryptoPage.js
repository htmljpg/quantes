import JustValidate from "just-validate";
import PINCode from "../../../plugins/PINCode";

const CabinetTopUpCryptoPage = () => {
    const oldPINCode = document.getElementById('oldPINCode');
    const newPINCode = document.getElementById('newPINCode');
    const verificationCode = document.getElementById('verificationCode');

    new PINCode({
        elementContainer: oldPINCode
    });

    new PINCode({
        elementContainer: newPINCode
    });

    new PINCode({
        elementContainer: verificationCode
    });

    

    
    const validationTopUpBalanceForm = new JustValidate('#topUpBalanceForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationTopUpBalanceForm
    .addRequiredGroup(
        '#topUpBalanceFormChooseToken',
        'You should select at least one communication channel'
      )
    .addRequiredGroup(
        '#topUpBalanceFormSelectThePaymentMethod',
        'You should select at least one communication channel'
      )
    .addRequiredGroup(
        '#topUpBalanceFormSelectTheCryptoYouPay',
        'You should select at least one communication channel'
      )
    .addRequiredGroup(
        '#topUpBalanceFormChooseATokenToTopUp',
        'You should select at least one communication channel'
      )
    .onSuccess((event) => {
        console.log('success');
        
    })

    const topUpBalanceFormEnterAmountOfTopUp = document.getElementById('topUpBalanceFormEnterAmountOfTopUp');
    const topUpBalanceFormEnterAmountOfTopUpInput1 = document.getElementById('topUpBalanceFormEnterAmountOfTopUpInput1');
    const topUpBalanceFormEnterAmountOfTopUpInput2 = document.getElementById('topUpBalanceFormEnterAmountOfTopUpInput2');

    if (topUpBalanceFormEnterAmountOfTopUp) {
        validationTopUpBalanceForm
        .addField('#topUpBalanceFormEnterAmountOfTopUp', [
            {
            rule: 'minLength',
            value: 3,
            },
            {
            rule: 'maxLength',
            value: 30,
            },
            {
                rule: 'required',
                errorMessage: '',
            }
        ])
    }

    if (topUpBalanceFormEnterAmountOfTopUpInput1 && topUpBalanceFormEnterAmountOfTopUpInput2) {
        validationTopUpBalanceForm
        .addField('#topUpBalanceFormEnterAmountOfTopUpInput1', [
            {
              rule: 'minLength',
              value: 3,
            },
            {
              rule: 'maxLength',
              value: 30,
            },
            {
                rule: 'required',
                errorMessage: '',
              }
          ])
            .addField('#topUpBalanceFormEnterAmountOfTopUpInput2', [
            {
              rule: 'minLength',
              value: 3,
            },
            {
              rule: 'maxLength',
              value: 30,
            },
            {
                rule: 'required',
                errorMessage: '',
            }
          ])
    }
}

export default CabinetTopUpCryptoPage;