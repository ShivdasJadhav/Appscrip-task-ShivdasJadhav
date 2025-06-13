import Hero from "@/components/Hero";
import FilterClientWrapper from "@/components/filters/FilterClientWrapper"; // <- only this part is client
import Products from "@/components/product/Products";
import styles from "@/styles/Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.container}>
        <FilterClientWrapper />
        <Products />
      </div>
    </main>
  );
}
