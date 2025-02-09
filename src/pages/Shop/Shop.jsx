import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Shop() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});

  async function fetchProductsByCategory(categoryId) {
    try {
      const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
      setProducts((prev) => ({ ...prev, [categoryId]: response.data.data || [] })); // Ensure array fallback
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts((prev) => ({ ...prev, [categoryId]: [] })); // Ensure empty array if error
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
        setCategories(response.data.data || []); // Ensure array fallback
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetchProductsByCategory(category._id);
    });
  }, [categories]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5 text-center">Shop</h2>
      {categories.map((category) => (
        <div key={category._id} className="mb-10">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{category.name}</h3>
          {products[category._id]?.length > 0 ? ( // Check if products exist
            <Carousel responsive={responsive}>
              {products[category._id].map((product) => (
                <div key={product._id} className="p-3 border rounded-lg shadow-md">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
                  <h4 className="mt-2 text-lg font-semibold">{product.title}</h4>
                  <p className="text-green-600 font-bold">${product.price}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <p className="text-gray-500">No products available</p> // Show message if no products
          )}
        </div>
      ))}
    </div>
  );
}
