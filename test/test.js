import { watermarkIt } from '../node_modules/easy-watermark/lib/watermark-it.min.js';

watermarkIt({
    el: '.wrapper',
    text: `ABCabc 123 ${new Date().toLocaleString()}`,
    width: 300,
    height: 200,
    fontSize: 14
});