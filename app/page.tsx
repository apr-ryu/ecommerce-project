import React from "react";

// COMPONENTS
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";
import ViewAllButton from "./components/buttons/view-all-button";

// STATICS
import swiperList from "./statics/constants/swiperList";

// API
import { Products, Articles } from "./statics/constants/interfaces";
import { getData } from "./utils";

//STYLE
import "./home.scss";

const getProducts = async () => {
  return getData<Products[]>("products");
};

const getArticles = async () => {
  return getData<Articles[]>("articles");
};

export default async function Home() {
  const productList = await getProducts();
  const articleList = await getArticles();
  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
      </div>
      <SectionWithCards
        classname="product"
        title="FEATURED PRODUCTS"
        subtitle="NEW IN"
        cardList={productList}
        grid={4}
        maxDisplay={4}
      />
      <ViewAllButton />
      <SectionWithCards
        classname="blog"
        subtitle="BLOG"
        cardList={articleList}
        grid={3}
        borderTop
      />
    </div>
  );
}
