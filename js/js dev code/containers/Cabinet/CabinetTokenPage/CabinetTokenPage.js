import JustValidate from "just-validate";
import Tabs from "../../../plugins/Tabs";

const CabinetTokenPage = () => {
    const tab = new Tabs({
        tabSelectorById: 'tokenTabs'
    });
    
    const validationBuyTokensForm = new JustValidate('#buyTokensForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationBuyTokensForm
    .addField('#buyTokensFormAmountInUSD', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .addField('#buyTokensFormAmountInUSDAmountOfTokens', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .onSuccess((event) => {
        
    })
    
    const validationSellTokensForm = new JustValidate('#sellTokensForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationSellTokensForm
    .addField('#sellTokensFormAmountInUSD', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .addField('#sellTokensFormAmountInUSDAmountOfTokens', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .onSuccess((event) => {
        
    })
    
    const validationExchangeForm = new JustValidate('#exchangeForm', {
        errorFieldCssClass: 'is-invalid',
    });

    validationExchangeForm
    .addField('#exchangeFormAmountInUSD', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .addField('#exchangeFormAmountInUSDAmountOfTokens', [
        {
            rule: 'required',
            errorMessage: '',
        }
      ])
    .onSuccess((event) => {
        
    })
}

export default CabinetTokenPage;