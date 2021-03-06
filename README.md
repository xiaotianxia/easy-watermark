## installation
```bash
npm install easy-watermark
// or yarn add easy-watermark
```
## usage

```html
<!-- html -->
<div class="wrapper watermark">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item watermark">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item watermark">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
</div>
```

```js
// js
import { watermarkIt } from 'easy-watermark';

watermarkIt({
    el: '.watermark', // a DOM selector (for all nodes with this selector) or a DOM Object
    text: `ABCabc 123 ${new Date().toLocaleString()}`, // watermark text
    width: 300,  // image width, optional,200 default
    height: 200, // image height,optional, 200 default
    fontSize: 14, // text font size, optional,1 default
    color: 'rgba(0, 0, 0, .5)',  // text color, optional, 'rgba(0, 0, 0, .5)' default
});
```

## example
<img src="https://gitee.com/hhxiaotianxia/easy-watermark/raw/master/test/eg.png" width="400">
