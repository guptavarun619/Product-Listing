import Product from "./components/Product";
import products from "../data/products.json";
import Filters from "./components/Filters";
function App() {
  return (
    <div className="App">
      <h1 className="py-2 text-center text-3xl font-bold ">
        Product Listing : In Progress 🚀
      </h1>

      <div className="products-layout container mx-auto p-4  grid grid-cols-5 gap-8">
        <div className="filters bg-slate-300 rounded-lg">
          <Filters />
        </div>
        <div className="products list col-span-5 lg:col-span-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.data.map((product, idx) => (
            <Product product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
