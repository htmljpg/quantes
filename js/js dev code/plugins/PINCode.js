function PINCode(options) {
    const {
        elementContainer
    } = options || {}

    this.elementContainer = elementContainer;

    this.elementContainer && this.elementContainer.addEventListener('keyup', function (event) {
        let target = event.srcElement;
        let isNum = target.value && /^\d+$/.test(target.value);

        if (!isNum) {
            target.value = '';
            return;
        }
        
        
        let maxLength = parseInt(target.attributes["maxlength"].value, 10);
        let myLength = target.value.length;

        if (myLength >= maxLength) {
            let next = target;
            
            const nextElement = (
                next.parentElement && next.parentElement.parentElement &&
                next.parentElement.parentElement.nextElementSibling &&
                next.parentElement.parentElement.nextElementSibling.querySelector('input')
            );
            
            while (next = nextElement) {
                if (next == null) break;
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    break;
                }
            }
        }

        if (myLength === 0) {
            let next = target;
            while (next = next.previousElementSibling) {
                if (next == null) break;
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    break;
                }
            }
        }
    }, false);

    this.elementContainer && this.elementContainer.addEventListener('keydown', function (event) {
        let target = event.srcElement;
        target.value = "";
    }, false);
}

export default PINCode;