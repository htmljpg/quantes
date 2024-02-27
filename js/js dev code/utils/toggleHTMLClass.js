const toggleHTMLClass = ({
    element,
    onlyThisElements = [],
    type = '',
    checkHasActiveClass = false
}) => {

    let arrayElements = [];

    if (element || onlyThisElements.length) {
        const type = element && element.getAttribute('data-js-toggle-class-type') || onlyThisElements[0] && onlyThisElements[0].getAttribute('data-js-toggle-class-type');

        if (type) {
            arrayElements = document.querySelectorAll(`[data-js-toggle-class-type="${type}"]`);
        } else {
            arrayElements =
                element &&
                element.parentElement.querySelectorAll('[data-js-toggle-class]'
            );
        }
    }

    if (checkHasActiveClass && onlyThisElements.length) {
        let result = false;

        onlyThisElements = (
            onlyThisElements[0].getAttribute('data-js-toggle-class-type') &&
            document.querySelectorAll(`[data-js-toggle-class-type="${onlyThisElements[0].getAttribute('data-js-toggle-class-type')}"]`)
        ) || onlyThisElements;

        onlyThisElements.forEach((element) => {
            if (element) {
                const classes = element && element.getAttribute('data-js-toggle-class');
                const classesArray = classes && classes.split(',');
        
                if (classesArray && classesArray.length) {
                    const toggleValues = classesArray[0].split('>');
    
                    if (
                        toggleValues &&
                        toggleValues.length &&
                        (
                            element.classList.contains(toggleValues[1]) || element.hasAttribute('data-js-toggle-active')
                        )
                    ) {
                        result = true;
                    }
                }
            }
        });

        return result;
    }

    const changeClassValueElements = (classValueElements) => {
        classValueElements && classValueElements.length && classValueElements.forEach((classValueElement) => {
            const classes = classValueElement.getAttribute('data-js-toggle-class');
            const classesArray = classes && classes.split(', ');

            classesArray && classesArray.length && classesArray.forEach((classItem) => {
                const toggleValues = classItem.split('>');

                if (toggleValues.length === 2) { 

                    if (type === 'remove') {
                        if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                            classValueElement.classList.remove(toggleValues[1]);
                        } else {
                            if (classValueElement.classList.contains(toggleValues[1])) {
                                classValueElement.classList.remove(toggleValues[1]);
                                classValueElement.classList.add(toggleValues[0]);
                            }
                        }
                    }

                    if (type === 'add') {
                        if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                            classValueElement.classList.add(toggleValues[1]);
                        } else {
                            if (classValueElement.classList.contains(toggleValues[0])) {
                                classValueElement.classList.remove(toggleValues[0]);
    
                                classValueElement.classList.add(toggleValues[1]);
                            }
                        }
                    }
                }
            });
        });
    }

    changeClassValueElements(arrayElements);
}

export default toggleHTMLClass;