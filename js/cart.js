
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
	cart = [
		{
			productId: 'f92b3241-5742-4313-a9b6-1fd3ec924c76',
			quantity: 1,
			img: "PS-images/horizon.jpeg",
		},
		{
			productId: '6f468824-b43c-4b80-abd1-88be29f7886f',
			quantity: 1,
			img: "PS-images/jedi.jpeg",
		}];
}

export const heart = []
export function removeFromCart(productId) {
	const newCart = [];
	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCart.push(cartItem);
		}
	});
	cart = newCart;
	saveToStorage();
}
export function saveToStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}
export function addFromShopping(productId) {
	const newCart = [];
	cart.forEach((cartItem) => {
		if (cartItem.productId === productId) {
			newCart.push(cartItem);
		}
	});
	cart = newCart;
	saveToStorage();
}

