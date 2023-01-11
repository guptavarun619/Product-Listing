const product = {
  title: "38024PP25",
  brand: "Fastrack",
  price: "850",
  imgUrl:
    "https://rukminim1.flixcart.com/image/832/832/ksw4ccw0/watch/6/b/c/38024pp25-fastrack-men-original-imag6cu9xkhbgz4y.jpeg?q=70",
};
function Product() {
  console.log("This is from product");
  return (
    <div className="product-card container w-52 rounded-lg border hover:shadow-xl">
      <div className="product-img w-52 h-52 flex justify-center">
        <img
          src={product.imgUrl}
          alt={`${product.title}-image`}
          className="max-w-full max-h-full"
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
