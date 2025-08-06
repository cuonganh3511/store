import { generateItem } from "./common.js";
import { products } from "./mockData.js";

const listProductFlashSale = document.querySelector(".all_product_flash_sale");
const flashSale = products.filter((item) => item.isFlashSale).splice(0, 4);

flashSale.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductFlashSale.appendChild(itemElement);
});
