import Product from "./components/Product";
import products from "./data/products.json";
import Filters from "./components/Filter/Filters";
import FilterContext from "./context/FilterContext";
import { useEffect, useState } from "react";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  // size states
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  // idea for states
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);

  // brand name
  const [brand, setBrand] = useState("");

  // sort by price
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchedData = products.data;
    const filterByIdeal = fetchedData.filter((product) => {
      if (men || women || kids) {
        if (men && product.idealFor == "M") return true;
        if (women && product.idealFor == "W") return true;
        if (kids && product.idealFor == "K") return true;
      } else return true;

      return false;
    });

    const filterBySize = filterByIdeal.filter((product) => {
      if (small || medium || large) {
        if (small && product.sizeAvailable.S) return true;
        if (medium && product.sizeAvailable.M) return true;
        if (large && product.sizeAvailable.L) return true;
      } else return true;

      return false;
    });

    const filterByBrand = filterBySize.filter((product) => {
      if (brand != "" && brand != product.brand) return false;
      return true;
    });

    if (price == "low2high") {
      filterByBrand.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (price == "high2low") {
      filterByBrand.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }

    setFilteredProducts(filterByBrand);
  }, [men, women, kids, small, medium, large, brand, price]);
  return (
    <div className="App">
      <div className="bg-slate-200 px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b border-gray-200 flex justify-between items-center">
        <h1 className="py-2 text-center text-3xl font-bold ">
          🛒 Product Listing
        </h1>
        <a
          href="https://github.com/guptavarun619/Product-Listing"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/null/github.png"
            alt="github repo"
            className="w-12 h-12"
          />
        </a>
      </div>
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
          price,
          setPrice,
        }}
      >
        <div className="products-layout  container mx-auto p-4  flex flex-col lg:flex-row gap-8">
          <div className="filters w-full lg:w-1/5">
            <Filters />
          </div>
          <div className="products-list bg-slate-50 p-4 h-fit rounded-lg lg:w-4/5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {filteredProducts.map((product, idx) => (
              <Product product={product} key={idx} />
            ))}
          </div>
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
