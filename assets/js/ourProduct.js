import { addProductToList } from "./common.js";
import { listProducts } from "./data.js";

const listProductourProduct = document.querySelector(
  ".all_product_our_product"
);
const ourProduct = listProducts.filter((item) => item)
.sort(() => Math.random() - 0.5)
.splice(0, 8);

ourProduct.forEach((item) => addProductToList(listProductourProduct, item) );
