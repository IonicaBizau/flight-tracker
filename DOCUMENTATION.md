## Documentation

You can see below the API reference of this module.

### `flightTracker(options)`
Starts the flight tracker instance.

#### Params

- **Object** `options`: An object containing the following fields:
 - `start` (Array): An array containing two elements:
     - `[0]` (String): The airport name.
     - `[1]` (Date): The start date.
 - `end` (Array): An array containing two elements:
     - `[0]` (String): The airport name.
     - `[1]` (Date): The end date.
 - `width` (Number): The output collumn count (default: `stream.collumns || 60`).
 - `stream` (Stream): The stream to write in the progress (default: `process.stdout`).
 - `interval` (Number): The number of milliseconds between redrawings (default: `1000`—one secondd)
 - `decimals` (Number): The number of decimals to use when displaying the percentage.

#### Return
- **EventEmitter** An EventEmitter object emitting the following events:
 - `error` (Error): The error that occured.
 - `progress` (Number): The percent value.
 - `info` (String): Progress messages.
 - `finish` (String): Emitted when the flight is finished.

