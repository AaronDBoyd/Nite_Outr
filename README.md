# Nite Outr

#### By Aaron Boyd, Kyle Miller, Todd Pangilinan, Hans Schroeder, & Michael Shamrell

#### A website which a user can plan a night out.

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS
* Node Package Manager
* ES6
* Webpack
* Babel
* ES Lint
* Yelp Fusion API
* cors-anywhere
* Google Maps API
* Bootswatch
* .env (key handling)
* git/gitHub
* Google docs

## Description:

A website that takes in a users interest in what food they want, their zipcode, how far they want to travel, how much they want to spend, and how many options they want to see. Then it takes these inputs and relays back restaurants that fit the criteria they provide. After, the results are shown there is an option to find other activities that typically come after dinner. These results will also fit the same criteria that the users fills in. 

This project showcases making calls to APIs (Yelp and Google maps) and parsing the data to provide simple data back to the user.

## Setup/Installation Requirements
* Navigate to [Yelp Fusion](https://fusion.yelp.com/) and sign up for an account, after which you can get an API key. 
* Gain access to the temporary CORS work-around by clicking [here](https://cors-anywhere.herokuapp.com/corsdemo) and click the button on the page that says "Request temporary access to the demo server". This will allow the API to run without CORS. 
* Clone or download this repository onto your desktop.
* Create a .env file with $touch .env
* _Open .env file and type in your API key like so: API_KEY=ENTERYOURKEYHERE
* In console, run $npm install
* In console, run $npm run build
* In console, run $npm run start

## Known Bugs

- Must use cors-anywhere in order to successfully make an API call. Visit [this site](https://cors-anywhere.herokuapp.com/corsdemo) to get temporary access to cors-anywhere.
- No other known bugs.

## License

- N/A Copyright (c) 3/13/2022, Aaron Boyd, Kyle Miller, Todd Pangilinan, Hans Schroeder, & Michael Shamrell
- [MIT](https://opensource.org/licenses/MIT)