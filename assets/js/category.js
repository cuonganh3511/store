import { addProductToList } from "./common.js";
import { listProducts } from "./data.js";


const listProductWishlist = document.querySelector(".all_product_whislist");

listProducts.forEach((item) => addProductToList(listProductWishlist, item)
)

const listProductJusforyou = document.querySelector(".all_product_jush_for_you");
const listJusforyou = listProducts.filter((item) => item.discount > 10);

listJusforyou.forEach((item) => addProductToList(listProductJusforyou, item))


