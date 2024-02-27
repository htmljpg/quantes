import JustValidate from "just-validate";
import PINCode from "../../../plugins/PINCode";

const CabinetWithdrawPage = () => {
    const PINCodeModal = document.getElementById('PINCodeModal');

    new PINCode({
        elementContainer: PINCodeModal
    });

    

    
    const validationWithdrawForm = new JustValidate('#withdrawForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationWithdrawForm
        .addField('#withdrawFormAmountOfTokens', [
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
      .addRequiredGroup(
        '#withdrawFormChooseToken',
        'You should select at least one communication channel'
      )
      .addRequiredGroup(
        '#withdrawFormChooseAddressToWithdraw',
        'You should select at least one communication channel'
      )
    .onSuccess((event) => {
        console.log('success');
        
    })
}

export default CabinetWithdrawPage;