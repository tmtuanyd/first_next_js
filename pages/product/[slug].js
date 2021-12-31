import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const ProductScreen = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout title={slug}>
      <div>{slug}</div>
    </Layout>
  );
};

export default ProductScreen;
