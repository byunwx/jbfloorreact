import { Button } from "react-bootstrap";
import React from 'react';

const contactcom = () => {
  return (
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
    );
};

export default contactcom;
