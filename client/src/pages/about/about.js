import { Grid, Row, Col, Jumbotron, Thumbnail, Button, Image } from "react-bootstrap";
import React from 'react';
import Googlemap from './../../components/googlemap'

const about = () => {
  return (
    <Grid className='black'>
      <Row>
        <Col xs={12} md={6}>
          <Row>
            <h4>About</h4>
          </Row>
          <Row>
            <p>J&B Flooring Inc. is owned by the Lee family who live in the Fairfax, VA area. The family has been involved with home improvement care since 2001.</p>
          </Row>
          <Row>
            <h4>Hours of Operation</h4>
          </Row>
          <Row>
            <p>Mon - Fri: 8:00 AM ~ 7:00 PM</p>
            <p>Saturday: 8:00 AM ~ 5:00 PM</p>
            <p>Sunday: 2:00 PM ~ 6:00 PM</p>
          </Row>
          <Row>
            <h4>Contact</h4>
          </Row>
          <Row>
            <p>Cell: (571) 242 -7077</p>
            <p>Work: (703) 304 - 2488</p>
            <p>E-mail: jbfloorinc@gmail.com</p>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <br/>
          <Googlemap/>
        </Col>
      </Row>
    </Grid>
  );
};

export default about;
