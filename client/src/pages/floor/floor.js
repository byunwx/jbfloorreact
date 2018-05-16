import { Grid, Row, Col } from "react-bootstrap";
import React, { Component } from "react";

class floor extends Component{
  state = {
    floorwebs: [{url:'http://www.bruce.com/flooring/hardwood', logo:'http://www.bruce.com/i/images/Bruce_Logo_Mobile.png', about:'floor company', company:'bruce'}, {url:'https://shawfloors.com/', logo:'https://shawfloors.scene7.com/is/image/ShawIndustries/Shaw%20Floors_K', about:'floor company', company:'shawfloors'}, {url:'https://www.armstrongflooring.com/residential/en-us/hardwood-flooring.html', logo:'https://www.armstrongflooring.com/etc/designs/armstrongflooring/commercial/clientlibs/headlibs/images/logo.svg', about:'floor company', company:'armstrongflooring'}],
    recomendation:[]
  };
render() {
  return (
    <Grid className='black'>
      <Row>
        <Col xs={12} md={12}>
          <h3>Our Recomendation</h3>
          <h3>Other Options</h3>
          {this.state.floorwebs.map(web => (
            <div key={web.company}>
              <a href={web.url} target='_blank'>
                <img src={web.logo}/>
                <strong>
                  {web.company}
                </strong>
                <p>{web.about}</p>
              </a>
            </div>
          ))}
        </Col>
      </Row>
    </Grid>
  );
};
}

export default floor;
