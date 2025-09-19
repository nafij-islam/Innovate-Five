import React from 'react'
import Navber from './../components/menu/Navber';
import Banner from './../components/banner/Banner';
import Slide from '../components/slider/Slide';
import Tolls from './../components/toll/Tolls';
import Task from './../components/task/Task';
import Messy from './../components/messy/Messy';

const Home = () => {
  return (
   <>
    <Navber/>
    <Banner/>
    <Slide/>
    <Tolls/>
    <Task/>
    <Messy/>
   
   
   </>
  )
}

export default Home