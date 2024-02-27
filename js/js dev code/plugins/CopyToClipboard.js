import copyToClipboard from "../utils/copyToClipboard";

function CopyToClipboard(options) {
    const {
        elementById
    } = options || {}

    this.elementById = elementById;
    this.element = document.getElementById(this.elementById);

    this.element && this.element.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.currentTarget;

        const text = target.getAttribute('data-js-copy-to-clipboard');
        copyToClipboard(text);
        target.textContent = 'Сopied';

        setTimeout(() => {
            target.textContent = 'Copy';
        }, 2000);
    });
}

export default CopyToClipboard;