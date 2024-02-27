import toggleHTMLClass from "./toggleHTMLClass";

const toggle = () => {
    const togglesItemContainers = document.querySelectorAll('[data-js-toggle]');

    togglesItemContainers.forEach((togglesItemContainer) => {
        
        const toggleButtons = togglesItemContainer.querySelectorAll('[data-js-toggle-button]');

        toggleButtons.forEach((toggleButton) => {
            toggleButton.addEventListener('click', (event) => {
                const _this = event.currentTarget;

                const parent = _this.closest('[data-js-toggle-button-parent]');
                const block = parent && parent.querySelector('[data-js-toggle-block]');
                const toggleClassElements = parent && parent.querySelectorAll('[data-js-toggle-class]');

                if (!block.classList.contains('active')) {

                    block.classList.add('active');
                    block.style.height = 'auto';
                
                    var height = block.clientHeight + 'px';
                
                    block.style.height = '0px';

                    
                    toggleClassElements.forEach((toggleClassElement) => {
                        toggleHTMLClass({
                            element: toggleClassElement,
                            type: 'add'
                        });
                    });
                
                    setTimeout(function () {
                        block.style.height = height;
                    }, 0);
                    
                    } else {
                    
                    block.style.height = '0px';

                    
                    toggleClassElements.forEach((toggleClassElement) => {
                        toggleHTMLClass({
                            element: toggleClassElement,
                            type: 'remove'
                        });
                    });
                
                    block.addEventListener('transitionend', function () {
                        block.classList.remove('active');
                    }, {
                        once: true
                    });
                    
                    }
            });
        });
    });
}

export default toggle;