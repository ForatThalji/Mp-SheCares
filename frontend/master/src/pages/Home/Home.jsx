import React from 'react';
import Test from './Test.jsx';
import 'keen-slider/keen-slider.min.css';
import Gallery from './Gallery.jsx';
import { Link } from 'react-router-dom';
import ShopbyCategory from './ShopbyCategory.jsx';
import Services from './Services.jsx';
import Header_2 from '../../assets/Header_2.jsx'; 
import Blog from './Blog.jsx';
import WhyUs from './WhyUs.jsx';
import Faq from './Faq.jsx';
import Hero from './Hero.jsx';



 
function Home() {
  return (
   
<div className=''>
<Header_2 />
<Hero />
<Services />
<Test />
<ShopbyCategory />
<Blog />
<Gallery />
<WhyUs />
<Faq />
</div>

  
  
  )
}


export default Home;
