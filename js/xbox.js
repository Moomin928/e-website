
function addToCart() {
    // Get product details
    const productName = "Example Product";
    const price = 10.00;

    // Create a new list item for the cart
    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - $${price.toFixed(2)}`;

    // Append the item to the cart
    document.getElementById("cart-items").appendChild(cartItem);