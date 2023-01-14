import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

function Brand() {
  const { brand, setBrand } = useContext(FilterContext);
  const brands = ["GAP", "Roadster", "Alen Solly", "Four", "Five"];
  const onBrandChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setBrand(event.target.value);
  };
  return (
    <div className="py-4">
      <h4 className="text-lg font-bold py-3">Brand</h4>

      <div className="py-2">
        <select
          id="brand"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={onBrandChangeHandler}
        >
          <option value="">Any</option>
          {brands.map((brand, idx) => (
            <option value={brand} key={idx}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Brand;
