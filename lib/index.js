"use strict";

const EventEmitter = require("events").EventEmitter
    , fillo = require("fillo")
    ;

/**
 * flightTracker
 * Starts the flight tracker instance.
 *
 * @name flightTracker
 * @function
 * @param {Object} options An object containing the following fields:
 *
 *  - `start` (Array): An array containing two elements:
 *      - `[0]` (String): The airport name.
 *      - `[1]` (Date): The start date.
 *  - `end` (Array): An array containing two elements:
 *      - `[0]` (String): The airport name.
 *      - `[1]` (Date): The end date.
 *  - `width` (Number): The output collumn count (default: `stream.collumns || 60`).
 *  - `stream` (Stream): The stream to write in the progress (default: `process.stdout`).
 *  - `interval` (Number): The number of milliseconds between redrawings (default: `1000`—one secondd)
 *  - `decimals` (Number): The number of decimals to use when displaying the percentage.
 *
 * @returns {EventEmitter} An EventEmitter object emitting the following events:
 *
 *  - `error` (Error): The error that occured.
 *  - `progress` (Number): The percent value.
 *  - `info` (String): Progress messages.
 *  - `finish` (String): Emitted when the flight is finished.
 */
module.exports = function flightTracker (options) {
    let now = new Date();

    options.interval = options.interval || 1000;
    options.width = options.width || process.stdout.columns || 60;
    options.stream = options.stream || process.stdout;
    options.decimals = options.decimals || 2;

    let draw = complete => {
            let str = options.start.str
              , sLength = str.length
              , strPercent = ` (${complete.toFixed(options.decimals)}%)`
              , eLength = options.end.str.length + 1
              , length = options.width - sLength - eLength
              ;

            // Validate the length
            if (length < 5) {
                let err = "Insufficient columns for the output. Please increase the width.";
                process.nextTick(() => {
                    ev.emit("error", new Error(err));
                });
                return;
            }

            str += ".".repeat(length);
            str += options.end.str;
            str = str.split("");

            // c ... 100
            // ? ... length
            let index = sLength + Math.round(complete * length / 100);
            str[index] = "✈️.";
            for (let i = 0;  i < strPercent.length; ++i) {
                str[index + i + 1] = strPercent[i];
            }

            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(str.join(""));
            ev.emit("progress", complete);
        }
      , convertOptions = field => {
            if (Array.isArray(options[field])) {
                let obj = options[field] = {
                    date: options[field][1]
                  , airport: options[field][0]
                };
                obj.str = `${obj.airport} (${fillo(obj.date.getHours())}:${fillo(obj.date.getMinutes())})`;
            }
        }
      ;

    convertOptions("start");
    convertOptions("end");

    let total = options.end.date - options.start.date
      , ev = new EventEmitter()
      ;

    // Validate the dates
    if (total <= 0) {
        let err = "The end date should be after the start date.";
        process.nextTick(() => {
            ev.emit("error", new Error(err));
        });
        return ev;
    }

    if (now < options.start.date) {
        let msg = "The flight did not start yet.";
        options.stream.write(msg + "\n");
        process.nextTick(() => {
            ev.emit("info", msg);
        });
        return ev;
    }

    if (now > options.end.date) {
        let msg = "The flight ended already. I'm glad you arrived safetly to the destination. 🎉";
        options.stream.write(msg + "\n");
        process.nextTick(() => {
            ev.emit("info", msg);
        });
        return ev;
    }

    // Start displaying the output
    let interval = setInterval(() => {
        let progress = new Date() - options.start.date;
        if (progress > total) {
            clearInterval(interval);
            let msg = "You arrived at the destination.";
            options.stream.write(msg + "\n");
            return ev.emit("finish", msg);
        }
        let percent = progress * 100 / total;
        draw(percent);
    }, options.interval);

    return ev;
};
