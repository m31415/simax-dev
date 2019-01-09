import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';


export default class Euro extends Component {
  constructor(props) {
    super(props);
    const { bankAccount } = this.props;
    this.state = {
      savingsInEuro: bankAccount,
    };

  }

  render() {
    const { savingsInEuro } = this.state;
    return (
      <Card bg="dark" text="white">
        <Card.Body>
          <Card.Title>
              Simax Balance Card
          </Card.Title>
          <Card.Text>
            {savingsInEuro.map((balance, index) => (
              <b>
                Account {index} has a balance of {balance} €
                <br />
              </b>
            ))}
          </Card.Text>
          <Button
            variant="warning"
          >
            Show Balance in GBP
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
