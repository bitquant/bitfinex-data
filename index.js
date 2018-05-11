'use strict';

const request = require('request-promise-native').defaults({timeout: 9999});

var getTicker = async (symbol) => {

    const options = {
        uri: `https://api.bitfinex.com/v1/pubticker/${symbol}`,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const responseData = JSON.parse(responseBody);

    let { bid, ask, last_price } = responseData;

    return { bid, ask, last: last_price };
};

exports.getTicker = getTicker;
