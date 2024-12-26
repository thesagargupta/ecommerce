import { useEffect, useState } from "react";
import "./Home.css";
import iphoneBan from '../assets/iphone.jpeg';
import electroBan from '../assets/electronic.jpg';
import fashion from '../assets/fashion.jpg'; 
import ProductCard from "../components/Navbar/ProductCard";
import image1 from '../assets/gaming-pad.jpeg';
import image2 from '../assets/keyboard.jpg';
import image3 from '../assets/monitor.jpg';
import image4 from '../assets/comfort.jpg';
import image5 from '../assets/headphone.jpeg';
import image6 from '../assets/watch.jpg';
import image7 from '../assets/band.jpg'
import image8 from '../assets/earpods.jpg'
import Categories from "../components/Navbar/Categories";
import BestSellingProducts from "../components/Navbar/BestSellingProducts";
import image9 from '../assets/helmet.jpg'
import image10 from '../assets/monitor2.jpg'
import image11 from '../assets/macbook.jpg'
import image12 from '../assets/ipad.jpg'
import image13 from '../assets/iphone16.jpg'
import image14 from '../assets/hplaptop.jpg'
import image15 from '../assets/s23.jpg'
import image16 from '../assets/16promax.jpg'

const products = [
  {
    id: 1,
    image: image1,
    name: "HAVIT HV-G92 Gamepad",
    price: 220,
    oldPrice: 250,
    discount: 40,
    rating: 4,
  },
  {
    id: 2,
    image: image2,
    name: "AK-900 Wired Keyboard",
    price: 950,
    oldPrice: 1000,
    discount: 25,
    rating: 5,
  },
  {
    id: 3,
    image: image3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 4,
  },
  {
    id: 4,
    image: image4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4,
  },
  {
    id: 5,
    image: image5,
    name: "Boult Headphone",
    price: 300,
    oldPrice: 350,
    discount: 15,
    rating: 4,
  },
  {
    id: 6,
    image: image6,
    name: "Boat Watch 6",
    price: 5000,
    oldPrice: 5500,
    discount: 10,
    rating: 5,
  },
  {
    id: 7,
    image: image7,
    name: "MI Band 7",
    price: 900,
    oldPrice: 1000,
    discount: 10,
    rating: 5,
  },
  {
    id: 8,
    image: image8,
    name: "Beat Earpods",
    price: 1000,
    oldPrice: 1500,
    discount: 10,
    rating: 5,
  },

];

const bestSellingProducts = [
  {
    id: 9,
    image: image9,
    name: "Bike Helmet",
    price: 1000,
    oldPrice: 1900,
    discount: 15,
    rating: 4.5,
  },
  {
    id: 10,
    image: image10,
    name: "Fromntech PC Monitor",
    price: 5000,
    oldPrice: 7500,
    discount: 10,
    rating: 5,
  },
  {
    id: 11,
    image: image11,
    name: "MacBook Air Pro",
    price: 90000,
    oldPrice: 100000,
    discount: 10,
    rating: 5,
  },
  {
    id: 12,
    image: image12,
    name: "Apple Ipad Pro",
    price: 70000,
    oldPrice: 85000,
    discount: 10,
    rating: 5,
  },
  {
    id: 13,
    image: image13,
    name: "Iphone 16",
    price: 5000,
    oldPrice: 90000,
    discount: 90,
    rating: 5,
  },
  {
  id: 14,
  image: image14,
  name: "Hp Laptop 8/512 SSD",
  price: 25000,
  oldPrice: 90000,
  discount: 30,
  rating: 5,
  },
  {
    id: 15,
    image: image15,
    name: "Samsung S23 Ultra",
    price: 75000,
    oldPrice: 150000,
    discount: 50,
    rating: 5,
    },
     {
  id: 16,
  image: image16,
  name: "Iphone 16 Pro Max",
  price: 100000,
  oldPrice: 150000,
  discount: 30,
  rating: 5,
  },
];


const Home = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 * 1000); // 24 hours in milliseconds
  const [showAllProducts, setShowAllProducts] = useState(false); // To show all products in grid for mobile view
  const [carouselIndex, setCarouselIndex] = useState(0); // To track the carousel position
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval); // Stop the timer when it reaches zero
          return 0;
        }
        return prevTime - 1000; // Decrease time by 1 second
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (carouselIndex < products.length - 4) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const handlePrev = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div>
      <div className="container my-section">
        <div className="row">
          <div className="col-md-3 categories d-none d-md-block">
            <div className="left-cat">
              <ul className="category-list">
                <li>Woman&apos;s Fashion<span><b> &rsaquo;</b></span></li>
                <li>Men&apos;s Fashion <span><b> &rsaquo;</b></span></li>
                <li>Electronics <span><b> &rsaquo;</b></span></li>
                <li>Home & Lifestyle <span><b> &rsaquo;</b></span></li>
                <li>Medicine <span><b> &rsaquo;</b></span></li>
                <li>Sports & Outdoor <span><b> &rsaquo;</b></span></li>
                <li>Baby&apos;s & Toys <span><b> &rsaquo;</b></span></li>
                <li>Groceries & Pets <span><b> &rsaquo;</b></span></li>
                <li>Health & Beauty <span><b> &rsaquo;</b></span></li>
              </ul>
            </div>
          </div>

          <div className="col-md-9">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={iphoneBan}
                    className="d-block w-100"
                    alt="Slide 1"
                  />
                  <div className="carousel-caption">
                    <h5>iPhone 15 Series</h5>
                    <p>Up to 10% off Voucher</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={electroBan}
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                  <div className="carousel-caption">
                    <h5>Electronics Sale</h5>
                    <p>Best Deals on Electronics</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={fashion}
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                  <div className="carousel-caption">
                    <h5>Fashion Trends</h5>
                    <p>Shop the Latest Styles</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flash-sales-section">
        <div className="row justify-content-center">
          <div className="col-md-3 countdown-section">
            <h3>Flash Sale Ends In:</h3>
            <div className="countdown-timer">
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>


          <div className="d-none d-md-flex justify-content-center align-items-center">
            <button
              className="btn btn-primary prev-arrow"
              onClick={handlePrev}
            >
              {"<"}
            </button>
            <div className="d-flex overflow-x-auto" style={{ width: "80%" }}>
              {products.slice(carouselIndex, carouselIndex + 4).map((product) => (
                <div key={product.id} className="col-6 col-sm-4 col-md-3 mb-4 product-card">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary next-arrow"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>

          <div className="row d-md-none">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="col-6 col-sm-4 col-md-3 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center d-md-none">
            <button className="btn btn-danger" onClick={() => setShowAllProducts(true)}>See All Products</button>
          </div>

          {showAllProducts && (
            <div className="row">
              {products.slice(4).map((product) => (
                <div key={product.id} className="col-6 col-sm-4 col-md-3 mb-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Categories/>
      <BestSellingProducts products={bestSellingProducts} />

    </div>
  );
};

export default Home;
