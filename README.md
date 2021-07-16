##### Web2 Projekt

> Name: Stefan Kern

> Matrikelnummer: 00710808

> Projektname: Pebblepond 

> GitLab Page: https://mygit.th-deg.de/sk20808/web2-projekt

> DevSystem: Windows 10

## PebbleBox:

A simple Application displaying a Dashboard that presents Information of open API's like [OpenMensa](https://openmensa.org/c/198) with the inclusion of Weather and Maps via [OpenWeatherMap](https://openweathermap.org/) and [OpenStreetMap](https://www.openstreetmap.org/) respectively.

Interactions therefor will be mainly based upon voting Systems for new Ideas using the PebblePond API.

So why Pebbles? Basically it should be easily expandable. just throw in your Idea on what to add next, throw your Pebble into this wonderful information Pond, and vote on which Pebble should be worked on next! And right after find the Pebbles you enjoy and share the Love.

## Requirements:

Client-Server-Application with Front- and Backend:

> The Frontend will be based upon a Dashboard that allows interactions with different API's, while using a self defined API to determine Data of the Host PC like CPU and RAM Usage.

Input of form-data in the frontend

> Forms are apparent at several locations. For Pebble Idea creation and in the Contact Page.

Usage of a REST API (static like openmensa.org)

> Open-Mensa is going to get used to determine the food Items for the upcomming 5 days in which the mensa is opened.

Usage of dynamic data from a sensor (probably create an own REST API?)

> For dynamic data I chose a little widget displaying the current CPU and RAM usage, the first intended use with the Twitter-API got replaced by an embed displaying the [THD Twitter Accounts](https://twitter.com/th_deggendorf?lang=en) latest post as Access to the API is not publicly available. The Second use of live-data was in the Weather Pebble displaing current weather information.

Usage of OpenStreetMap

> As I'm using OpenWeatherMap and OpenMensa the inclusion of OpenStreetMap is used to display locations for both of them and maybe even for some extra features later on.

Must follow the Corporate Identity of THD/DIT

> Inspired by the bocky apperance in the THD-Website the layout of Pebblebox-Dashboard shows similarities while allowing clear readability by the usage of it's dedicated fonts and colours. Icons even if not being the same (unable to find source) are represented in a clear and simple Style jsut like the ones on the THD Website. 

| Development Requirements                                     |      |
| ------------------------------------------------------------ | ---- |
| The programming language must be TypeScript                  | ✓    |
| The frontend must use Vue3 with routing                      | ✓    |
| Must follow the Corporate Identity of THD/DIT                | ✓    |
| Usable on mobile phones (Android, IOS) and PC                | ✓    |
| The backend must use ExpressJS (version 4 or 5, with TypeScript) | ✓    |
| The frontend must use Bootstrap with SASS or **Ionic**       | ✓    |

## Installation:

1. Clone the source of the repository into a Folder.

   ```sh
   git clone https://mygit.th-deg.de/sk20808/web2-projekt.git
   ```

2. install npm packages for the App and the API.

   ```shell
   cd web2-projekt/ && npm i
   cd PebbleAPI/ && npm i
   ```

3. start the API-Server in it's PebbleAPI/ folder.

   ```sh
   npm run dev
   ```

4. start the App in the root folder.

   ```sh
   ionic serve
   ```

## Networking:

The Server uses the Localhost Port Number :**1337**

The App uses the Localhost Port Number :**8100**

In case errors persist change the Ports to open ones in following files:

#### Server 

Change the properties in the .env file in PebbleAPI/ to suit your environment.

Then change the API calls in the App.

##### cpu

***/src/components/cpu.vue***

​	In the setup() function change the Portnumber to the before selected one:

​	here as an Example with Port 3333:

```tsx
setup() {
    const urlBase = "http://localhost:3333/api/data/cpu";
```

##### memory

​	***/src/components/memory.vue***

​	In the setup() function change the Portnumber to the before selected one:

​	here as an Example with Port 3333:

```tsx
setup() {
    const urlBase = "http://localhost:3333/api/data/memory";
```

#### App

instead of calling ionic serve to start the App:

here with Example of Port:6000:

```sh
ionic serve -p 6000
```

## Navigation:

#### Root Page "/" redirects to "/thd"

Assigned to the THD Favourites Page in the Dashboard.

>  The THD Favourites Page presents an Overview over the most liked Pebbles or Widgets.

On the left a SideMenu can be found which is self collapsing while on mobile. 

It shows the different Dashboards and the Pebble Request and Contact Page.

#### Dashboards

##### Pebble Pond

A Dashboard representing all the Modules created for the Plattform.

##### Social Media

A Dashboard representing Social Media and Chat Modules.

#### Pebble Request Page "/pebble"

> The Pebble Request Page combines the Pebble Voting System with a Form to Create Ideas for new Pebbles.

Embedded are two Pages which are swapped via the buttons underneath the header. Data of the Voting System and the Idea Collection System is saved in a Firestore on Firebase.

#### Contact "/contact"

A simple contact formular saving the entered Email and Message on a dedicated Firestore on Firebase. Later on it could get connected to a email server to allow an actual way of contact.
