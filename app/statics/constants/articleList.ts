import { StaticImageData } from "next/image";
import img01 from "@/public/images/blog01.jpg";
import img02 from "@/public/images/blog02.jpg";
import img03 from "@/public/images/blog03.jpg";

type BlogArticles = {
  id: number;
  title: string;
  preview: string;
  img: StaticImageData;
};

const ArticleList: BlogArticles[] = [
  {
    id: 1,
    title: "RECIPE: CLAYPOT SESAME OIL CHICKEN RICE",
    preview:
      "Inspired by a Taiwanese dish Sesame Oil Chicken Soup (麻油雞), this dish is essentially a non-soup version of the Taiwanese dish. ",
    img: img02,
  },
  {
    id: 2,
    title: "WE ALL NEED SOME MATCHA IN OUR LIVES",
    preview:
      "What comes to mind with the word “matcha”? A matcha latte? Your favorite cafe? ",
    img: img01,
  },
  {
    id: 3,
    title: "GUIDE: CERAMIC POTTERY VS. PORCELAIN",
    preview:
      "More often than not, “ceramics” is used as a blanket term to describe both pottery (earthenware) and porcelain. ",
    img: img03,
  },
];
export default ArticleList;
