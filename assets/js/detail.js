import { generateItem } from "./common.js";
import { products } from "./mockData.js";
import { data } from "./data.js";

const listProductDetail = document.querySelector(".all_product_related_title");
const relatedTitle = products.filter((item) => item.isBestSelling).splice(0, 4);

relatedTitle.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductDetail.appendChild(itemElement);
});


const listData = document.querySelector(".detail-product");
const detailLeft = data.find((item) => item.id === 1);

listData.innerHTML = `<div class="detail-left">
            <div class="item-1">
              <div class="item">
                <img src="${detailLeft.gallery[0]}" alt="" />
              </div>
            </div>
            <div class="item-2">
              <div class="item">
                <img src="${detailLeft.gallery[1]}" alt="" />
              </div>
            </div>
            <div class="item-3">
              <div class="item">
                <img src="${detailLeft.gallery[2]}" alt="" />
              </div>
            </div>
            <div class="item-4">
              <div class="item">
                <img src="${detailLeft.gallery[3]}" alt="" />
              </div>
            </div>

            <div class="item-5">
              <div class="image">
                <img src="${detailLeft.image}" alt="" />
              </div>
            </div>
          </div>

          <div class="detail-right">
            <div class="price-product">
              <h2>${detailLeft.name}</h2>
              <div class="evaluate-product">
                <div class="evaluate">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div class="number">
                  <span>(${detailLeft.review})</span>
                </div>
                <span class="colum">|</span>
                <span class="text">In Stock</span>
              </div>
              <div class="price">
                <span>$${detailLeft.price}</span>
              </div>
              <div>
                <p>
                  ${detailLeft.description}
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
                    <span class="size">${detailLeft.size}</span>
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

