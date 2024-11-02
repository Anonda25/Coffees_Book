import React from 'react'
import {  NavLink } from 'react-router-dom';

function Categories({category}) {
    console.log(category);
  return (
    <div className="mb-10">
      <div role="tablist" className="tabs tabs-lifted ">
        {category.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({isActive}) => `tab ${isActive?'tab-active': ''}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Categories