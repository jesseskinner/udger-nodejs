const tap = require('tap');
const config = require('./lib/config');

let myUa = 'PINGOMETER_BOT_(HTTPS://PINGOMETER.COM)';

let expected = {
    "userAgent": {
        "ua": {
            "string": "PINGOMETER_BOT_(HTTPS://PINGOMETER.COM)",
            "class": "crawler",
            "name": "PINGOMETER",
            "family": {
                "code": "pingometer",
                "vendor": "pingometer_llc"
            }
        },
        "crawler": {
            "lastSeen": "2017-01-06 18:49:59",
            "category": "site_monitor"
        },
        "device": {
            "class": "unrecognized"
        }
    }
};


tap.test(
    'User Agent: PingoMeter should be recognized',
    (t) => {
        config.udgerParser.set({ua:myUa});
        let ret = config.udgerParser.parse({json:true});
        t.same(ret, expected);
        t.end();
    }
);

