import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortBy: string; filterBy: string };
}

const ProductPage = (props: Props) => {
  console.log(props);
  return <div>ProductPage {props.params.slug}</div>;
};

export default ProductPage;
