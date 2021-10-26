# README

---

## Welcome to Weeb Coin!
*Built on REACT (v17.0.2) and Ruby on RAILS (v3.0)*

```
We the Weeb Developers are four junior developers at LEARN academy who decided to start this project to test
our skills in deploying a full stack application using REACT and rails.

Weeb coin is a cryptocurrency portfolio management website in which a user can log in and see a list of 100
of the top cryptocurrency coins along with the current price, volume, and market cap. You can create a
free account and log in to access portfolio management features. When logged in you can build a portfolio
of crypto currency. You can update your portfolio- adding and removing coins
as you want. The portfolio keeps track of all your added coins and their price data,
including the total worth of your portfolio. Coin price data is pulled from coinmarketcap's API.
```

---

### Dependencies

```
  "@babel/preset-react": "^7.14.5",
  "@rails/actioncable": "^6.0.0",
  "@rails/activestorage": "^6.0.0",
  "@rails/ujs": "^6.0.0",
  "@rails/webpacker": "5.4.2",
  "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
  "bootstrap": "5.1.0",
  "dotenv": "^10.0.0",
  "jest": "^27.1.1",
  "prop-types": "^15.7.2",
  "react": "^17.0.2",
  "react-bootstrap": "^2.0.0-beta.6",
  "react-dom": "^17.0.2",
  "react-modal-video": "^1.2.8",
  "react-router-dom": "^5.3.0",
  "react_ujs": "^2.6.1",
  "reactstrap": "^8.10.0",
  "turbolinks": "^5.2.0",
  "webpack": "^4.46.0",
  "webpack-cli": "^3.3.12"
```

```
We use <https://coinmarketcap.com/api/> to fetch our cryptocurrency data. To generate your own API key you need to request one. To implement API key make a .env file in the root directory and add API_KEY='*key here*'. Your key should now be accessible with ```ENV["API_KEY"]```. Add the .env file to .gitignore to hide your api key if you plan on pushing to github.
```

---

### Setup


> git clone 'github link'

* Initialize database:

> rails db:create
> rails db:migrate

* Add packages and link dependencies:

> yarn

* Start the server!

> rails server

* If app still doesn't work you can try running:
> bundle install
> bin/webpack

---

### TESTING

Test coverage is implemented for 80% of the app on the front and backend. Frontend tests are written in Jest with Enzyme for shallow rendering and backend testing is written with rspec.

> yarn add jest
> bundle add rspec

To run frontend and backend test suites:

> jest
> rspec
