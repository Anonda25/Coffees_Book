import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import Cards from "./Cards";
import { useEffect, useState } from "react";


function CategoryCards() {
    const navigeat = useNavigate()
    const categorys = useLoaderData()
   const {category} = useParams()
   const [coffees, setCoffees]=   useState([])
   console.log(coffees);
   useEffect(()=>{
  if (category) {
    const filteredByCategory = [...categorys].filter(
      (coffee) => coffee.category === category
    );
    setCoffees(filteredByCategory);
  } else {
    setCoffees(categorys.slice(0,6));
  }
   },[categorys, category])
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((card, ind) => (
          <Cards key={ind} card={card}></Cards>
        ))}
      </div>
      <button className="btn btn-warning mt-10" onClick={() => navigeat("/coffees")}>View All</button>
    </div>
  );
}

export default CategoryCards