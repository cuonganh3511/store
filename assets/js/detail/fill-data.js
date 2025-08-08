import { listProducts } from "../data.js";

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
                ${genGallery}
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
                <span>$${data?.price}</span>
              </div>
              <div>
                <p>
                  ${data?.description}
                </p>
              </div>
            </div>

            <div class="line"></div>

            <div class="colors-product">
              <div class="colors">
                <span class="size-text">Colours:</span>
                <input type="radio" name="color" class="btn-blue"></input>
                <input type="radio" name="color" class="btn-red"></input>
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
                <d.buyiv class="select">
                  <ul>
                    <li class="change">
                      <button class="center">-</button>
                    </li>
                    <li class="number">
                      <span class="center">2</span>
                    </li>
                    <li class="change">
                      <button class="center">+</button>
                    </li>
                  </ul>
                </d.buyiv>
                <div class="button">
                  <button>Buy Now</button>
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
                    <span class="text"
                      >Enter your postal code for Delivery Availability</span
                    >
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
                  <span></span>
                </div>
              </div>
            </div>
          </div>`;
