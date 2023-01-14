import { useContext, useState } from "react";
import FilterContext from "../context/FilterContext";
import Brand from "./Filter/Brand";
import IdealFor from "./Filter/IdealFor";
import Size from "./Filter/Size";

function Filters() {
  const [sizeSmall, setSizeSmall] = useState(false);
  function handleChangeSmall() {
    setSizeSmall(!sizeSmall);
  }

  const { small, setSmall, medium, setMedium } = useContext(FilterContext);

  return (
    <div className="contianer p-4">
      <h3 className="text-lg font-bold py-3">Filters</h3>
      <Size />
      <IdealFor />
      <Brand />
    </div>
  );
}

export default Filters;
