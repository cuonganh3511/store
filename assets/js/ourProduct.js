import { generateItem } from "./common.js";
import { listProducts } from "./data.js";

const listProductourProduct = document.querySelector(
  ".all_product_our_product"
);
const ourProduct = listProducts.filter((item) => item)
.sort(() => Math.random() - 0.5)
.splice(0, 8);

ourProduct.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductourProduct.appendChild(itemElement);
});
