import React from "react";

const CategoryList = ({ category }) => {
  return (
    <ul class="ls-none category-list">
      {category.map(item => {
        return (
          <li>
            <div class="category-item clickable">
              <i class="fas fa-exclamation-circle"></i>
              <p>{item.name}</p>
              <span>9</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
