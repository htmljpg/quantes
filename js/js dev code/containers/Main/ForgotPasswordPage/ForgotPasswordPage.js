import JustValidate from "just-validate";

const ForgotPasswordPage = () => {
    const validation = new JustValidate('#forgotPasswordForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validation
    .addField('#email', [
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
            errorMessage: 'Email or Username is invalid!',
        }
      ])
    .onSuccess((event) => {
        
    })
}

export default ForgotPasswordPage;