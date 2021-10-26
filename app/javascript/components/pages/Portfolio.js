import React, { Component } from "react";
import {
  Card,
  Row,
  Col,
  CardText,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      modal: false,
      addRemoveModal: false,
      form: {
        coin_id: "",
        current_quantity: "",
        initial_quantity: 0,
      },
      holding: "",
    };
  }

  componentDidMount() {
    this.getPortfolio();
  }

  getPortfolio = () => {
    fetch("/portfolios")
      .then(response => response.json())
      .then(payload => this.props.portfolioSetState(payload))
      .catch(errors => console.log("portfolio errors:", errors))
  };

  createNewPortfolio = (newPortfolio) => {
    fetch("/portfolios", {
      body: JSON.stringify(newPortfolio),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something is wrong with your submission.");
        }
        return response.json();
      })
      .then(() => this.getPortfolio())
      .catch((errors) => console.log("Create errors:", errors));
  };

  updatePortfolio = (updatePortfolio, id) => {
    fetch(`/portfolios/${id}`, {
      body: JSON.stringify(updatePortfolio),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then(() => this.getPortfolio())
      .catch((errors) => console.log("edit errors:", errors));
  };

  deletePortfolio = (id) => {
    fetch(`/portfolios/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.getPortfolio())
      .catch((errors) => console.log("Portfolio delete errors:", errors));
  };

  getTotalWorth = () => {
    let sum = 0;
    this.props.portfolios.forEach((portfolio) => {
      sum += portfolio.coin.price.toFixed(7) * portfolio.current_quantity.toFixed(7);
    });
    return sum;
  };

  toggle = () => {
    let newOpenState = !this.state.isOpen;
    this.setState({ isOpen: newOpenState });
  };

  toggleModal = (id) => {
    let newOpenModal = !this.state.modal;
    this.setState({
      modal: newOpenModal,
      form: { ...this.state.form, coin_id: id },
    });
  };
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  handleSubmit = () => {
    this.createNewPortfolio(this.state.form);
    let newOpenModal = !this.state.modal;
    this.setState({ modal: newOpenModal });
  };

  toggleUpdateModal = (id, holding) => {
    let updateModal = !this.state.addRemoveModal;
    this.setState({
      addRemoveModal: updateModal,
      form: { ...this.state.form, coin_id: id },
      holding: holding,
    });
  };

  handleUpdateSubmit = (portfolio_id) => {
    this.updatePortfolio(this.state.form, portfolio_id);
    let updateModal = !this.state.addRemoveModal;
    this.setState({ addRemoveModal: updateModal });
  };

  render() {
    return (
      <section className="portfolio-page">
        <h1>
          Hello {this.props.logged_in && this.props.current_user.username}
        </h1>
        <h3>Total Worth: {this.getTotalWorth().toFixed(2)}</h3>
        <Dropdown direction="right" isOpen={this.state.isOpen} toggle={this.toggle}>
          <DropdownToggle caret className="dropdown-btn">Add Coins:</DropdownToggle>
          <DropdownMenu
              modifiers={{
                setMaxHeight: {
                  enabled: true,
                  order: 890,
                  fn: (data) => {
                    return {
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: '300px',
                      },
                    };
                  },
                },
              }}
          >
            {this.props.coins &&
              this.props.coins.map((coin) => {
                return (
                  <DropdownItem onClick={() =>this.toggleModal(coin.id)}  key={`${coin.id}-${coin.name}`}
                  >
                    {coin.name}
                  </DropdownItem>
                );
              })}
          </DropdownMenu>
        </Dropdown>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add Holdings</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="current_quantity">Quantity</Label>
                <Input
                  type="number"
                  name="current_quantity"
                  placeholder="0"
                  onChange={this.handleChange}
                  value={this.state.form.current_quantity}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/*update modal  */}
        {this.props.portfolios &&
          this.props.portfolios.map((portfolio) => {
            return (
              <Modal
                isOpen={this.state.addRemoveModal}
                toggle={this.toggleUpdateModal}
                key={`modal-${portfolio.id}`}
              >
                <ModalHeader toggle={this.toggleUpdateModal}>
                  Change Holdings
                </ModalHeader>
                <ModalBody>
                  Current Holdings: {this.state.holding}
                  <Form>
                    <FormGroup>
                      <Label for="current_quantity">Quantity</Label>
                      <Input
                        type="number"
                        name="current_quantity"
                        onChange={this.handleChange}
                        value={this.state.form.current_quantity}
                      />
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onClick={() => this.handleUpdateSubmit(portfolio.id)}
                  >
                    Submit
                  </Button>

                  <Button color="secondary" onClick={this.toggleUpdateModal}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            );
          })}

        <div className="portfolio-page-portfolios">
          Current Crypto Currencies
          {this.props.portfolios &&
            this.props.portfolios.map((portfolio) => {
              return (
                  <Row key={`rows-${portfolio.id}`} >
                    <Col sm="6">
                      <Card body>
                        <CardText>{portfolio.coin.symbol}</CardText>
                        <Link to={`/coin/${portfolio.coin.id}`}>
                          <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${portfolio.coin.api_id}.png`}
                            height='64px' width='64px'/>
                        </Link>
                        <Link to={`/coin/${portfolio.coin.id}`}>
                          <CardTitle tag="h5">
                            {portfolio.coin.name}
                          </CardTitle>
                        </Link>
                        <CardText>Price: ${portfolio.coin.price.toFixed(7)} </CardText>
                        <CardText>
                          Holdings: {portfolio.current_quantity}
                        </CardText>
                        <CardText>
                          Amount: ${(portfolio.coin.price.toFixed(7) * portfolio.current_quantity.toFixed(7)).toFixed(7)}
                        </CardText>
                        
                        <Button
                          onClick={() =>
                            this.toggleUpdateModal(
                              portfolio.coin_id,
                              portfolio.current_quantity
                            )
                          }
                          color="success"
                        >
                          Update Coins
                        </Button>
                        <Button
                          onClick={() =>
                            this.deletePortfolio(portfolio.id)

                          }
                          color="danger"
                        >
                          Delete Coin
                        </Button>
                      </Card>
                    </Col>
                  </Row>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
