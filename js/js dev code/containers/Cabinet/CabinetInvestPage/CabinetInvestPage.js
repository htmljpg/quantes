import rangeSlider from 'range-slider-input';
import toggleHTMLClass from '../../../utils/toggleHTMLClass';

const CabinetInvestPage = () => {
    let plansItemsIndexAndValueSet = 0;
    const plans = document.querySelector('[data-js-plans="invest-amount"]');
    const plansItems = plans && plans.querySelectorAll('[data-js-plan]');

    const amountInTokensSliderInputSelector = document.getElementById('amountInTokensSliderInput');
    const amountInTokensSliderInputRangeSelector = document.getElementById('amountInTokensSliderInputRange');

    let amountInTokensSliderInputRange = null;
    if (amountInTokensSliderInputRangeSelector && amountInTokensSliderInput) {
        amountInTokensSliderInputRange = rangeSlider(amountInTokensSliderInputRangeSelector, {
            min: 0,
            max: 0,
            value: [0, 0],
            thumbsDisabled: [true, false],
            rangeSlideDisabled: true,
            onInput: function(valueSet) {
                console.log('valueSet123', valueSet[1]);
                
                const input = document.getElementById('amountInTokensSliderInput');
                input && ( input.value =  `${valueSet[1]} USD`);

                console.log('plansItemsIndexAndValueSet', plansItemsIndexAndValueSet);
                

                plansItems[plansItemsIndexAndValueSet].setAttribute('data-js-pla-value-set', JSON.stringify(amountInTokensSliderInputRange.value()));
            },
        });

        amountInTokensSliderInputSelector.addEventListener('keyup', (event) => {
            let isNum = event.target.value && /^\d+$/.test(event.target.value);

            if (!isNum) {
                event.target.value = '';
                return;
            }
        });
    }

    const setData = (plansItem) => {
        const title = plansItem.querySelector('[data-js-plan-title]');
        const titleValue = title && title.getAttribute('data-js-plan-title');
        const img = plansItem.querySelector('[data-js-plan-img]');
        const imgValue = img && img.getAttribute('data-js-plan-img');
        const tokenName = plansItem.querySelector('[data-js-plan-token-name]');
        const tokenNameValue = tokenName && tokenName.getAttribute('data-js-plan-token-name');
        const max = plansItem.querySelector('[data-js-plan-max]');
        const maxValue = max && max.getAttribute('data-js-plan-max');


        const investAmout = document.querySelector('[data-js-plan-ivnest-amout]');
        

        if (investAmout && amountInTokensSliderInputRange) {
            const investAmoutTitle = investAmout.querySelector('[data-js-plan-ivnest-amout-title]');
            const investAmoutImg = investAmout.querySelector('[data-js-plan-ivnest-amout-img]');
            const investAmoutTokenName = investAmout.querySelector('[data-js-plan-ivnest-amout-token-name]');
            const investAmoutMax = investAmout.querySelector('[data-js-plan-invest-max]');

            const investAmoutTitleInputSelector = investAmout.querySelector('input[type="hidden"][name="amout-title"]');
            const investAmoutTokenNameInputSelector = investAmout.querySelector('input[type="hidden"][name="token-name"]');
            const investAmoutMaxInputSelector = investAmout.querySelector('input[type="hidden"][name="invest-max"]');

            investAmoutTitleInputSelector && ( investAmoutTitleInputSelector.value = titleValue);
            investAmoutTokenNameInputSelector && ( investAmoutTokenNameInputSelector.value = tokenNameValue);
            investAmoutTokenNameInputSelector && ( investAmoutMaxInputSelector.value = maxValue);
            
            

            investAmoutTitle && ( investAmoutTitle.textContent =  titleValue);
            investAmoutImg && ( investAmoutImg.src =  imgValue);
            investAmoutTokenName && ( investAmoutTokenName.textContent =  tokenNameValue);
            investAmoutMax && ( investAmoutMax.textContent =  maxValue);
            
            
            amountInTokensSliderInputRange.value(
                JSON.parse(
                    plansItem.getAttribute('data-js-pla-value-set')
                )
            );

            maxValue && amountInTokensSliderInputRange.max(+maxValue.replace(/\s/g, ''));
            !maxValue && amountInTokensSliderInputRange.max(0);
        }
    }

    plansItems && plansItems.length && plansItems.forEach((plansItem, index) => {

        plansItem.setAttribute('data-js-pla-value-set', '[0, 0]');

        if (index === 0) {
            toggleHTMLClass({
                element: plansItem,
                type: "add"
            });

            setData(plansItem);
        }

        plansItem.addEventListener('click', () => {
            plansItems.forEach((plansItem) => {
                toggleHTMLClass({
                    element: plansItem,
                    type: "remove"
                });
            });

            toggleHTMLClass({
                element: plansItem,
                type: "add"
            });

            plansItemsIndexAndValueSet = index;
            setData(plansItem);
        });
    });
    
    
}

export default CabinetInvestPage;