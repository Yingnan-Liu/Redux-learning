import React from "react";
import { filterChange } from "../../reducers/filterReducer";
import { useDispatch } from "react-redux";

const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    console.log(value);
    dispatch(filterChange(value));
  };
  return (
    <div className="filterArea">
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
      />
      all
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("IMPORTANT")}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NOTIMPORTANT")}
      />
      not important
    </div>
  );
};

export default VisibilityFilter;
