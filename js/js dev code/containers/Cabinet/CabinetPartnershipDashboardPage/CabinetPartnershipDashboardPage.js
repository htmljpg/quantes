import JustValidate from "just-validate";
import CopyToClipboard from "../../../plugins/CopyToClipboard";

const CabinetPartnershipDashboardPage = () => {
    
    const validationsendMessageModalForm = new JustValidate('#sendMessageModalForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationsendMessageModalForm
    .addField('#sendMessageModalFormSubject', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .addField('#sendMessageModalFormMessage', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .onSuccess((event) => {
        
    })

    new CopyToClipboard({
        elementById: 'copyPartnerLink'
    });
    
}

export default CabinetPartnershipDashboardPage;