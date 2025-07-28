const productFlashSale = [
  {
    name: "iPhone 16 Pro Max 256GB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    price: 100,
    oldPrice: 200,
    discount: 50,
    ratting: 4,
    totalRating: 5
  },
  {
    name: "iPhone 16 Pro Max 256GB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    price: 100,
    oldPrice: 200,
    discount: 50,
    ratting: 4,
    totalRating: 5
  },
  {
    name: "iPhone 16 Pro Max 256GB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    price: 100,
    oldPrice: 200,
    discount: 50,
    ratting: 4,
    totalRating: 5
  },
  {
    name: "iPhone 16 Pro Max 256GB",
    image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    price: 100,
    oldPrice: 200,
    discount: 50,
    ratting: 4,
    totalRating: 5
  },
  
]


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
        
`
}

const listProduct = document.querySelector(".all_product")

productFlashSale.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id)
  itemElement.innerHTML = generateItem(item)
  listProduct.appendChild(itemElement);
});

// document.getElementById('product-list').addEventListener('click', function(e) {
//     const productItem = e.target.closest('.product-item');
//     if (productItem) {
//         const productId = productItem.dataset.id;
//         // Chuyển đến trang chi tiết
//         window.location.href = `detail.html?id=${productId}`;
//     }
// });