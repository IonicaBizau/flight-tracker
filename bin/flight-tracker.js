#!/usr/bin/env node

const flightTracker = require("..")
    , Tilda = require("tilda")
    ;

new Tilda(`${__dirname}/../package.json`, {
    args: [
        {
            name: "startDate"
          , desc: "The start date."
        }
      , {
            name: "endDate"
          , desc: "The end date."
        }
      , {
            name: "start"
          , desc: "The start location."
        }
      , {
            name: "end"
          , desc: "The end location."
        }
    ]
  , options: [
        {
            name: "ms"
          , opts: ["i", "interval"]
          , type: Number
          , desc: "The interval value in milliseconds."
        }
      , {
            name: "count"
          , opts: ["d", "decimals"]
          , type: Number
          , desc: "How many decimals to display."
        }
    ]
  , examples: [
        "flight-tracker '2016-05-26 18:05' '2016-05-26 21:15' 'Cluj-Napoca' 'Luton, London' -i 50 -d 20"
    ]
}).main(a => {
    flightTracker({
        start: [a.args.start, new Date(a.args.startDate)]
      , end: [a.args.end, new Date(a.args.endDate)]
      , decimals: a.options.decimals.value
      , interval: a.options.interval.value
    }).on("error", err => {
        console.error(err);
        process.exit(1);
    });
});
