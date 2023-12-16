// Save the HTML Data
import { heart } from "../js/cart.js"
import { cart } from "../js/cart.js"
import { saveToStorage } from "../js/cart.js"
import { products } from "../js/cartdata.js"


let productsHTML = "";
products.forEach((product) => {
  productsHTML += ` <div class="product-container">
	<div class="product-img-container">
			<img src="${product.img}"alt="">
    
	</div>
	<div class="product-name limit-text-to-2-lines">
	${product.name}
	</div>
	<div class="product-price">
	$${(product.priceCents / 100).toFixed(2)}
	</div>
	<div class="product-quantity-container">
			<select>
					<option selected value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
			</select>
	</div>
	<div class="product-spacer"></div>
	<button class="add-to-cart js-add-to-cart" data-product-id="${product.id}">
			<p>Add to Cart</p>
	</button>
	<button class="add-to-heart js-add-to-heart" data-product-id="${product.id
    }">
			<p>Add to Heart</p>
	</button>
</div>
`;
});
//Generate the Html

// document.querySelector('.js-products-grid').innerHTML = productsHTML;
// console.log(productsHTML)
//add the quantity number for the cart
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener(`click`, () => {
    const productId = button.dataset.productId;
    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
    saveToStorage();

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector(" .js-cart-quantity").innerHTML = cartQuantity;
    console.log(cartQuantity);
    console.log(cart);
  });
});
//add the quantity number for the heart
document.querySelectorAll(".js-add-to-heart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    let matchingItem;
    heart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity = 1;
    } else {
      heart.push({
        productId: productId,
        quantity: 1,
      });
    }
    let heartQuantity = 0;
    heart.forEach((item) => {
      heartQuantity += item.quantity;
    });
    document.querySelector(".js-heart-quantity").innerHTML = heartQuantity;
    console.log(heartQuantity);
    console.log(heart);
  });
});

