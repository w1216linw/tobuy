import { Carousel, Container } from "react-bootstrap";
import steamFish from "../assets/steamFish.jpg";
import steak from "../assets/steak.jpg";
import dessert from "../assets/dessert.jpg";

export default function ShowingImage () { 
  return (
    <Carousel>
        <Carousel.Item>
          <img className="showing-image d-block" src={steamFish} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="showing-image d-block" src={steak} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="showing-image d-block" src={dessert} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
  )
}