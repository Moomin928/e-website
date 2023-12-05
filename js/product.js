// Save the HTML Data
import { heart } from "../js/cart.js"
import { cart } from "../js/cart.js"
import { saveToStorage } from "../js/cart.js"

export const products = [
  {
    id: `d9e386e2-82c9-4e34-a36b-413b8d3bf215`,
    img: "PS-images/baldurs-gate.jpeg",
    name: `Balurs Gate`,
    priceCents: 5800,

  },
  {
    id: 'c91be91c-2965-42bd-b0c7-8194ed1c7af2',
    img: "PS-images/call-of-duty.jpeg",
    name: `Call Of Duty`,
    priceCents: 4900,

  },
  {
    id: 'b7fa78a5-6939-49cf-aca0-2189937406bd',
    img: "PS-images/death-standing.jpeg",
    name: `Death Standing`,
    priceCents: 3900,

  },
  {
    id: 'e63014ce-6db2-449f-95a2-cb8e82e1356b',
    img: "PS-images/diablo.jpeg",
    name: `Diablo`,
    priceCents: 5900,

  },
  {
    id: 'ce2883d1-9fda-4fd8-83e0-5f02adf53107',
    img: "PS-images/elden-ring.jpeg",
    name: `Elden Ring`,
    priceCents: 5900,

  },
  {
    id: '0698844b-4601-4af2-a687-ca8055658032',
    img: "PS-images/farcry.jpeg",
    name: `Farcy`,
    priceCents: 5900,

  },
  {
    productId: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    img: "PS-images/final-fantasy.jpeg",
    name: `Final Fantasy XVI`,
    priceCents: 5900,

  },
  {
    id: 'e9374a7e-fef1-4e03-87d2-3e175393a992',
    img: "PS-images/gran-turismo.jpeg",
    name: `Gran Turismo 7`,
    priceCents: 5900,

  },
  {
    id: '1b83dfbb-2c54-49a8-aa91-0eac72079e02',
    img: "PS-images/gta.jpeg",
    name: `Grand Theft Auto V`,
    priceCents: 5900,

  },
  {
    id: 'e49469a5-60f6-428e-a6e9-16f5375df5d4',
    img: "PS-images/hogwarts-legacy.jpeg",
    name: 'Hogwarts Legacy',
    priceCents: 5900,
  },
  {
    id: 'f92b3241-5742-4313-a9b6-1fd3ec924c76',
    img: "PS-images/horizon.jpeg",
    name: `Horizon Forbidden West`,
    priceCents: 5800,
  },
  {
    id: '6f468824-b43c-4b80-abd1-88be29f7886f',
    img: "PS-images/jedi.jpeg",
    name: `Star Wars Judi Fall Order`,
    priceCents: 5900,
  },
  {
    id: '63e90878-7743-4419-bf3c-6598e255582a',
    img: "PS-images/lies-of-p.jpeg",
    name: `Lies Of P`,
    priceCents: 5900,
  },
  {
    id: '68c038a8-138d-4591-96eb-0f78068e1772',
    img: "PS-images/mirage.jpeg",
    name: `Assassins Creed Mirage`,
    priceCents: 5900,
  },
  {
    id: '6748c5cd-838b-49b9-affb-ea17d8d87083',
    img: "PS-images/spider-man.jpeg",
    name: `Spider-Man`,
    priceCents: 5900,
  },
  {
    id: '5d7c36a2-cf1b-4469-8102-bc447568430f',
    img: "PS-images/the-witcher.jpeg",
    name: `The Witcher`,
    priceCents: 5900,
  },
];
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
document.querySelector(".js-products-grid").innerHTML = productsHTML;
 console.log(productsHTML)
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

