# bitfinex-data
Real-time cryptocurrency quotes and data from Bitfinex

## Install
```
$ npm install bitfinex-data --save
```

## Usage
```javascript

var bitfinex = require("bitfinex-data");

(async () => {
    try {
        let data = await bitfinex.getTicker("BTCUSD");
        console.log(JSON.stringify(data, null, 2));
    }
    catch (ex) {
        console.log('caught error:' + ex.stack);
    }
})();

/*
{
  "bid": "8567.2",
  "ask": "8573.1",
  "last": "8571.8"
}
*/

```

## License
MIT license; see [LICENSE](./LICENSE).
