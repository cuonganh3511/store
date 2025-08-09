import { addProductToList } from "./common.js";
import { listProducts } from "./data.js";

const listProductBestSelling = document.querySelector(
  ".all_product_best_selling"
);
const bestSelling = listProducts
  .filter((item) => item.totalRating >= 4)
  .splice(0, 4);

bestSelling.forEach((item) => addProductToList(listProductBestSelling, item) );
