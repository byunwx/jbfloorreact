import { Grid, Row, Col } from "react-bootstrap";
import React from 'react'


const foot = () => {
  return (
    <footer>
      <Grid>
        <Row>
          <Col xs={3} md={3}>
            <Row>
              <h4>About</h4>
            </Row>
            <Row>
              <p>J&B Flooring Inc. is owned by the Lee family who live in the Fairfax, VA area. The family has been involved with home improvement care since 2001.</p>
            </Row>
          </Col>
          <Col xs={3} md={3}>
            <Row>
              <h4>Contact</h4>
            </Row>
            <Row>
              <p>Cell: (571) 242 -7077</p>
              <p>Work: (703) 304 - 2488</p>
              <p>E-mail: jbfloorinc@gmail.com</p>
            </Row>
          </Col>
          <Col xs={3} md={3}>
            <Row>
              <h4>Hours of Operation</h4>
            </Row>
            <Row>
              <p>Mon - Fri: 8:00 AM ~ 7:00 PM</p>
              <p>Saturday: 8:00 AM ~ 5:00 PM</p>
              <p>Sunday: 2:00 PM ~ 6:00 PM</p>
            </Row>
          </Col>
          <Col xs={3} md={3}>
            <Row>
              <h4>Our Service Area</h4>
            </Row>
            <Row>
              <ul>
                <li>Virginia</li>
                <li>Maryland</li>
                <li>Distric of Columbia</li>
              </ul>
            </Row>
          </Col>
        </Row>
  <br/>
        <Row>
          <Col md={12} className= "footerlogo">
            <p>J&B Flooring Inc.-A Hardwood Contractor in the Washington DC Area</p>
            <p>© copyright 2018 byunwx</p>
          </Col>
        </Row>
      </Grid>
    </footer>
  )
}

export default foot;
