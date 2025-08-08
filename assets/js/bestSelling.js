import { generateItem } from "./common.js";
import { listProducts } from "./data.js";

const listProductBestSelling = document.querySelector(
  ".all_product_best_selling"
);
const bestSelling = listProducts
  .filter((item) => item.totalRating >= 4)
  .splice(0, 4);

bestSelling.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductBestSelling.appendChild(itemElement);
});
