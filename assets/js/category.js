const listProductWhishlist = document.querySelector(".all_product_whislist");
const whislist = products.filter((item) => item.isCategory);

whislist.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductWhishlist.appendChild(itemElement);
});

const listProductJustForYou = document.querySelector(".all_product_jush_for_you");
const justForYou = products.filter((item) => item.isJustForYou);

justForYou.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductJustForYou.appendChild(itemElement);
});
