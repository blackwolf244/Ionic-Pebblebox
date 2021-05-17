##### Web2 Projekt

Name: Stefan Kern

Matrikelnummer: 00710808

Projektname: Pebblepond 

## PebblePond:

A simple Application displaying a Dashboard that presents Information of open API's like [OpenMensa](https://openmensa.org/c/198) with the inclusion of Weather and Maps via [OpenWeatherMap](https://openweathermap.org/) and [OpenStreetMap](https://www.openstreetmap.org/) respectively.

Interactions therefor will be mainly based upon voting Systems for OpenMensa and new ideas using the, to be created, PebblePond API.

So why Pebbles? Basically it should be easily expandable. just throw in your Ideas on what to add next, throw your Pebble into this wonderful information Pond, and vote on which Pebble should be worked on next!

## Requirements:

Client-Server-Application with Front- and Backend:

> The Frontend will be based upon a Dashboard that allows interactions with different API's, while using a self defined API to determine weekly Dinner votes based upon the openmensa.org API and allow Voting for the next Pebble Idea.

Input of form-data in the frontend

> Forms will be apparent at several locations. For location input, OpenMensa-votes, Pebble Idea creation and voting, and maybe even a simple open forum.

Usage of a REST API (static like openmensa.org)

> Open-Mensa is going to get used to determine the possible Upvotes or Downvotes on the current menu.

Usage of dynamic data from a sensor (probably create an own REST API?)

> For dynamic data I'll choose a little twitter widget displaying the current follower stream data, latest post and it's likes/retweets based upon the [THD Twitter Account](https://twitter.com/th_deggendorf?lang=en).

Usage of OpenStreetMap

> As I'm using OpenWeatherMap and OpenMensa the inclusion of OpenStreetMap is used to display locations for both of them and maybe even for some extra features later on.

| Development Requirements                                     |      |
| ------------------------------------------------------------ | ---- |
| The programming language must be TypeScript                  |      |
| The frontend must use Vue3 with routing                      |      |
| Must follow the Corporate Identity of THD/DIT                |      |
| Usable on mobile phones (Android, IOS) and PC                |      |
| The backend must use ExpressJS (version 4 or 5, with TypeScript) |      |
| The frontend must use Bootstrap with SASS                    |      |

## Installation:

1. download the source from the master Tree

2. install npm packages and start the server.

   ```shell
   npm i
   npm run serve
   ```

## Navigation:

Root Page is assigned to a Info Page that should show the Applications use.

>  Currently to get to the App navigate to the "/app" path.

