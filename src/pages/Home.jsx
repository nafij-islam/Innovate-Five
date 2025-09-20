import React from 'react'
import Navber from './../components/menu/Navber';
import Banner from './../components/banner/Banner';
import Slide from '../components/slider/Slide';
import Tolls from './../components/toll/Tolls';
import Task from './../components/task/Task';
import Messy from './../components/messy/Messy';
import Plan from './../components/plan/Plan';
import Count from './../components/counter/Count';
import Slidetwo from './../components/slide2/Slidetwo';
import Trail from './../components/Trail/Trail';
import Footer from './../components/footer/Footer';

const Home = () => {
  return (
   <>
    <Navber/>
    <Banner/>
    <Slide/>
    <Tolls/>
    <Task/>
    <Messy/>
    <Plan/>
    <Count/>
    <Slidetwo/>
    <Trail/>
    <Footer/>
   
   
   </>
  )
}

export default Home