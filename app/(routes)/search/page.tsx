"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// COMPONENTS
import SectionWithCards from "@/app/components/section-with-cards";

// API
import { Products } from "@/app/statics/constants/interfaces";

// STYLES
import "./search.scss";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("keyword");

  const [allProducstList, setAllProductsList] = useState<Products[]>([]);
  const [resultProductList, setResultProductList] = useState<Products[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);

  const searchKeyword = (allProducstList: Products[]) => {
    let searchResultList: Products[] = [];
    allProducstList.forEach((item) => {
      if (search && item.title.toLowerCase().includes(search)) {
        searchResultList = [...searchResultList, item];
      }
    });
    setResultProductList(searchResultList);
    setNoResult(searchResultList.length === 0);
  };

  const getProducts = useCallback(async () => {
    const response = await fetch(`http://localhost:4000/products`, {
      next: { revalidate: 0 },
    });
    const jsonResponse = await response.json();
    setAllProductsList(jsonResponse);
  }, []);

  useEffect(() => {
    search && getProducts();
  }, []);

  useEffect(() => {
    allProducstList.length > 0 && searchKeyword(allProducstList);
  }, [allProducstList, search]);

  return (
    <div id="search">
      <SectionWithCards
        classname="product"
        title="SEARCH RESULT"
        subtitle={search ? search : ""}
        cardList={resultProductList}
        noResult={noResult}
        grid={4}
      />
    </div>
  );
}
