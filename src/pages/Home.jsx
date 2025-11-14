import React from 'react'
import Banner from './Home/Banner'
import RecommendedSlider from '../component/sliders/RecommendedSlider/RecommendedSlider'
import TopSellers from '../component/sliders/TopSellers/TopSellers'
import NewsSection from '../component/sliders/News/NewsSection'

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <RecommendedSlider />
      <NewsSection />
    </div>
  )
}

export default Home
