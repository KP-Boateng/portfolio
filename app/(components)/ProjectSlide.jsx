import Slider from "react-slick";

const ProjectSlide = ({ imageList }) => {
  const settings = {
    infinite: true,
    dots: true,
    // draggable: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // centerMode: true,
    centerPadding: "2px",
    swipeToSlide: true,
    adaptiveHeight: true,
    speed: 500,
    responsive: [
      { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      // { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 2 } },
    ],
  };
  return (
    <div className=" min-h-screen w-full">
      <Slider {...settings}>
        <div>
          <h1>Hello there</h1>
        </div>
        <div>
          <h1>Hello there</h1>
        </div>
        <div>
          <h1>Hello there</h1>
        </div>
        <div>
          <h1>Hello there</h1>
        </div>
        <div>
          <h1>Hello there</h1>
        </div>
        <div>
          <h1>Hello there</h1>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectSlide;
