import { useContext } from "react";
import FilterContext from "../../context/FilterContext";

function Size() {
  const { small, setSmall, medium, setMedium, large, setLarge } =
    useContext(FilterContext);
  return (
    <div className="py-4">
      <h4 className="text-lg font-bold py-3">Size</h4>

      <div className="flex items-center py-2">
        <input
          id="small-checkbox"
          type="checkbox"
          value="small"
          checked={small}
          onChange={() => setSmall(!small)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="small-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          S - small
        </label>
      </div>

      <div className="flex items-center py-2">
        <input
          id="medium-checkbox"
          type="checkbox"
          value="medium"
          checked={medium}
          onChange={() => setMedium(!medium)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="medium-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          M - medium
        </label>
      </div>

      <div className="flex items-center py-2">
        <input
          id="large-checkbox"
          type="checkbox"
          value="large"
          checked={large}
          onChange={() => setLarge(!large)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
        />
        <label
          htmlFor="large-checkbox"
          className="ml-2 text-md font-medium text-gray-900 "
        >
          L - large
        </label>
      </div>
    </div>
  );
}

export default Size;
