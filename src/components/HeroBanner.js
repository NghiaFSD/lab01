import { Carousel } from "react-bootstrap";

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "SUMMER SALE UP TO 50%",
    text: "Fresh styles for every sun-filled moment.",
  },
  {
    image: "/images/banner2.jpg",
    title: "SUMMER SALE UP TO 50%",
    text: "Discover new arrivals made for you.",
  },
  {
    image: "/images/banner3.jpg",
    title: "SUMMER SALE UP TO 50%",
    text: "Timeless pieces, thoughtfully selected.",
  },
];

function HeroBanner() {
  return (
    <section id="home" aria-label="Promotions">
      <Carousel fade className="fashion-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={slide.image}>
            <img
              className="d-block w-100 carousel-image"
              src={slide.image}
              alt={`Fashion promotion ${index + 1}`}
            />
            <Carousel.Caption>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroBanner;
