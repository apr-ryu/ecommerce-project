"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export type AccordianItem = { title: string; body: string }[];
type MyProps = { data: AccordianItem };

export default function AccordionBox({ data }: MyProps) {
  return (
    <Accordion variant="splitted">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={`accordion ${index}`}
          title={item.title}
        >
          {item.body}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
