import ProductDetails from "@/components/ProductDetails";
import { getProductById } from "@/services/productServices";
import { notFound } from "next/navigation"

export default  async function  ProductDetailsPage  ({params}) {
    const {id} = await params
  try {
    const product = await getProductById(id);
    return <ProductDetails product={product} />
  } catch (error) {
    notFound();
  }
}