import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "kiichiro",
      desc: `Doni has ability to learn many things faster, and good commitment on it. Also the responsibility is being the first point for him.`,
      name: "Kiichiro Muto",
      designation: "CEO - Gloding Japan",
    },
    {
      img: "nobuaki",
      desc: `Good at responsibility, fast respond and catch up new technology.`,
      name: "Nobuaki Seto",
      designation: "CEO - Nihon Vogue",
    },
    {
      img: "tatsuya",
      desc: `Doni has good communication and technical issue, especially on server and database maintenance. Thanks a lot for any kind of supports.`,
      name: "Tatsuya Baba",
      designation: "CEO - Jimomo Paris",
    },
    {
      img: "hoki",
      desc: `Doni and team have shown true dedication and determination to continue Ensemble project development. Without your support, the organization could not have gone that extra mile. A massive thank you to each one of you !`,
      name: "Mika Hoki",
      designation: "Technical Support - Ensemble Paris",
    },
    {
      img: "riyanarto",
      desc: `Good capability and consistency, we had great experience making The first non-infectious, non-invasive, fast and affordable COVID-19 screening tool in the world !`,
      name: "Riyanarto Sarno",
      designation: "ITS University Professor - Idea Initiator i-Nose",
    },
    {
      img: "agus",
      desc: `Colleagues from Brawijaya are totally involved in working on the ITCR & ITSR project, which is very useful for internal KAI. In terms of skill, it is very capable, marked by being able to learn environments that have never been encountered, but managed to deliver on time.`,
      name: "Agus Rukka",
      designation: "IT Quality Control - Indonesian Railways Company",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `img/testimonials/${val.img}.jpg`
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val.desc}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val.name}</span>
                </h3>
                <span className="job">{val.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
