# Project Catwalk

Front End Capstone repository for HackReactor RFP54's Team Helios!

This capstone project tasked Team Helios with the challenge of redesigning an outdated retail portal. The redesign implemented a new user interface, and introduced significant client experience functionality.

---

## Tech Stack and Challenges

<code><img width="15%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"></code>

### React

- In order to implement a responsive, single-page application capable of dynamically rendering with third-party API data, we utilized React Context and Hooks.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></code>

### Nodejs

- Despite being a front-end capstone that explicitly placed back-end implementation out of scope, used Nodejs to utilize Express.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"></code>

### Express

- Simplified API requests by implementing a proxy server in Express.js that adds authentication while forwarding requests to an existing RESTful API.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg"></code>

### CSS

- Aside from being the sole technology used for the aesthetic styling of this application:
  - All styling, including functional implementations like the modals and image gallery, were written solely with CSS.
  - The use of Grid made the overlay button functionality and precise placement of static assets accessible and simple.
  - Flexbox was instrumental in handling the wealth of dynamic data being delivered to the page.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg"></code>

### Jest

- Each of the 4 contributors took independent ownership over the development of each module present in the application, which introduced the need for rigorous, automated testing.
- React Testing Library kept our efforts and tests focused on the user experience while making it possible to test the vast amount of interactions and dynamic components in our application.

<code><img width="15%" src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-ar21.svg"></code>

### Webpack

- Webpack was our solution to elegantly handle our numerous static assets, implement JSX, and harness ES6 in this project.

---

## Set up Instructions

How to host this single page application on your local machine.

1. Make sure you've pulled the version you want to run (see Git Workflow)
1. Make a copy of the file `server/config/config.example.js` and rename to `config.js`
1. Assign the `API_KEY` variable to your GitHub token
1. Install dependencies

    ```bash
    npm install
    ```

1. In one terminal, build the webpack bundle

    ```bash
    npm run watch
    ```

1. In another terminal, start the server

    ```bash
    npm start
    ```

1. Visit [localhost:3000](http://localhost:3000) in the browser

---

## App Components

### [Overview](client/src/components/overview/)

![Overview component screenshot](docs/img/overview.png)

The Overview module rests at the top of the page and is responsible for delivering relevant information for a product in the catalogue. A single product can be associated to many styles, whose details and associated photos must be intuitively displayed.

It was a challenge to display this information to be viewed at a glance while also giving a prospective shopper the means to view the full details. This flexibility expressed in the business requirements made space a precious resource, so using Grid to create an image control overlay, and using CSS to create a modal to remove detailed image viewing from the page flow were vital.

### [Related Products](client/src/components/RelatedItems/)

![Related Products component screenshot](docs/img/related.png)

### [Questions & Answers](client/src/components/QandA/)

![Questions & Answers component screenshot](docs/img/qa.png)

![Questions & Answers Add Answer component screenshot](docs/img/qa-modal.png)

### [Ratings & Reviews](client/src/components/Ratings/)

![Ratings & Reviews component screenshot](docs/img/ratings.png)

View and submit reviews for the selected product.

Reviews loaded two at a time for improved initial page load performance.

Display progress bars visualizing a breakdown of the amount of each star rating received.
