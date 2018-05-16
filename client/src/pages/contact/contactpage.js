import { Grid, Row, Col } from "react-bootstrap";
import React from 'react';
import Contactcom from './../../components/contactcom';


const contactpage = () => {
  return (
    <Grid className='black'>
      <Row>
        <Col xs={12} md={6}>
          <Contactcom />
        </Col>
        <Col xs={12} md={6}>
        </Col>
      </Row>
    </Grid>
  );
};

export default contactpage;
