import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";
import Image from "next/image";

// export const metadata = { title: "Home"}

export default async function Homepage() {
  const latestProducts = await getLatestProducts();
  // console.log("latestProducts", latestProducts);
  return (
    <div>
        <Button>ProStore</Button> 
        <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </div>
  );
}
