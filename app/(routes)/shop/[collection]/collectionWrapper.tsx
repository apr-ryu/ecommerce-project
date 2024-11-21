"use client";
import SectionWithCards from "@/app/components/section-with-cards";
import React, { ReactNode, useEffect, useState } from "react";
import { Products } from "@/app/statics/constants/interfaces";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

type MyProps = {
  response: Products[];
};

export default function CollectionWrapper({ response }: MyProps) {
  const params = useParams();

  if (
    params.collection !== "all-products" &&
    params.collection !== "living" &&
    params.collection !== "kitchen%26dining"
  ) {
    notFound();
  }

  const [filteredResponse, setFilteresResponse] = useState<Products[]>([]);

  const filterResponse = (params: string) => {
    let sampleArray: Products[] = [];
    response.forEach((element) => {
      if (element.collection === params) {
        sampleArray = [...sampleArray, element];
      }
    });
    setFilteresResponse(sampleArray);
  };

  useEffect(() => {
    params.collection === "all-products" && setFilteresResponse(response);
    params.collection === "living" && filterResponse("living");
    params.collection === "kitchen%26dining" &&
      filterResponse("kitchen&dining");
  }, []);

  return (
    (params.collection === "all-products" ||
      params.collection === "living" ||
      params.collection === "kitchen%26dining") && (
      <SectionWithCards
        classname="product"
        title="SHOP"
        subtitle={
          params.collection === "all-products"
            ? "ALL PRODUCTS"
            : params.collection === "living"
            ? "LIVING"
            : params.collection === "kitchen%26dining"
            ? "KITCHEN & DINING"
            : ""
        }
        cardList={filteredResponse}
        grid={4}
      />
    )
  );
}
