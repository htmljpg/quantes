import toggleHTMLClass from "../utils/toggleHTMLClass";

function Tabs(options) {
    const {
        tabSelectorById
    } = options || {};
    console.log('this.tabSelector', tabSelectorById);

    this.tabSelectorById = tabSelectorById;
    this.tabElement = document.getElementById(`${this.tabSelectorById}`);

    

    if (this.tabElement) {
        const tabButtonItems = this.tabElement.querySelectorAll('[data-js-tab-button]');
        const tabContentItems = this.tabElement.querySelectorAll('[data-js-tab-content-item]');
        

        const hideTabContent = () => {
            tabContentItems.forEach((item) => {
                item.classList.add('d-none');
                item.setAttribute('data-fade-in', '');
                item.classList.remove('d-block');
            });

            tabButtonItems.forEach((tabButtonItem) => {
                toggleHTMLClass({
                    element: tabButtonItem,
                    type: 'remove'
                });
            });
        }

        const showTabContent = (i) => {
            const tabButtonElement = tabButtonItems[i];
            const tabContentItemElement = tabContentItems[i];

            
            tabButtonElement && (
                toggleHTMLClass({
                    element: tabButtonElement,
                    type: 'add'
                })
            );
            
            tabContentItemElement && tabContentItemElement.classList.add('d-block');
            tabContentItemElement && tabContentItemElement.classList.remove('d-none');
        }

        hideTabContent();
        showTabContent(0);

        tabButtonItems.forEach((tabButtonItem, index) => {
            tabButtonItem.addEventListener('click', () => {
                hideTabContent();
                showTabContent(index);
            });
        });
    }
}

export default Tabs;