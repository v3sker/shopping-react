import Navbar from "../lib/navbar.jsx"
import { ShopItemCard } from "./ShopItemCard.jsx";
import fetchProducts from "../lib/fetchProducts.js";

let products = await fetchProducts();
console.log(products);

export default function Store() {
  return (
    <div className={`w-full flex flex-col`}>
      <Navbar />
      <main className={`my-4 flex-grow flex flex-wrap gap-6`}>
        {/*TODO: Fix items grid*/}
        {products.map((product) => (
          <ShopItemCard key={product.id} data={product} />
        ))}
      </main>
    </div>
  )
}