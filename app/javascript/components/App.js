import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

//Pages
import Home from "./pages/Home";
import Coin from "./pages/Coin.js";
import AboutUs from "./pages/AboutUs.js";
import CryptoInfo from "./pages/CryptoInfo.js";
import Portfolio from "./pages/Portfolio.js";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      portfolios: [],
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  portfolioSetState = (payload) => this.setState({ portfolios: payload })

  getAPI = () => {
    fetch("/api-data")
    .then(() => this.getCoins())
  };

  getCoins = () => {
    fetch("/coins")
    .then(response => response.json())
    .then(payload => this.setState({ coins: payload }))
    .catch(errors => console.log("index errors:", errors))
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    const API_KEY = process.env.REACT_APP_API_KEY;

    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                logged_in={logged_in}
                current_user={current_user}
                coins={this.state.coins}
              />
            )}
          />

          <Route path="/aboutus" component={AboutUs} />
          <Route
            path="/coin/:id"
            render={(props) => {
              let id = props.match.params.id;
              let coin = this.state.coins.find((coin) => coin.id === +id);
              return <Coin coin={coin} logged_in={logged_in} />;
            }}
          />

          <Route path="/cryptoinfo" component={CryptoInfo} />
          <Route
            path="/portfolio"
            onEnter={this.getAPI}
            render={(props) => {
              return (
                <Portfolio
                  logged_in={logged_in}
                  current_user={current_user}
                  portfolios={this.state.portfolios}
                  coins={this.state.coins}
                  portfolioSetState = {this.portfolioSetState}
                />
              );
            }}
          />

          <Route component={NotFound} />
        </Switch>
        <Footer logged_in={logged_in} />
      </Router>
    );
  }
}

export default App;
