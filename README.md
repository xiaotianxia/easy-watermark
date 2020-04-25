## installation
```bash
npm install easy-watermark
// or yarn add easy-watermark
```
## usage

```js
import { watermarkIt } from 'easy-watermark';

watermarkIt({
    el: '.wrapper', // a DOM selector or a DOM Object
    text: `ABCabc 123 ${new Date().toLocaleString()}`, // watermark text
    width: 300,  // image width, optional,200 defaulted
    height: 200, // image height,optional, 200 defaulted
    fontSize: 14, // text font size, optional,1 defaulted
    color: 'rgba(0, 0, 0, .5)',  // text color, optional, 'rgba(0, 0, 0, .5)' defaulted
});
```

## example
![example]
(https://github.com/xiaotianxia/watermarkIt/blob/master/test/eg.png?raw=true)