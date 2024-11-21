"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "@/app/components/buttons/button";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// STYLES
import "./product-detail.scss";

// API
import { Products } from "@/app/statics/constants/interfaces";
import { useCartContext } from "@/app/statics/constants/cartContext";

export default function ProductDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [productDetail, setProductDetail] = useState<Products | null>(null);
  const [count, setCount] = useState<number>(1);
  const { dispatch } = useCartContext();

  const getProductDetail = useCallback(async (id: string) => {
    const response = await fetch(`http://localhost:4000/products/${id}`, {
      next: { revalidate: 0 },
    });
    const jsonResponse = await response.json();
    setProductDetail(jsonResponse);
  }, []);

  const handleOnclick = (action: string) => {
    if (action === "add") {
      setCount(count + 1);
    } else if (action === "subtract" && count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    id && getProductDetail(id);
  }, []);

  return (
    <div id="product-detail">
      {productDetail && (
        <div className="scroll-wrapper">
          <div className="left scroll-box">
            <div className="description-wrapper">
              <p className="product-name bold">{productDetail.title}</p>
              <p className="product-price bold">${productDetail.subtitle}</p>
              <p className="product-description">{productDetail.description}</p>
              <div className="product-spec">
                <p className="bold"> Product Specs:</p>
                <p>{productDetail.specs}</p>
              </div>
              {productDetail.note.length > 0 &&
                productDetail.note.map((note, index) => (
                  <p className="product-note" key={index}>
                    • {note}
                  </p>
                ))}
              <div className="count-wrapper">
                <div
                  onClick={() => {
                    handleOnclick("subtract");
                  }}
                >
                  -
                </div>
                <p>{count}</p>
                <div
                  onClick={() => {
                    handleOnclick("add");
                  }}
                >
                  +
                </div>
              </div>
              <Button
                color="dark"
                handle={() =>
                  dispatch({
                    type: "add",
                    payload: {
                      name: productDetail.title,
                      price: productDetail.subtitle,
                      quantity: count,
                      thumbnail: productDetail.img[0],
                    },
                  })
                }
              >
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className="right scroll-box">
            {productDetail.img.map((src, index) => (
              <div className="img-wrapper" key={index}>
                <Image
                  src={src}
                  alt={`${index}`}
                  quality={100}
                  fill={true}
                  priority={true}
                  sizes="100%"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
