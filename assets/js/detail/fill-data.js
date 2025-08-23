import { listProducts } from "../data.js";

// Lấy id sản phẩm từ query string
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

const detail = document.querySelector(".detail-product");

const data = listProducts.find((item) => item.id == id);

const genGallery = data?.gallery
  ?.map((image, index) => {
    return `
      <div class="item-${index + 1}">
        <div class="item">
          <img src="${image}" alt="" />
        </div>
      </div>
    `;
  })
  .join("");

detail.innerHTML = `
  <div class="detail-left">
      ${genGallery || ""}
      <div class="item-5">
        <div class="image">
            <img src="${data.image}" alt="" />
        </div>
      </div>
  </div>

  <div class="detail-right">
    <div class="price-product">
      <h2>${data?.name}</h2>
      <div class="evaluate-product">
        <div class="evaluate">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="number">
          <span>(${data?.review})</span>
        </div>
        <span class="colum">|</span>
        <span class="text">In Stock</span>
      </div>
      <div class="price">
        <span>${(data?.price).toLocaleString()}</span>
      </div>
      <div>
        <p>${data?.description}</p>
      </div>
    </div>

    <div class="line"></div>

    <div class="colors-product">
      <div class="colors">
        <span class="size-text">Colours:</span>
        <input type="radio" name="color" class="btn-blue">
        <input type="radio" name="color" class="btn-red">
      </div>

      <div class="sizes-product">
        <span class="size-text">Size:</span>
        <ul>
          <li>
            <span class="size">${data?.size}</span>
          </li>
        </ul>
      </div>

      <div class="buy-product">
        <div class="select">
          <ul>
            <li class="change">
              <button class="center btn-decrease">-</button>
            </li>
            <li class="number">
              <span class="center quantity">1</span>
            </li>
            <li class="change">
              <button class="center btn-increase">+</button>
            </li>
          </ul>
        </div>
        <div class="button">
          <button type="button" class="btn-buy">Buy Now</button>
        </div>
        <div class="icon">
          <div class="heart">
            <img src="/assets/icon/heart.svg" alt="">
          </div>
        </div>
      </div>

      <div class="ship-product">
        <div class="ship">
          <div class="icon">
            <img src="/assets/icon/carfast.svg" alt="" />
          </div>
          <div class="textes">
            <span class="title">Free Delivery</span>
            <span class="text">Enter your postal code for Delivery Availability</span>
          </div>
        </div>

        <div class="return">
          <div class="icon">
            <img src="/assets/icon/return.svg" alt="" />
          </div>
          <div class="textes">
            <span class="title">Return Delivery</span>
            <span class="text">Free 30 Days Delivery Returns. Details</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// gắn sự kiện 
const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");
const quantityEl  = document.querySelector(".quantity");
const btnBuy      = document.querySelector(".btn-buy");

let quantity = 1;
quantityEl.textContent = quantity;

btnIncrease.addEventListener("click", () => {
  quantity++;
  quantityEl.textContent = quantity;
});

btnDecrease.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityEl.textContent = quantity;
  }
});

btnBuy.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(item => item.id === data.id);
  if (index > -1) {
    cart[index].quantity += quantity;
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
  window.location.href = "/page/cart.html";
});
