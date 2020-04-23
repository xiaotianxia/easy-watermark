```bash
npm install 
```

```js
import { watermarkIt } from '../lib/watermark-it.min.js';

watermarkIt({
    el: '.wrapper',
    text: `ABCabc 123 ${new Date().toLocaleString()}`,
    width: 300,
    height: 200,
    fontSize: 14
});
```