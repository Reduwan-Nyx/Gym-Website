import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'

const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
    return (
     <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>FITNESS WITH US</h3>
                    <p>The Best Fitness Services are available here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>FITNESS WITH USl</h3>
                    <p>We Will provide you The Best Fitness Mechine </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>FITNESS WITH US</h3>
                    <p>
                        You Can Be What You Dreamd For If you Want to Be.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Banner;