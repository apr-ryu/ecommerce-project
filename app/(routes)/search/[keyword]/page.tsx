// "use client";
// import React, { useCallback, useEffect, useState } from "react";

// // COMPONENTS
// import SectionWithCards from "@/app/components/section-with-cards";

// // API
// import { Products } from "@/app/statics/constants/interfaces";

// // STYLES
// import "./page.scss";

// type MyProps = {
//   params: { keyword: string };
// };

// export default function Page({ params }: MyProps) {
//   const [resultProductList, setResultProductList] = useState<Products[]>([]);

//   const searchKeyword = useCallback(
//     (allProducstList: Products[]) => {
//       let searchResultList: Products[] = [];
//       allProducstList.forEach((item) => {
//         if (item.title.toLowerCase().includes(params.keyword)) {
//           searchResultList = [...searchResultList, item];
//         }
//       });
//       setResultProductList(searchResultList);
//     },
//     [params]
//   );

//   const getProducts = useCallback(async () => {
//     const response = await fetch(`http://localhost:4000/products`, {
//       next: { revalidate: 0 },
//     });
//     let jsonResponse = await response.json();
//     searchKeyword(jsonResponse);
//   }, [searchKeyword]);

//   useEffect(() => {
//     getProducts();
//   }, [params]);

//   return (
//     <div id="search">
//       <SectionWithCards
//         classname="products"
//         title="SEARCH RESULT"
//         subtitle={params.keyword}
//         cardList={resultProductList}
//         grid={4}
//       />
//     </div>
//   );
// }
