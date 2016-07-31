# Thing.js Air Quality Station
A Thing.js extension builds an air quality station.

## Install Extension
Add `"thingjs-air-quality-station"` extension in `"extensions"`, and setup `"modules"` parameter in the [`board.json`][board-json] file. The `"modules"` parameter is an [DustSensor][dust-sensor] object listed in `modules`.
```json
{
  "modules": {
    "dustSensor": { "module": "DustSensor", "pins": 0 }
  },
  "extensions": {
    "thingjs-air-quality-station": { "modules": "dustSensor" }
  }
}
```

## Run
Go to the directory stored the [`board.json`][board-json] file, and run the below command.
```sh
path/to/thingjs
```

[board-json]: https://github.com/evanxd/thingjs-air-quality-station/blob/master/board.json
[dust-sensor]: https://thing-js.github.io/doc/DustSensor.html
