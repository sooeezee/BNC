import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import { useGetFilterProductQuery } from "../redux/api/baseApi";
import useDebounce from "../hooks/useDebounce";
import SklnCard from "../components/SklnCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const debounceValue = useDebounce(search);
  const skCards = [1, 2, 3, 4, 5, 6];

  const { data, isLoading } = useGetFilterProductQuery({
    search: debounceValue,
    sortBy,
    minPrice: priceRange.length ? priceRange[0] : 0,
    maxPrice: priceRange.length ? priceRange[1] : 1000,
  });

  const handlePriceRangeChange = (value) => {
    if (Array.isArray(value)) {
      setPriceRange(value);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [debounceValue]);

  return (
    <>
      <Helmet>
        <title>Products - MechKeyMart</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-20">
          {/* Left Column - Filters */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-6 p-4 border rounded-md lg:sticky top-8">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search by name, brand..."
                className="p-2 border rounded-md outline-none focus:ring-1"
              />

              <div className="px-4 py-4">
                <label className="block mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="pe-4">
                  <Slider
                    range
                    min={0}
                    max={1000}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    trackStyle={[{ backgroundColor: "#4A90E2" }]}
                    handleStyle={[
                      { borderColor: "#4A90E2" },
                      { borderColor: "#4A90E2" },
                    ]}
                  />
                </div>
              </div>
              <select
                className="p-2 border rounded-md outline-none focus:ring-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
              <button
                onClick={() => {
                  setPriceRange([1, 1000]);
                  setSearch("");
                  setSortBy("");
                }}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Right Column - Products */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? skCards.map((index) => <SklnCard key={index} />)
                : data?.data?.map((product) => (
                    <div key={product._id} className="productcard border p-4 rounded-lg">
                      <figure className="w-full h-48 rounded-md overflow-hidden mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                      </figure>

                      <h2 className="text-lg font-bold mb-3">{product.name}</h2>
                      <div className="flex flex-col gap-1">
                        <p>Brand: {product.brand}</p>
                        <p>Available Quantity: {product.availableQuantity}</p>
                        <p>Price: ${product.price}</p>

                        <Rating rating={Math.round(product.rating)} />
                      </div>
                      <Link
                        to={`/product/${product._id}`}
                        className="inline-block px-3 py-1 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200 morebtn"
                      >
                        <span className="flex items-center">
                          Details
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
