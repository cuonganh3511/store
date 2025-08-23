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



// Giả sử biến `data` chứa sản phẩm hiện tại (id, name, price, image,...)

// Lấy các nút và hiển thị số lượng
const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");
const quantityEl  = document.querySelector(".quantity");
const btnBuy = document.querySelector(".btn-buy");

let quantity = 1; // số lượng mặc định
quantityEl.textContent = quantity;

// Xử lý nút tăng
btnIncrease.addEventListener("click", () => {
  quantity++;
  quantityEl.textContent = quantity;
});

// Xử lý nút giảm
btnDecrease.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityEl.textContent = quantity;
  }
});




document.addEventListener("DOMContentLoaded", () => {
  // Khi click Buy Now
 btnBuy.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // kiểm tra sản phẩm đã có trong giỏ chưa
  const index = cart.findIndex(item => item.id === data.id);

  if (index > -1) {
    cart[index].quantity += quantity; // cộng dồn số lượng
  } else {
    cart.push({
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // chuyển sang trang cart
  window.location.href = "/page/cart.html";
    alert("Bạn đã click Buy Now");

});
});