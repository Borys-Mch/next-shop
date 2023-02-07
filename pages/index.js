import styles from "@/styles/Home.module.css";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Products />
      </main>
    </>
  );
}
