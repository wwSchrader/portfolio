import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap';

class ContactPageBody extends Component {

    render() {
        return (
          <Col md={6} mdOffset={3} fluid={true}>
            <form action="https://formspree.io/wwschrader@gmail.com"
            method="POST">
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        id="formControlsName"
                        type="text"
                        label="Name"
                        name="Name"
                        placeholder="Enter name"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl
                        id="formControlsEmail"
                        type="email"
                        label="Email address"
                        name="E-mail"
                        placeholder="Enter email"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Message</ControlLabel>
                    <FormControl
                        id="formControlsMessage"
                        componentClass="textarea"
                        label="message"
                        name="Message"
                        placeholder="Write message here..."/>
                </FormGroup>
                <Button bsStyle="primary" type="submit">Submit</Button>
            </form>

          </Col>
        );
    }
}

export default ContactPageBody;