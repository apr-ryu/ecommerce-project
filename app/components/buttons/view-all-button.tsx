"use client";
import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

export default function ViewAllButton() {
  const router = useRouter();
  return (
    <Button
      color="light"
      handle={(e) => {
        router.push("/shop/all-products");
        // navigate to all product
      }}
    >
      VIEW ALL PRODUCTS
    </Button>
  );
}
