import Product from "./components/Product";
import products from "./data/products.json";
import Filters from "./components/Filters";
import FilterContext from "./context/FilterContext";
import { useState } from "react";

function App() {
  // size states
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(true);
  const [large, setLarge] = useState(true);

  // idea for states
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  const [kids, setKids] = useState(true);

  //
  const [brand, setBrand] = useState("");
  return (
    <div className="App">
      <h1 className="py-2 text-center text-3xl font-bold ">
        Product Listing : In Progress 🚀
      </h1>
      <FilterContext.Provider
        value={{
          small,
          setSmall,
          medium,
          setMedium,
          large,
          setLarge,
          men,
          setMen,
          women,
          setWomen,
          kids,
          setKids,
          brand,
          setBrand,
        }}
      >
        <div className="products-layout  container mx-auto p-4  grid grid-cols-5 gap-8">
          <div className="filters bg-slate-100 rounded-lg">
            <Filters />
          </div>
          <div className="products-list bg-slate-100 p-4 rounded-lg col-span-5 lg:col-span-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products?.data.map((product, idx) => (
              <Product product={product} key={idx} />
            ))}
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
