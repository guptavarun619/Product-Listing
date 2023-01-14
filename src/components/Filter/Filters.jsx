import Brand from "./Brand";
import IdealFor from "./IdealFor";
import Price from "./Price";
import Size from "./Size";

function Filters() {
  return (
    <div className="contianer p-4 bg-slate-50 rounded-lg">
      <h3 className="text-xl font-bold py-3 text-center">Filters</h3>
      <div className="flex lg:flex-col justify-around lg:">
        <Size />
        <IdealFor />
        <Brand />
        <Price />
      </div>
    </div>
  );
}

export default Filters;
