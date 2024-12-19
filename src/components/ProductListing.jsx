'use client'

import { useState } from "react";
import ProductCard from "./ProductCard";
import { getproducts } from "@/services/productServices";

const ProductListing = ({ initialProducts }) => {
    const [products, setProducts] = useState(initialProducts)
    const [limit] = useState(12)
    const [skip, setSkip] = useState(initialProducts.length)
    const [loading, setLoading] = useState(false)

    const loadMore = async () => {
        setLoading(true)
        try {
            const  res = await getproducts(limit, skip)
            setProducts((prevProducts) => [...prevProducts, ...res])
            setSkip((prevSkip) => prevSkip + limit)
        } catch (error) {
            console.error("Error Fetching Products", error )
        } finally {
            setLoading(false)
        }
    }
  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5" >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mx-auto mt-5"
            onClick={loadMore}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </>
      )}
    </>
  );
};

export default ProductListing;
