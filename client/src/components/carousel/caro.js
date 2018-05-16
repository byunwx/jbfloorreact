import { Carousel } from "react-bootstrap";
import React from 'react'

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={'1300vw'} alt="900x500" src="./images/slider1.jpg" />
          <Carousel.Caption>
          <h5>JBFloorInc</h5>
          <a href="/contact"><button type="button" class="btn bg-dark btn-lg">Contact Us!</button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={'1300vw'} alt="900x500" src="./images/slider2.jpg" />
          <Carousel.Caption>
          <h5>JBFloorInc</h5>
          <a href="/contact"><button type="button" class="btn bg-dark btn-lg">Contact Us!</button></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
