import { cart } from "../js/cart.js"
import { products } from "../js/cartdata.js"

function getProduct(productId) {
	let matchingProduct;

	products.forEach((product) => {
		if (product.id === productId) {
			matchingProduct = product;
		}
	});

	return matchingProduct;
}
let totalSummaryHTML = '';
let matchingProductCents = 0;
let totalPrice = 0;
cart.forEach((cartItem) => {
	{
		const product = getProduct(cartItem.productId);
		matchingProductCents += product.priceCents * cartItem.quantity;
		totalPrice = matchingProductCents;
	}


})
totalSummaryHTML += `<div class="total">
Total: ${(matchingProductCents / 100).toFixed(2)}$
</div>`
document.querySelector('.js-total-summary')
	.innerHTML = totalSummaryHTML;

