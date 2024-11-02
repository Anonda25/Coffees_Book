import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from '../Components/Cards';
import sortBy from 'sort-by';

function Coffees() {
  const data = useLoaderData()
  const [coffee, setCoffees] = useState(data)
  const handleSortByBtn= (sortBy)=>{
    if (sortBy == "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy == "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  }
  
  return (
    <>
      <div className="flex justify-between">
        <div className="text-3xl font-thin">
          <p> Sort Coffee&apos;s by Popularity & Rating-&gt;</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleSortByBtn("popularity")}
            className="btn btn-warning font-bold"
          >
            Sort By popularity
          </button>
          <button
            onClick={() => handleSortByBtn("rating")}
            className="btn btn-warning font-bold"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffee.map((card, ind) => (
          <Cards key={ind} card={card}></Cards>
        ))}
      </div>
    </>
  );
}

export default Coffees