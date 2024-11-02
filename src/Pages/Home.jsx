import React from 'react'
import Banner from '../Components/Banner'
import Heading from '../Components/Heading'
import { Outlet, useLoaderData } from 'react-router-dom'
import Categories from '../Components/Categories'

function Home() {
  const category = useLoaderData()
  return (
    <div>
      {/* Banner  */}
      <Banner></Banner>
      {/* reauablae components / Heading*/}
      <Heading
        title="Browse Coffees by Category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
      {/* react tab section */}
      <Categories category={category}></Categories>
      {/* all data */}
      <Outlet></Outlet>
    </div>
  );
}

export default Home