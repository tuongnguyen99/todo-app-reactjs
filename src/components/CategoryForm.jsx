import React from "react";

const CategoryForm = () => {
  return (
    <form class="d-flex-column-center category-form">
      <button type="submit" class="btn btn-add-category">
        <i class="fa fa-plus-circle fa-2x"></i>
      </button>
      <input class="input-box" placeholder="New category" type="text" />
    </form>
  );
};

export default CategoryForm;
