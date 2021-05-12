##### Web2 Projekt
## PebblePond:

A simple Application displaying a Dashboard that presents Information of open API's like [OpenMensa](https://openmensa.org/c/198) with the inclusion of Weather and Maps via [OpenWeatherMap](https://openweathermap.org/) and [OpenStreetMap](https://www.openstreetmap.org/) respectively.

Interactions therefor will be mainly based upon Voting Systems for OpenMensa and the Pebble API on it's own.

So why Pebbles? Basically it should be easily expandable. just throw in your Ideas on what to add next, throw your Pebble into this wonderful information Pond, and vote on which Pebble should be worked on next!

## Requirements:

Client-Server-Application with Front- and Backend:

> The Frontend will be based upon a Dashboard that allows interactions with different API's, while using a self defined API to determine weekly Dinner votes based upon the openmensa.org API and allow Voting for the next Pebble Idea.

Input of form-data in the frontend

> Forms will be Apparent at several Locations. For Location Input, Dinner-votes, Pebble Creation and Voting and maybe even a simple open Forum.

Usage of a REST API (static like openmensa.org)

> Open-Mensa is going to get used to determine the Possible Upvotes or Downvotes on the current Menu.

Usage of dynamic data from a sensor (probably create an own REST API?)

> For dynamic Data I'll choose a little Twitter Widget displaying the current Follower Stream data, latest Post and it's likes/retweets of the [THD Twitter Account](https://twitter.com/th_deggendorf?lang=en).

Usage of OpenStreetMap

> As I'm using OpenWeatherMap and OpenMensa the inclusion of OpenStreetMap is used to display Locations for both of them.

| Programming Requirements                                     |      |
| ------------------------------------------------------------ | ---- |
| The programming language must be TypeScript                  |      |
| The frontend must use Vue3 with routing                      |      |
| Must follow the Corporate Identity of THD/DIT                |      |
| Usable on mobile phones (Android, IOS) and PC                |      |
| The backend must use ExpressJS (version 4 or 5, with TypeScript) |      |
| The frontend must use Bootstrap with SASS                    |      |

## Installation:



