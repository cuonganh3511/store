import * as ls from "./localStorage.js";
import { listProducts } from "./data.js";

const cart = ls.get("cart") 
const products = cart.map(item => {		
	const product = listProducts.find(e => e.id === item.id)
	return {...item, ...product}
})
console.log(products);
const templateCart = (product) => {
	return `
			<div class="image-product width-25">
			<span class="image"
				><img src="${product.image}" alt=""
			/></span>
			<span class="name">${product.name}</span>
			</div>

			<div class="price-product width-25">
			<span>${(product.price).toLocaleString()}</span>
			</div>

			<div class="quantity-product width-25">
			<div class = "border-quantity" >
			<input class = "inputNumber" type="number" value="${product.quantity}">
			</div>
			</div>

			<div class="sub-product width-25">
			<span>${(product.price).toLocaleString()}</span>
			</div>
	`
}

const addProductToCart = (listElement, item) => { 
	const itemElement = document.createElement("div"); // tuong ung voi file html la thẻ div.product
	itemElement.classList.add("product");
	itemElement.setAttribute("data-id", item.id);
	itemElement.innerHTML = templateCart(item);
	listElement.appendChild(itemElement);
}

const listElement = document.querySelector(".body-main");

products.forEach(element => {
	addProductToCart(listElement, element)
});

listElement.addEventListener("input", (e) => {
	if(e.target.classList.contains("inputNumber")) {
		const productElement = e.target.closest(".product");
		const id = Number(productElement.getAttribute("data-id"));
		const quantity = Math.max(1, Number(e.target.value));

		const productData = products.find((e) => e.id === id);
		const subProduct = productElement.querySelector(".sub-product span");
		subProduct.textContent = (productData.price * quantity).toLocaleString();

		// cap nhat tren local storage
		const cart = ls.get("cart")
		const cartItem = cart.find((e) => e.id === id)
		if(cartItem) {
			cartItem.quantity = quantity;
			ls.set("cart", cart)
		}
	}
})