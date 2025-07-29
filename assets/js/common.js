const generateItem = (product) => {
  return `
        <a href="/page/detail.html?id=${product.id}">
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
              <a href="#">Add To Cart</a>
            </div>
          </div>

          <div class="info_product">
            <div class="info_text">
              <span>${product.name}</span>
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
        </a>
`;
};
