<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# `$ flight-tracker`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/flight-tracker.svg)](https://www.npmjs.com/package/flight-tracker) [![Downloads](https://img.shields.io/npm/dt/flight-tracker.svg)](https://www.npmjs.com/package/flight-tracker) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> A flight tracker in your command line.






Coded in the airport and on the plane. :airplane:






[![flight-tracker](http://i.imgur.com/IBFNbJA.png)](#)







## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
# Using npm
npm install --global flight-tracker

# Using yarn
yarn global add flight-tracker
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
  -d, --decimals <count>  How many decimals to display.
  -i, --interval <ms>     The interval value in milliseconds.
  -h, --help              Displays this help.
  -v, --version           Displays version information.

Examples:
  $ flight-tracker '2016-05-26 18:05' '2016-05-26 21:15' 'Cluj-Napoca' 'Luton, London' -i 50 -d 20

Documentation can be found at https://github.com/IonicaBizau/flight-tracker#readme.
```













## :clipboard: Example



Here is an example how to use this package as library. To install it locally, as library, you can use `npm install flight-tracker` (or `yarn add flight-tracker`):



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












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.












## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
























## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
