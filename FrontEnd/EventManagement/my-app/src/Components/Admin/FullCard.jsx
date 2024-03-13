
import Carousel from "./CardCarousel";

function FullCard() {
  let slides = [
    "cor5.jpg",
    "cor2.jpg",
    "cor3.jpg",
    "cor4.jpg",
  ];

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default FullCard;
