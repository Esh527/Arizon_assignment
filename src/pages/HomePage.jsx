import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import '../styles.css';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;