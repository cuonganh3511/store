import * as ls from "./localStorage.js";

const generateItem = (product) => {
  return `
    <div class="product">
      <div class="btn_product">
        <div class="btn">
          <span>-${product.discount}%</span>
        </div>
        <div class="icon">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-eye"></i>
        </div>
      </div>
      <img src="${product.image}" alt="" />
      <div class="link_product">
        <button onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
    </div>
    
    <div class="info_product">
      <div class="info_text">
        <a href="/page/detail.html?id=${product.id}">${product.name}</a>
      </div>
      <div class="info_price">
        <span class="pri_1">$${product.price}</span>
        <span class="pri_2">$${product.oldPrice}</span>
      </div>
      <div class="info_evaluate">
        <div class="evaluate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="number">
          <span>(${product.totalRating})</span>
        </div>
      </div>
    </div>
  `;
};

export const addProductToList = (listElement, item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listElement.appendChild(itemElement);
}

// Hàm thêm sản phẩm vào giỏ hàng
export function addToCart(productId) {
  // Lấy giỏ hàng hiện tại từ localStorage
  let cart = ls.get("cart") || [];

  // Tìm sản phẩm trong giỏ hàng
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    // Nếu sản phẩm đã có, tăng số lượng
    existingItem.quantity += 1;
  } else {
    // Nếu sản phẩm chưa có, thêm mới với quantity = 1
    cart.push({
      id: productId,
      quantity: 1,
    });
  }

  // Lưu giỏ hàng vào localStorage
  ls.set("cart", cart);

  // Thông báo cho người dùng
  alert("Đã thêm sản phẩm vào giỏ hàng!");

  // Cập nhật số lượng giỏ hàng trên UI (nếu có)
  updateCartCount();
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng trên UI
export function updateCartCount() {
  const cart = ls.get("cart") || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Cập nhật badge số lượng giỏ hàng (nếu có element)
  const cartBadge = document.querySelector(".cart-count");
  if (cartBadge) {
    cartBadge.textContent = totalItems;
  }
}

window.addToCart = addToCart;
window.updateCartCount = updateCartCount;