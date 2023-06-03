import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="box-shadow-md">Available Horses</h1>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/22/19/68/221968bb95b66dca559b9eba58e0aa81.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Blue"</Card.Title>
          <Card.Text className="text-color">
            Blue is a 6 year old blue roan gelding that is registered with AQHA.
            He is Hancock bred, and one of the best cow horses I've seen! His
            color is absolutely gorgeous as well. Recommended for an
            intermediate rider as he has a lot of "go" and quick to change
            direction, like any good cow horse. Blue is very smart and
            level-headed.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/R.be2d127ac1433dc7af6eac695119a8c2?rik=sBQ5PGea3wnjHw&riu=http%3a%2f%2fwww.ranchworldads.com%2fimages%2flistings%2f1861294063_60a3f3e82bf796_33515262_small.jpg&ehk=TIEB7KumJLKnVKRnlNsXvCul%2bSkXm4iu6kgD0f61NiE%3d&risl=&pid=ImgRaw&r=0"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Gunner"</Card.Title>
          <Card.Text className="text-color">
            Gunner is an APHA registered gelding. He is a 10 year old bay paint,
            and is as gentle as they come. A true bomb proof horse! Perfect
            babysitter for children, or anyone who does not have an extensive
            knowledge of horses or riding. Gunner would make the perfect trail
            horse. He has been ridden through various terrain, in parades, and
            also in fun horse shows. He is a true gem and is looking for his
            forever home.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/44/5c/f9/445cf98cde83bcac12d88c988af02b6e.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Penny"</Card.Title>
          <Card.Text className="text-color">
            Penny is an 8 year old AQHA registered mare. She is a barrel horse
            and recommended for an intermediate - experienced rider. She has a
            lot of speed, quick turns, and is ready for someone to complete with
            her! Penny is very sweet but when it comes time to race, she is all
            business. She is also a level-headed mare who doesn't get antsy at
            the gate.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/OIP.Tv_7YA967B8HPbwKX1nmaQHaE8?pid=ImgDet&rs=1"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Maverick"</Card.Title>
          <Card.Text className="text-color">
            Maverick is a grade gelding, about 8 years old. He is my newest
            rescue, so I do not know as much about him as my other horses. What
            I do know is that he is very calm, willing to learn, and so far I
            have not found any vices. He rides out alone or with a group, not
            barn or buddy sour. Crosses water, bridges, and is not afraid of
            other animals. I would suggest an intermediate rider, only because I
            am still getting to know him. Maverick would make someone an
            excellent companion!
          </Card.Text>
        </Card.Body>
        <br></br>
        <br></br>
        <br></br>
      </Card>
    </div>
  );
};

export default About;

//This page is where I have all of my card elements that have an image of a horse with it's information below it.  Buyers can read about available horses and see what they look like before filling out an application.
