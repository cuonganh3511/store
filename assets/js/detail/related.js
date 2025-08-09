import { addProductToList } from "../common.js";
import { listProducts } from "../data.js";

const searchParams = new URLSearchParams(window.location.search);
// Dùng để đọc, lấy hoặc thao tác với các tham số trong URL, rất hay dùng khi bạn cần lấy dữ liệu từ URL như id sản phẩm, tên người dùng, token xác thực,...
const id = searchParams.get("id");

const listProductDetail = document.querySelector(".all_product_related_title");
const currentCategory = listProducts.find((item) => item.id == id)?.category;
const relatedTitle = listProducts
  .filter((item) => item.category === currentCategory && item.id != id) // item.id != id : loai bo chinh n
  .sort(() => Math.random() - 0.5)  // trộn mảng ngẫu nhiên
  .splice(0, 4);

relatedTitle.forEach((item) => addProductToList(listProductDetail, item));
