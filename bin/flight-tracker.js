#!/usr/bin/env node

const flightTracker = require("..")
    ;

flightTracker({
    start: [process.argv[4] || "Start", new Date(process.argv[2])]
  , end: [process.argv[5] || "End.", new Date(process.argv[3])]
  , decimals: 5
  , interval: 100
});
