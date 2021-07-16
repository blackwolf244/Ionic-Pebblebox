##### Web2 Projekt

> Name: Stefan Kern

> Matrikelnummer: 00710808

> Projektname: Pebblepond 

## PebbleAPI:

A simple API allowing the functionality of the Serverstatistics pebble. It returns Information about CPU and Memory Usage.

## Requirements:

Usage of dynamic data from a sensor (probably create an own REST API?)

> For dynamic data I chose a little widget displaying the current CPU and RAM usage, the first intended use with the Twitter-API got replaced by an embed displaying the [THD Twitter Accounts](https://twitter.com/th_deggendorf?lang=en) latest post as Access to the API is not publicly available. The Second use of live-data was in the Weather Pebble displaing current weather information.

| Development Requirements                                     |      |
| ------------------------------------------------------------ | ---- |
| The programming language must be TypeScript                  | ✓    |
| The backend must use ExpressJS (version 4 or 5, with TypeScript) | ✓    |

## Installation:

> Follow the installation instructions in the wep2-project README.

## Navigation:

### Paths

#### Data "/api/data"

Is the main Path for the Data functions

##### 	Memory "/api/data/memory"

> Returns current memory usage and Total Memory of the Server system.

##### 	CPU "/api/data/cpu"

> Retruns current cpu usage in %