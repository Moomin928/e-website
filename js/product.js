// Save the HTML Data
const products = [
	{
		img: "PS-images/baldurs-gate.jpeg",
		name: `Balurs Gate`,
		priceCents: 5800,

	},
	{
		img: "PS-images/call-of-duty.jpeg",
		name: `Call Of Duty`,
		priceCents: 4900,

	},
	{
		img: "PS-images/death-standing.jpeg",
		name: `Death Standing`,
		priceCents: 3900,

	},
	{
		img: "PS-images/diablo.jpeg",
		name: `Diablo`,
		priceCents: 5900,

	},
	{
		img: "PS-images/elden-ring.jpeg",
		name: `Elden Ring`,
		priceCents: 5900,

	},
	{
		img: "PS-images/farcry.jpeg",
		name: `Farcy`,
		priceCents: 5900,

	},
	{
		img: "PS-images/final-fantasy.jpeg",
		name: `Final Fantasy`,
		priceCents: 5900,

	},
	{
		img: "PS-images/gran-turismo.jpeg",
		name: `Gran Turismo 7`,
		priceCents: 5900,

	},
	{
		img: "PS-images/gta.jpeg",
		name: `Grand Theft Auto V`,
		priceCents: 5900,

	},
	{
		img: "PS-images/hogwarts-legacy.jpeg",
		name: 'Hogwarts Legacy',
		priceCents: 5900,
	},
	{
		img: "PS-images/horizon.jpeg",
		name: `Horizon`,
		priceCents: 5800,
	},
	{
		img: "PS-images/jedi.jpeg",
		name: `Judi Fall Order`,
		priceCents: 5900,
	},
	{
		img: "PS-images/lies-of-p.jpeg",
		name: `Lies Of P`,
		priceCents: 5900,
	},
	{
		img: "PS-images/mirage.jpeg",
		name: `Assassins Creed Mirage`,
		priceCents: 5900,
	},
	{
		img: "PS-images/spider-man.jpeg",
		name: `Spider-Man`,
		priceCents: 5900,
	},
	{
		img: "PS-images/the-witcher.jpeg",
		name: `The Witcher`,
		priceCents: 5900,
	},
];
let productsHTML = '';

products.forEach((product) => {
	productsHTML += ` <div class="product-container">
	<div class="product-img-container">
			<img src="${product.img}"alt="">
	</div>
	<div class="product-name limit-text-to-2-lines">
	${product.name}
	</div>
	<div class="product-price">
	$ ${(product.priceCents / 100).toFixed(2)}
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
	<button class="add-to-cart js-add-to-cart" data-product-name="${product.name}">
			<p>Add to Cart</p>
	</button>
	<button class="add-to-heart js-add-to-heart" data-product-name="${product.name}">
			<p>Add to Heart</p>
	</button>
</div>
`;
});
//Generate the Html
document.querySelector('.js-products-grid').innerHTML = productsHTML;
//add the quantity number for the cart
document.querySelectorAll('.js-add-to-cart')
	.forEach((button) => {
		button.addEventListener(`click`, () => {
			const productName = button.dataset.productName;
			let matchingItem;
			cart.forEach((item) => {
				if (productName === item.productName) {
					matchingItem = item;

				}
			});
			if (matchingItem) {
				matchingItem.quantity += 1;
			}
			else {
				cart.push({
					productName: productName,
					quantity: 1
				});
			}
			let cartQuantity = 0;
			cart.forEach((item) => {
				cartQuantity += item.quantity;
			});
			document.querySelector(' .js-cart-quantity')
				.innerHTML = cartQuantity;
			console.log(cartQuantity);
			console.log(cart);
		});
	});
//add the quantity number for the heart
document.querySelectorAll('.js-add-to-heart')
	.forEach((button) => {
		button.addEventListener('click', () => {
			const productName = button.dataset.productName;
			let matchingItem;
			heart.forEach((item) => {
				if (productName === item.productName) {
					matchingItem = item;

				}
			});
			if (matchingItem) {
				matchingItem.quantity = 1;
			}
			else {
				heart.push({
					productName: productName,
					quantity: 1
				});
			}
			let heartQuantity = 0;
			heart.forEach((item) => {
				heartQuantity += item.quantity;
			});
			document.querySelector('.js-heart-quantity')
				.innerHTML = heartQuantity;
			console.log(heartQuantity);
			console.log(heart);
		});
	});
