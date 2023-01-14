import { useContext, useEffect, useState } from "react";
import FilterContext from "../../context/FilterContext";

function Price() {
  const { price, setPrice } = useContext(FilterContext);
  const onPriceChangeHandler = (event) => {
    // console.log("User Selected Value - ", event.target.value);
    setPrice(event.target.value);
  };

  return (
    <div className="py-4">
      <h4 className="text-lg font-bold py-3">Sort by Price</h4>

      <div className="py-2">
        <select
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={price}
          onChange={onPriceChangeHandler}
        >
          <option value="">Any</option>
          <option value="low2high">Low to high</option>
          <option value="high2low">High to low</option>
        </select>
      </div>
    </div>
  );
}

export default Price;
