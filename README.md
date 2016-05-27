
[![flight-tracker](http://i.imgur.com/IBFNbJA.png)](#)

# `$ flight-tracker`

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/flight-tracker.svg)](https://www.npmjs.com/package/flight-tracker) [![Downloads](https://img.shields.io/npm/dt/flight-tracker.svg)](https://www.npmjs.com/package/flight-tracker) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A flight tracker in your command line.

Coded in the airport and on the plane. :airplane:

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g flight-tracker
```


Then, run `flight-tracker --help` and see what the CLI tool can do.


```
$ flight-tracker --help
Usage: flight-tracker <startDate> <endDate> <start> <end> [options]

A flight tracker in your command line.

Command arguments:
  <startDate>  The start date.
  <endDate>    The end date.
  <start>      The start location.
  <end>        The end location.

Options:
  -i, --interval <ms>     The interval value in milliseconds.
  -d, --decimals <count>  How many decimals to display.
  -v, --version           Displays version information.
  -h, --help              Displays this help.

Examples:
  $ flight-tracker '2016-05-26 18:05' '2016-05-26 21:15' 'Cluj-Napoca' 'Luton, London' -i 50 -d 20

Documentation can be found at https://github.com/IonicaBizau/flight-tracker#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save flight-tracker
```



```js
const flightTracker = require("flight-tracker");

// Actually, yeah, that was a real flight :D
flightTracker({
    // Where and when are you flying from?
    start: ["Cluj-Napoca", new Date(2016, 4, 26, 18, 5)]

    // Where and when are you flying to?
  , end: ["Luton, London", new Date(2016, 4, 26, 21, 15)]

    ///// The following are the defaults. You don't
    ///// have to provide them as long you are happy with them.

    // How often do you want to update the output?
  , interval: 50

    // Width of the stream
  , width: process.stdout.columns || 60

    // By default, show two decimals
  , decimals: 20

    // By default, use the standard out stream of the current process
  , stream: process.stdout
}).on("error", err => {
    console.error(err);
    process.exit(1);
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
