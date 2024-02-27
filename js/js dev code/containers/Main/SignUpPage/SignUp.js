import JustValidate from "just-validate";

const SignUp = () => {
    const validation = new JustValidate('#signUpForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validation
    .addField('#signUpFormUserName', [
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
    .addField('#signUpFormEmail', [
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
    .addField('#signUpFormPassword', [
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
    .addField('#signUpFormPasswordConfirmation', [
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
    .addField('#signUpFormAccept', [
        {
            rule: 'required',
            errorMessage: 'accept',
        }
      ])
    .onSuccess((event) => {
        
    })
}

export default SignUp;