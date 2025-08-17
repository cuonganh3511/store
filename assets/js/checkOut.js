import * as ls from "./localStorage.js";
import { listProducts } from "./data.js";
import { updateCartCount } from "./common.js";


const listElement = document.querySelector(".products");
const listSubTotal = document.querySelectorAll(".subTotal")

const getProducts = () => {
	const cart = ls.get("cart")
	const products = cart.map(item => {
		const product = listProducts.find(e => e.id === item.id)
		return { ...item, ...product }
	})
	return products;
}

const templateCheckOut = (product) => {
	return `
		<div class="info-product">
			<div class="image-product">
				<span class="image">
				<img src="${product.image}" alt="" />
				</span>
				<span class="name">${product.name}</span>
			</div>
			<div class="price-product">
				<span>${(product.price * product.quantity).toLocaleString()}</span>
			</div>
		</div>
	`;
}

const initCartCheckOut = () => {
	const products = getProducts();
	const addProductToCheckOut = (listElement, item) => {
		const itemElement = document.createElement("div"); // tuong ung voi file html la thẻ div.product
		itemElement.classList.add("product");
		itemElement.setAttribute("data-id", item.id);
		itemElement.innerHTML = templateCheckOut(item);
		listElement.appendChild(itemElement);
	}


	products.forEach(element => {
		addProductToCheckOut(listElement, element)
	});
}
initCartCheckOut();

const pushTotalCheckOut = () => {
	// lấy dữ liệu productsproducts
	const products = getProducts();

	// nếu có products -> lọc qua các phần tử và lấy ra 2 giá trị price và quantity
	if(products.length !== 0) {
		let productData = products.map((e) => {
			let tong = e.quantity * e.price;
			return tong;
			// dùng hàm reduce de cộng tổng của các tong lại
		}).reduce((x, y) => x + y, 0).toLocaleString();
		console.log(productData);

		// lặp qua các el trong listSubTotal -> in ra html
		listSubTotal.forEach((el) => el.textContent = productData)
	}else return;
}

updateCartCount();
document.addEventListener("DOMContentLoaded", () => {
  pushTotalCheckOut();
});
