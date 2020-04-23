```bash
npm install easy-watermark
```

```js
import { watermarkIt } from 'easy-watermark';

watermarkIt({
    el: '.wrapper', // a DOM selector or a DOM Object
    text: `ABCabc 123 ${new Date().toLocaleString()}`, // text
    width: 300,  // image width, 200 defaulted
    height: 200, // image height, 200 defaulted
    fontSize: 14, // text font size, 1 defaulted
    color: 'rgba(0, 0, 0, .5)',  // text color  'rgba(0, 0, 0, .5)' defaulted
});
```

图示：
