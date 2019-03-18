// *** Story component
import React, { Component } from 'react';
import "./style.css";
import { Container, Row, Col, Form, Button, ListGroup, Table } from "react-bootstrap";
import fire from './firebase';
import moment from 'moment';

class Guestbook extends Component {
  constructor(props) {
    super(props);
    // <- set up react state
    this.state = {
      signatures: [],
    };
  }

  componentWillMount(){
    /* Create reference in Firebase Database */
    let signaturesRef = fire.database().ref('signatures').orderByKey();
    signaturesRef.on('child_added', snapshot => {
      /* Update React state when added at Firebase Database */
      let signature = { text: snapshot.val(), id: snapshot.key };
      this.setState({ signatures: [signature].concat(this.state.signatures) });
    })
  }
  
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send to Firebase */
    let signature = {
      name: this.inputName.value,
      thought: this.inputThought.value,
      time: moment().format("DD/MMM/YYYY")
    }
    fire.database().ref('signatures').push( signature );
    this.inputName.value = ''; // <- clear the input
    this.inputThought.value = ''; // <- clear the input
  }

  render() {
    return (
      <Container id="guestbook">
        <Row>
          <Col id="titleguestbook">
            Guestbook
          </Col>
        </Row>
        <Row>
          <Col id="titlesign">
            Please sign our guestbook...
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.addMessage.bind(this)}>
              <Row className="forminputs">
                <Col sm={{ span: 4, offset: 4 }}>
                  <p>
                    <Form.Control maxLength={30} className="forminput border border-secondary" type="string" ref={ name => this.inputName = name } name="Name" placeholder="Name" required />
                  </p>
                </Col>
              </Row>
              <Row> 
                <Col sm={{ span: 6, offset: 3 }}>
                  <p>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control as="textarea" rows="1" maxLength={300} className="forminput border border-secondary" type="string" ref={ thought => this.inputThought = thought } name="Thought" placeholder="Leave a thought..." />
                    </Form.Group>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button id="signbutton" variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col sm={{ span: 8, offset: 2 }} id="thoughts">
                  {/* Render the list */}
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th sm={1} >Date</th>
                              <th>Name</th>
                              <th>Thoughts</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              this.state.signatures.map(
                                signature => <tr key={signature.id}>
                                  <td>{signature.text.time}</td>
                                  <td>{signature.text.name}</td>
                                  <td>{signature.text.thought}</td>
                                </tr>
                              )
                            }
                          </tbody>
                        </Table>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export function for importing into /pages
export default Guestbook;
