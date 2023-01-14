import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

function IdealFor() {
  const { small, setSmall, men, setMen, women, setWomen, kids, setKids } =
    useContext(FilterContext);
  return (
    <div className="py-4">
      <h4 className="text-lg font-bold py-3">Ideal for</h4>

      <div className="flex items-center py-2">
        <input
          id="men-checkbox"
          type="checkbox"
          value="men"
          checked={men}
          onChange={() => setMen(!men)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="men-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          Men
        </label>
      </div>

      <div className="flex items-center py-2">
        <input
          id="women-checkbox"
          type="checkbox"
          value="women"
          checked={women}
          onChange={() => setWomen(!women)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="women-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          Women
        </label>
      </div>

      <div className="flex items-center py-2">
        <input
          id="kids-checkbox"
          type="checkbox"
          value="kids"
          checked={kids}
          onChange={() => setKids(!kids)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="kids-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          Kids
        </label>
      </div>
    </div>
  );
}

export default IdealFor;
