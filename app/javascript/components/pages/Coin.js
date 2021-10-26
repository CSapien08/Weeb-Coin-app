import React, { Component } from "react";
import { Card, Row, Col, CardText, CardTitle } from "reactstrap";

class Coin extends Component {
  constructor() {
    super();
  }

  formatLastUpdated = (updateTime) => {

    let current_datetime = new Date(updateTime)
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return formatted_date
  }

  render() {
    const { coin } = this.props;
    return (
      <section className="coin-page">
        <div className="coin-page-symbol">
          <h5>{coin && coin.symbol}</h5>
        </div>
        {coin && <Row>
          <Col sm="6">
            <Card body>
              <div className="coin-page-card-header">
                <CardTitle tag="h5">{coin.name}</CardTitle>
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.api_id}.png`} height='64px' width='64px'/>
              </div>
              <CardText>Price: ${coin.price.toFixed(7)} </CardText>
              <CardText>Volume in last 24H: ${coin.volume_24h.toLocaleString()} </CardText>
              <CardText>Market Cap: ${coin.market_cap.toLocaleString()} </CardText>
              <CardText>Total Supply: {coin.total_supply.toLocaleString()} </CardText>
              <CardText>Last Updated: {this.formatLastUpdated(coin.last_updated)} </CardText>
            </Card>
          </Col>
        </Row>}
      </section>
    );
  }
}
export default Coin;
