// import { watermarkIt } from '../node_modules/easy-watermark/lib/easy-watermark.min.js';
import { watermarkIt } from '../lib/easy-watermark.min.js';

watermarkIt({
    el: '.watermark',
    text: `ABCabc 123 ${new Date().toLocaleString()}`,
    width: 150,
    height: 150,
    fontSize: 12
});