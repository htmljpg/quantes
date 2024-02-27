import JustValidate from "just-validate";
import PINCode from "../../../plugins/PINCode";

const CabinetSettingsPage = () => {
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

    
    const validationYourPasswordForm = new JustValidate('#yourPasswordForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationYourPasswordForm
    .addField('#yourPasswordFormPassword', [
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
    .addField('#yourPasswordFormNewPassword', [
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
    .addField('#yourPasswordFormReEnterNewPassword', [
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
    .onSuccess((event) => {
        
    })

    
    const validationYourForm = new JustValidate('#yourEmailForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationYourForm
    .addField('#yourEmailFormNewEmail', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
            rule: 'email',
            errorMessage: '',
        }
      ])
    .onSuccess((event) => {
        
    })

    
    const PINCodeFormValidation = new JustValidate('#PINCodeForm', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
            display: 'none',
          },
    });

    PINCodeFormValidation.form
                            .querySelectorAll('[data-pincode-control]')
                            .forEach((item) => {
                                PINCodeFormValidation
                                .addField(item, [
                                    {
                                      rule: 'minLength',
                                      value: 1,
                                    },
                                    {
                                      rule: 'maxLength',
                                      value: 1,
                                    },
                                    {
                                        rule: 'required',
                                        errorMessage: '',
                                    }
                                  ])
                            });
    PINCodeFormValidation
    .onSuccess((event) => {
        
    })

    
    const validationVerificationCodeForm = new JustValidate('#verificationCodeForm', {
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
            display: 'none',
          },
    });
    
    

    validationVerificationCodeForm.form
                            .querySelectorAll('[data-pincode-control]')
                            .forEach((item) => {
                                validationVerificationCodeForm
                                .addField(item, [
                                    {
                                      rule: 'minLength',
                                      value: 1,
                                    },
                                    {
                                      rule: 'maxLength',
                                      value: 1,
                                    },
                                    {
                                        rule: 'required',
                                        errorMessage: '',
                                    }
                                  ])
                            });
    validationVerificationCodeForm
    .onSuccess((event) => {
        
    })

    
    const validationAddWalletAddressForm = new JustValidate('#addWalletAddressForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationAddWalletAddressForm
        .addField('#addWalletAddressFormEnterAddress', [
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
        '#addWalletAddressFormChooseToken',
        'You should select at least one communication channel'
      )
    .onSuccess((event) => {
        console.log('success');
        
    })
}

export default CabinetSettingsPage;