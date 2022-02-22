import { Fragment } from "react";
import OurProducts from "../../components/products/OurProducts";
import ProductsHero from "../../components/products/ProductsHero";
import Information from "../../components/Information";
import { getProducts } from "../../data/products";
import { getClientSuccess } from "../../data/clientSuccess";
import {  getProductsMM } from "../../data/productsMM";
import { getClientSuccessMM } from "../../data/clientSuccessMM";

export async function getStaticProps(context) {

  const products = getProducts();
  
  const items = getClientSuccess();

  return {
    props: {
      products,
      items,
    },
  };
}

export default function ProductsPage({ products, items }) {
  return (
    <Fragment>
      <ProductsHero />
      <OurProducts products={products} />
      <Information items={items} />
    </Fragment>
  );
}
