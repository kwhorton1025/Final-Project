import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1 className="box-shadow-md">Welcome to Ridgetop Ranch Rescue</h1>
      <div className="d-flex flex-column align-items-center">
        <Card style={{ width: "700px", marginTop: "20px" }}>
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/R.43a0ad4d389dd53f6e59f21d5e46604b?rik=HP1pn5A7ncEs4w&pid=ImgRaw&r=0"
          />
          <Card.Body className="text-center">
            <Card.Title className="text-color">Our Mission</Card.Title>
            <Card.Text className="text-color">
              At Ridgetop Ranch Rescue, we strive to find all of our horses
              their forever family. Some of them came from rough homes, while
              some came from loving homes but were unable to be cared for. No
              matter the circumstances, all of the horses under our care are
              given the absolute best treatment and training. Regular vet
              visits, high quality feed and hay, and shelter from harsh weather
              conditions are just some of the basics provided here. With that
              being said, we are a non-profit rescue. All proceeds from
              purchased horses goes straight to the care of the other horses we
              have. If you are interested in donating, please sign up for our
              email newsletter below! Instructions on how to donate are
              available in our newsletter! Thank you!
            </Card.Text>
          </Card.Body>
          <br></br>
          <br></br>
          <br></br>
        </Card>
      </div>
    </div>
  );
};

export default Home;

//I have a card element with an image and text below it.  The bottom of the page will also have a navbar.
