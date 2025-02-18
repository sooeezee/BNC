import { useParams, Link } from "react-router-dom";
import shopProducts from "./shopProducts"; // Import local products
import Rating from "../../components/Rating";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();
  const product = shopProducts.find((item) => item._id === id); // Find product by ID

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - BNC</title>
      </Helmet>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full object-cover" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
            <p className="text-gray-700 mt-4">Available Quantity:   {product.availableQuantity}</p>
            <Rating rating={product.rating} />
            <p className="text-gray-700 mt-4">
                 {product.description}</p>


            <Link to="/shop" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
