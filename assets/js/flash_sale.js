import { addProductToList } from "./common.js";
import { listProducts } from "./data.js";

const listProductFlashSale = document.querySelector(".all_product_flash_sale");
const flashSale = listProducts.filter((item) => item.discount > 15)
.sort(() => Math.random() - 0.5)
.splice(0, 4);

flashSale.forEach((item) => addProductToList(listProductFlashSale, item));
