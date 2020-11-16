/*Create a form, this form needs two boxes for the To, and From. This need a text area as well.
then implement email feature. This will take the input from the user and send it to our business email the information
*/
import React from "react";
import Nav from "../components/Nav/index";

import "../App.css";
import { Col, Row, Container, Input, Icon, Btn } from "../components/Grid";

const ContactUs = () => {
return (
  <div>
<Container fluid>
  <Row>
    <Col md="6">
      <form>
        <p className="h5 text-center mb-4">Write to us</p>
        <div className="grey-text">
          <Input label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <Input label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <Input label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <Input type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <Btn outline color="secondary">
            Send
            <Icon far icon="paper-plane" className="ml-1" />
          </Btn>
        </div>
      </form>
    </Col>
  </Row>
</Container>
</div>
);
};


export default ContactUs;