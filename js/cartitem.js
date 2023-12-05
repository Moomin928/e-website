import { cart } from "../js/cart.js"
import { products } from "../js/data/cartdata.js"
import { removeFromCart } from "../js/cart.js"


let cartSummaryHTML = '';



let shoppingSummaryHTML = '';
cart.forEach((cartItem) => {
	const productId = cartItem.productId;

	let matchingProduct;
	let shoppingProduct;

	products.forEach((product) => {
		if (product.id === productId) {
			matchingProduct = product;
			shoppingProduct = product;

		}
	});






	cartSummaryHTML +=

		`<div class="cart-item-container
	js-cart-item-container-${matchingProduct.id}">
							<div class="cart-item-box">
									<div class="delivery-date">
											Delivery date: Tuesday, Dec 21
									</div>

									<div class="cart-item-details-grid">
											<img class="product-img" src="${matchingProduct.img}" width="182px" height="182px">

											<div class="cart-item-details">
													<div class="product-name">
															${matchingProduct.name}
													</div>
													<div class="product-price">
															$${(matchingProduct.priceCents / 100).toFixed(2)}
													</div>
													<div class="product-platformname">
															<a href="#">Platform: PS5</a>
													</div>
													<div class="product-quantity">
															<span class="product-quantity-container">
																	Quantity: <span class="quantity-label">${cartItem.quantity}</span>
															</span>
															<span class="update-quantity-link link-primary js-updat-link data-product-id="${matchingProduct.id}">
																	Update
															</span>
															<span class="delete-quantity-link link-primary js-delete-link"
																	data-product-id="${matchingProduct.id}">
																	Delete
															</span>
													</div>
											</div>
									</div>
							</div>
					</div>`
	shoppingSummaryHTML += `<div class="shopping-itemlist js-shopping-box-${shoppingProduct.id}">
					<div class="itemname">
							<a href="#">${shoppingProduct.name}</a>
					</div>
					<div class="price">
							${(shoppingProduct.priceCents / 100).toFixed(2)}$
					</div>
			</div>
			
			`

});
let cartQuantity = 0;
cart.forEach((cartItem) => {
	cartQuantity += cartItem.quantity;
});
document.querySelector('.js-cart-quantity')
	.innerHTML = cartQuantity;
document.querySelector(' .js-shopping-summary')
	.innerHTML = shoppingSummaryHTML;
document.querySelector(' .js-order-summary')
	.innerHTML = cartSummaryHTML;
document.querySelectorAll('.js-delete-link')
	.forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;
			removeFromCart(productId);
			const box = document.querySelector(`.js-shopping-box-${productId}`);
			const container = document.querySelector(
				`.js-cart-item-container-${productId}`
			);
			container.remove();
			box.remove();
		});

	});


