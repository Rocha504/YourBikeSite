import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from './components/Login';
import About from './components/About';
import './styles/App.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-item">
            <img src="/images/product1.png" alt="Product 1" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src="/images/product2.png" alt="Product 2" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src="/images/product3.jpg" alt="Product 3" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src="/images/product4.jpg" alt="Product 4" className="slider-image" />
          </div>
          <div className="slider-item">
            <img src="/images/product5.jpg" alt="Product 5" className="slider-image" />
          </div>
        </Slider>
      </div>
      <hr className="separator" />
      <div className="best-products">
        <h2>Mejores Productos</h2>
        <div className="product-grid">
          <Link to="/product1" className="product-link">
            <div className="product-box">
              <img src="/images/product1.png" alt="Product 1" className="product-image" />
            </div>
          </Link>
          <Link to="/product2" className="product-link">
            <div className="product-box">
              <img src="/images/product2.png" alt="Product 2" className="product-image" />
            </div>
          </Link>
          <Link to="/product3" className="product-link">
            <div className="product-box">
              <img src="/images/product3.jpg" alt="Product 3" className="product-image" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="company-name-link">
          <h1 className="company-name">YOUR BIKE</h1>
        </Link>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Quienes Somos</Link>
          <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certificaciones</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contactos</Link>
          <Link to="/stores" onClick={() => setMenuOpen(false)}>Tiendas</Link>
          <Link to="/equipment" onClick={() => setMenuOpen(false)}>Equipamiento</Link>
        </nav>
        <div className="App-header-right">
          <Link to="/login">
            <img src="/images/login.png" alt="Login" className="login-image" />
          </Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Otras rutas aquí */}
      </Routes>
      <footer className="footer">
        <div className="footer-border"></div>
        <div className="footer-content">
          {/* Contenido del footer */}
        </div>
      </footer>
    </div>
  );
}

export default App;

