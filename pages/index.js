import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Products />
        </main>
      </Layout>
    </>
  );
}
