import React from "react";
import Link from "next/link";
import  { useRouter } from "next/router";

const products = (products) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1> List of products</h1>
      <h1>
        {products.id} {products.title} {products.price}
        <p>{products.description}</p>
      </h1>
      ;
    </div>
  );
};

export default products;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/ ${params.productid} `
  );
  const data = await response.json();
  console.log(data)
  return {
    props: {
      products: data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { productid:'1'} }],
    fallback: true,
  };
}
