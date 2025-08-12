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
			<span>${product.price}</span>
			</div>

			<div class="quantity-product width-25">
			<div class = "border-quantity" >
			<input class = "inputNumber" type="number" value="${product.quantity}">
			</div>
			</div>

			<div class="sub-product width-25">
			<span>$650</span>
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

const inputNumber = document.getElementById("inputNumber");
console.log(inputNumber);