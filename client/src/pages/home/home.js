import React from 'react'

const home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Our Services</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 cardrow">
          <div class="card" >
            <img class="card-img-top" src="./images/woodfloor.jpg" alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Hardwood</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-secondary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 cardrow">
          <div class="card" >
            <img class="card-img-top" src="./images/tiles.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Tiles</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-secondary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 cardrow">
          <div class="card" >
            <img class="card-img-top" src="./images/laminate.jpg" alt="" />
            <div class="card-body">
              <h5 class="card-title">Laminate</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-secondary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 cardrow">
          <div class="card" >
            <div class="card-body">
              <h4 class="btn btn-dark btn-lg">Contact Us</h4>
        <hr />
              <form method="POST" action="https://formspree.io/jbfloorinc@gmail.com">
                <h5>Name</h5>
                <input id="name" type="name" name="name" placeholder="John Smith" />
                <br />
                <h5>Email</h5>
                <input id="email" type="email" name="email" placeholder="example@gmail.com" />
                <br />
                <h5>Text</h5>
                <textarea id="textarea" name="message" placeholder="Your message"></textarea>
                <br /><br />
                <button class="btn btn-secondary" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  <br />
      <div class="row">
        <div class="col-md-12">
          <h2>More Photoe</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card" >
            <a href=""><img class="card-img-top" src="./images/laminate.jpg" alt="" /></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" >
            <a href=""><img class="card-img-top" src="./images/laminate.jpg" alt="" /></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" >
            <a href=""><img class="card-img-top" src="./images/laminate.jpg" alt="" /></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" >
            <a href=""><img class="card-img-top" src="./images/laminate.jpg" alt="" /></a>
          </div>
        </div>
      </div>
  <br />
      <div class="row">
        <div class="col-md-12">
          <div class="jumbotron bg-dark">
            <h1 class="display-4">Photo Gallery</h1>
            <p class="lead">Check out more of our pictures in photo Gallery!</p>
            <hr class="my-4" />
            <p>Photos include: It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
              <a class="btn btn-secondary btn-lg" href="" role="button">Go to Gallery</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default home
