import Product from "@/components/product/Product";
import styles from "@/styles/Products.module.css";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // Ensures server-side fetching on every request
  });
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
