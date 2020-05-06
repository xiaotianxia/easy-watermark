export const watermarkIt = options => {
    const {
        el,
        text = '',
        width = 200,
        height = 200,
        color = 'rgba(0, 0, 0, .4)',
        fontSize = 12,
    } = options;
    let $wrapper = null;
    if (typeof el === 'object') {
        if (el instanceof HTMLElement) {
            $wrapper = el;
        } else if (el.hasOwnProperty('$el')) {
            $wrapper = el.$el;
        } else {
            console.error('el option should be a DOM selector or a DOM object or a Vue object.');
        }
    } else if (typeof el === 'string') {
        $wrapper = document.querySelectorAll(el);
    } else {
        console.error('el option is required.');
    }

    if (!$wrapper) { return; }

    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    const rotateAngle = Math.atan(height / width);

    canvas.style.display = 'none';
    const CanvasCtx = canvas.getContext('2d');
    const textWidth = CanvasCtx.measureText(text).width;
    const dis = Math.abs(Math.sqrt(width * width + height * height) - textWidth) / 2;
    CanvasCtx.rotate(- rotateAngle);
    CanvasCtx.font = `${parseInt(fontSize)}px Microsoft YaHei`;
    CanvasCtx.fillStyle = color;
    CanvasCtx.textBaseline = 'Middle';
    CanvasCtx.fillText(text, - Math.sin(rotateAngle) * height + dis, Math.cos(rotateAngle) * height);
    CanvasCtx.rotate(rotateAngle);
    const dataURL = canvas.toDataURL('image/png');
    document.body.removeChild(canvas);


    const originalStyle = `background-image: url(${dataURL});background-repeat: repeat;`;
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    const observers = [];
    
    for (let i = 0, length = $wrapper.length; i < length; i++) {
        let $wrapperItem = $wrapper[i];
        let originalClassNames = $wrapperItem.getAttribute('class');
        $wrapperItem.setAttribute('style', originalStyle);

        observers[i] = new MutationObserver(function () {
            if ($wrapperItem.getAttribute('style') !== originalStyle) {
                observers[i].disconnect();
                observers[i] = null;
                watermarkIt(options);
            }

            if ($wrapperItem.getAttribute('class') !== originalClassNames) {
                $wrapperItem.setAttribute('class', originalClassNames);
            }
        });

        observers[i].observe($wrapperItem.parentNode, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }
};