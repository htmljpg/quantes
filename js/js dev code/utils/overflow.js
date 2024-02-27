const getScrollbarWidth = () => {
    let div = document.createElement('div');

    div.style.visibility = 'hidden';
    div.style.position = 'absolute';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

const overflowHidden = (options) => {

    const {
        element = null
    } = options || {};

    let block = element || document.body;

    if (block && block.tagName.toLowerCase() === 'body') {
        console.log('block', block);
        
    }

    block.style.overflow = 'hidden';
    block.style.marginRight = getScrollbarWidth() + 'px';
    document.querySelectorAll('[data-js-body-overflow-x-indent]').forEach((item) => item.style.paddingRight = getScrollbarWidth() + 'px');
}

const overflowVisible = (options) => {

    const {
        element = null
    } = options || {};

    let block = element || document.body;

    const handler = () => {
        block.style.overflow = 'initial';
        block.style.marginRight = 0;
        document.querySelectorAll('[data-js-body-overflow-x-indent]').forEach((item) => item.style.paddingRight = 0);
    }

    if (block.tagName === 'BODY') {
        let check = false;

        document.querySelectorAll('.modal').forEach((item) => {
            if (item.classList.contains('show')) {
                check = true;
                return;
            }
        });

        !check && handler();

        return;
    }

    handler();
}

export {
    getScrollbarWidth,
    overflowHidden,
    overflowVisible
}