function Product({ product }) {
  return (
    <div className="product-card bg-white container w-full h-full rounded-lg border hover:shadow-xl flex sm:flex-col">
      <div className="product-img w-52 h-52 flex justify-center self-center justify-self-center">
        <img
          src={product.imgUrl}
          alt={`${product.title}-image`}
          className="max-w-full max-h-full object-cover"
        />
      </div>
      <div className="product-details px-4 py-2">
        <h4 className="text-lg font-semibold">{product.brand}</h4>
        <h4 className="text-md ">{product.title}</h4>
        <p className="text-xl font-bold">₹ {product.price}</p>
      </div>
    </div>
  );
}
export default Product;
