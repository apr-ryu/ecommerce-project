import { StaticImageData } from "next/image";

export type Products = {
  id: string;
  collection?: string;
  title: string;
  subtitle: number;
  img: StaticImageData[];
  description: string;
  specs: string;
  note: string[];
};

export type Articles = {
  id: number;
  title: string;
  preview: string;
  img: StaticImageData[];
};
