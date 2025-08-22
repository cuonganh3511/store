import * as ls from "./localStorage.js";
import { listProducts } from "./data.js";
import { updateCartCount } from "./common.js";


const listElement = document.querySelector(".products");
const listSubTotal = document.querySelectorAll(".subTotal") // lấy ra tất 2 class subTotal

// lay san pham tu local => loc ra lay thong tin cac don hang
const getProducts = () => {
	const cart = ls.get("cart")
	const products = cart.map(item => {
		const product = listProducts.find(e => e.id === item.id)
		return { ...item, ...product }
	})
	return products;
}


// tao template html de in ra gia tri san pham
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

// khoi tao
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

// Hàm push total vào phần hiển thị và tính tiền 
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


// Khi trang web vừa load xong phần HTML, sẽ tự động gọi hàm pushTotalCheckOut() để xử lý
document.addEventListener("DOMContentLoaded", () => {
  pushTotalCheckOut();
});


// =================


// Lấy nút btnbtn
const btnOrder = document.querySelector("#submit");

// add sự kiện click cho btn
btnOrder.addEventListener("click", (e) => {
  e.preventDefault();

  // Lấy thông tin khách hàng từ thẻ input
  const customer = {
    name: document.getElementById("name").value,
    nameCompany: document.getElementById("nameCompany").value,
    address: document.getElementById("address").value,
    optional: document.getElementById("optional").value,
    town: document.getElementById("town").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
  };

  // Lấy phương thức thanh toán
  let aboutPay = "bank"; // mặc định
  const cashPay = document.getElementById("cashPay");
  if (cashPay.checked) {
    aboutPay = "cash";
  }

  // Lấy thông tin sản phẩm từ local
  const products = getProducts();
  const infoProducts = products.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    price: item.price,
    quantity: item.quantity,
  }));

  // Tạo object đơn hàng
  const order = {
    id: Date.now(), // id đơn hàng
    customer,
    aboutPay,
    products: infoProducts,
    createdAt: new Date().toISOString(),
  };

  // Lấy danh sách đơn hàng cũ trong local
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  // Lưu lại
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Cảm ơn bạn đã đặt hàng!");

  // Reset form
  form.reset();

});

updateCartCount();