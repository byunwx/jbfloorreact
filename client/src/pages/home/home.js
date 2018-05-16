import { Grid, Row, Col, Jumbotron, Thumbnail, Button, Image } from "react-bootstrap";
import React from 'react'

const home = () => {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h2>Our Services</h2>
        </Col>
      </Row>

      <Row>
        <Col md={6} class="cardrow">
          <Thumbnail src="./images/woodfloor.jpg" alt="Card cap">
            <h3 class="card-title">Hardwood</h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" ><Button>Go somewhere</Button></a>
          </Thumbnail>
        </Col>
        <Col md={6} class="cardrow">
          <Thumbnail src="./images/tiles.jpg" alt="" >
            <h3 class="card-title">Tiles</h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" ><Button>Go somewhere</Button></a>
          </Thumbnail>
        </Col>
      </Row>

      <Row>
        <Col md={6} class="cardrow">
          <Thumbnail src="./images/laminate.jpg" alt="">
            <h3 class="card-title">Laminate</h3>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" ><Button>Go somewhere</Button></a>
          </Thumbnail>
        </Col>
        <Col xs={12} md={6} class="cardrow">
          <div class="card" >
            <div class="card-body">
              <h3>Contact Us</h3>
        <hr />
              <form method="POST" action="https://formspree.io/jbfloorinc@gmail.com">
                <h4>Name</h4>
                <input id="name" type="name" name="name" placeholder="John Smith" />
                <br />
                <h4>Email</h4>
                <input id="email" type="email" name="email" placeholder="example@gmail.com" />
                <br />
                <h4>Text</h4>
                <textarea id="textarea" name="message" placeholder="Your message"></textarea>
                <br /><br />
                <Button bsStyle="primary" type="submit">Send</Button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
  <br />
      <Row>
        <Col md={12}>
          <h2>More Photo</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <a href=""><Image rounded responsive src="./images/laminate.jpg" alt="" /></a>
        </Col>
        <Col xs={6} md={3}>
          <a href=""><Image rounded responsive src="./images/laminate.jpg" alt="" /></a>
        </Col>
        <Col xs={6} md={3}>
          <a href=""><Image rounded responsive src="./images/laminate.jpg" alt="" /></a>
        </Col>
        <Col xs={6} md={3}>
          <a href=""><Image rounded responsive src="./images/laminate.jpg" alt="" /></a>
        </Col>
      </Row>
  <br />
      <Row>
        <Col md={12}>
          <Jumbotron className="bg-dark">
            <h1 class="display-4">Photo Gallery</h1>
            <p class="lead">Check out more of our pictures in photo Gallery!</p>
            <hr class="my-4" />
            <p>Photos include: It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
              <a class="btn btn-secondary btn-lg" href="" role="button">Go to Gallery</a>
            </p>
          </Jumbotron>
        </Col>
      </Row>

    </Grid>
  );
}

export default home
