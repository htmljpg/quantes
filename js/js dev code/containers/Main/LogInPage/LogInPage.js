import JustValidate from "just-validate";

const LogInPage = () => {
    const validation = new JustValidate('#logInForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validation
    .addField('#logInFormEmailOrUserName', [
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
    .addField('#logInFormPassword', [
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
}

export default LogInPage;