import { generateItem } from "./common.js";
import { listProducts } from "./data.js";

const listProductFlashSale = document.querySelector(".all_product_flash_sale");
const flashSale = listProducts.filter((item) => item.discount > 15)
.sort(() => Math.random() - 0.5)
.splice(0, 4);

flashSale.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductFlashSale.appendChild(itemElement);
});
