"use strict";

const flightTracker = require("../lib");

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
