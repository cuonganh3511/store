const listProductRelated = document.querySelector(".all_product_related");
const relateds = products.filter((item) => item.isRelated).splice(0, 4);

relateds.forEach((item) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("product_sale");
  itemElement.setAttribute("data-id", item.id);
  itemElement.innerHTML = generateItem(item);
  listProductRelated.appendChild(itemElement);
});
