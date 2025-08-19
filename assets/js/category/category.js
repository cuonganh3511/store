import { addProductToList } from "../common.js";
import { listProducts } from "../data.js";


const listProductWishlist = document.querySelector(".all_product_whislist");
const listProductJusforyou = document.querySelector(".all_product_jush_for_you");

// loc nhung item co discount > 10
const listJusforyou = listProducts.filter((item) => item.discount > 10);
// in ra file html da luu o addProductToList
listJusforyou.forEach((item) => addProductToList(listProductJusforyou, item))


//  window.location.search : “phân tích” chuỗi query thành cặp key = value. => category = phone,laptop..
const params = new URLSearchParams(window.location.search);
const category = params.get("category"); // lấy giá trị đằng sau category = phone,laptop..

// tao ham truyen gia tri cua category vao
const findProductWidthParams = (valueFind) => {
	const findWithCatrgory = listProducts.filter((item) => item.category.toLowerCase() == valueFind.toLowerCase() )
		findWithCatrgory.forEach((item) => {
			addProductToList(listProductWishlist, item)
		})
}
findProductWidthParams(category);
