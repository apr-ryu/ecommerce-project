import React from "react";

// COMPONENTS
import SectionWithCards from "@/app/components/section-with-cards";
import CollectionWrapper from "./collectionWrapper";

// STYLE
import "../shop.scss";

// API
import { getData } from "@/app/utils";
import { Products } from "@/app/statics/constants/interfaces";

const getProducts = async () => {
  return getData<Products[]>("products");
};

export default async function ShopPage() {
  const response = await getProducts();
  return (
    <div id="shop">
      <CollectionWrapper response={response}>
        {/* <SectionWithCards
        classname="product"
        title="ALL PRODUCTS"
        subtitle="SHOP"
        cardList={response}
        grid={4}
      /> */}
        {/* <Servercomp /> */}
      </CollectionWrapper>
    </div>
  );
}
