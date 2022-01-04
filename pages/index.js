// import Head from "next/head";
// import Image from "next/image";
import Layout from "../components/Layout";
import Product from "../models/product";
import db from "../utils/db";
// import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { products } = props;
  console.log(products);
  return (
    <Layout title={"Next Amazona"}>
      <div>
        <h1>Products</h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
