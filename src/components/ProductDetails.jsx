'use client'
import { useRouter } from "next/navigation";


function ProductDetails({ product }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const router = useRouter();


  return (
    <div className="container mx-auto px-4 py-8">
      <button
       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
       onClick={() => router.back()}
      >
        Back to Products
      </button>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.thumbnail} 
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg main-image"
          />
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images.slice(0, 4).map((img, index) => (
              <img 
              key={index}
              src={img} 
              alt={`${product.title} - img${index+1}`} 
              width={150}
              height={150}
              className="rounded-lg cursor-pointer hover:opacity-75 shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">⭐{product.rating.toFixed(1)}</span>
            <span className="text-gray-600">({product.stock} in stock)</span>
          </div>

          <div className="mb-4">
            <p className="text-2xl font-semibold text-green-600">
              ₹{product.price.toFixed(2)}
              {product.discountPercentage && (
                <span className="ml-2 text-sm text-red-500">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </p>
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Brand</p>
              <p className="font-semibold">{product.brand}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Category</p>
              <p className="font-semibold">{product.category}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Shipping Information</p>
              <p className="font-semibold">{product.shippingInformation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Availability</p>
              <p className="font-semibold">{product.availabilityStatus}</p>
            </div>

          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
          {/* Customer reviews */}
          <div>
            <h2 className="text-2xl font-semibold mt-6">Customer Reviews</h2>
            <div className="mt-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  <p><strong>{review.reviewerName}</strong></p>
                  <p className="text-gray-700">{review.comment}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-2">⭐{review.rating}/5</span>
                    <span className="text-gray-600">({formatDate(review.date)})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
