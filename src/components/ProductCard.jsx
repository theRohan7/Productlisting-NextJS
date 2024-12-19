import Link from "next/link";

const ProductCard = ({ product}) => {

    return(
        <Link href={`/products/${product.id}`} >
                <div className="border rounded-lg p-4 shodow-sm hover:shadow-lg transition" >
                    <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
                    <h2 className="mt-2 text-lg font-bold" >{product.title}</h2>
                    <p className="text-sm text-gray-600" >₹{product.price}</p>
                    <p className="text-yellow-500">⭐{product.rating}</p>
                </div>
        </Link>
    )
}


export default ProductCard;