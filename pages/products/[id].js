import { Fragment } from "react";
import ProductDetail from "../../components/product/ProductDetail";
import ProductHero from "../../components/product/ProductHero";
import Information from "../../components/Information";
import {
  getDetailProduct,
  getFeaturedProducts,
  getProducts,
} from "../../data/products";
import {
  getDetailProductMM,
  getFeaturedProductsMM,
} from "../../data/productsMM";
import { getClientSuccess } from "../../data/clientSuccess";
import { getClientSuccessMM } from "../../data/clientSuccessMM";

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  const product = getDetailProduct(id);
  const featuredProducts =getFeaturedProducts();
  const items = getClientSuccess();

  return {
    props: {
      product,
      featuredProducts,
      items,
    },
  };
}

export async function getStaticPaths() {
  const products = getProducts();
  const paths = [];

  products.forEach((product) => {
      paths.push({ params: { id: product.id } });
  });
  

  return {
    paths,
    fallback: false,
  };
}

export default function ProductDetailPage({
  product,
  featuredProducts,
  items,
}) {
  return (
    <Fragment>
      <ProductHero featuredProducts={featuredProducts} />
      <ProductDetail product={product} />
      <Information items={items} />
    </Fragment>
  );
}
