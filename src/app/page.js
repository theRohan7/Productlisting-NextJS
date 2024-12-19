import Hero from "@/components/Hero";
import ProductListing from "@/components/ProductListing";
import { getproducts } from "@/services/productServices";


export default async function Home() {
  const initialProducts = await getproducts(12);
  
  return (
    <>
      <Hero />
      <ProductListing initialProducts={initialProducts} />
      
    </>
  );
}

