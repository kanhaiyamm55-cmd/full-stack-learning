/* =====================================================
   FOOD DATA
===================================================== */

const foods = [

  {
    id: 1,
    name: "Margherita Pizza",
    category: "pizza",
    type: "Pizza",
    price: 399,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 2,
    name: "Double Cheese Burger",
    category: "burger",
    type: "Burger",
    price: 299,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 3,
    name: "Butter Chicken",
    category: "indian",
    type: "Indian",
    price: 449,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 4,
    name: "Chocolate Cake",
    category: "dessert",
    type: "Dessert",
    price: 249,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 5,
    name: "Pepperoni Pizza",
    category: "pizza",
    type: "Pizza",
    price: 499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 6,
    name: "Classic Chicken Burger",
    category: "burger",
    type: "Burger",
    price: 329,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 7,
    name: "Biryani Special",
    category: "indian",
    type: "Indian",
    price: 379,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=85"
  },

  {
    id: 8,
    name: "Strawberry Dessert",
    category: "dessert",
    type: "Dessert",
    price: 279,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1464353878773-3d2b4b8f5f5a?auto=format&fit=crop&w=800&q=85"
  }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   DISPLAY FOOD
===================================================== */

function displayFood(list) {

  const foodGrid = document.getElementById("foodGrid");

  foodGrid.innerHTML = "";


  if (list.length === 0) {

    foodGrid.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:60px;
      ">
        <h2>No food found 😕</h2>
        <p style="color:#888;">
          Try another category.
        </p>
      </div>
    `;

    return;
  }


  list.forEach(food => {

    foodGrid.innerHTML += `

      <article class="food-card">

        <div class="food-image">

          <img
            src="${food.image}"
            alt="${food.name}"
          >

          <span class="food-badge">
            ${food.type}
          </span>

          <button
            class="food-heart"
            onclick="toggleHeart(this)"
          >
            ♡
          </button>

        </div>


        <div class="food-info">

          <span>
            ${food.type}
          </span>

          <h3>
            ${food.name}
          </h3>

          <div class="stars">
            ★★★★★
            <span style="color:#888;">
              ${food.rating}
            </span>
          </div>


          <div class="food-bottom">

            <strong class="food-price">
              ₹${food.price}
            </strong>

            <button
              class="add-food"
              onclick="addToCart(${food.id})"
            >
              +
            </button>

          </div>

        </div>

      </article>

    `;

  });

}


/* =====================================================
   FILTER FOOD
===================================================== */

function filterFood(category) {

  const buttons =
    document.querySelectorAll(".category-btn");


  buttons.forEach(button => {
    button.classList.remove("active");
  });


  event?.target?.classList.add("active");


  if (category === "all") {

    displayFood(foods);

  } else {

    const filtered =
      foods.filter(food =>
        food.category === category
      );

    displayFood(filtered);

  }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

  const food =
    foods.find(item => item.id === id);


  cart.push(food);


  updateCart();


  openCart();

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

  const count =
    document.getElementById("cartCount");

  const items =
    document.getElementById("cartItems");

  const total =
    document.getElementById("cartTotal");


  count.innerText = cart.length;


  if (cart.length === 0) {

    items.innerHTML = `
      <div class="empty-cart">
        🛒
        <h3>Your cart is empty</h3>
        <p>Add some delicious food!</p>
      </div>
    `;

    total.innerText = "₹0";

    return;
  }


  items.innerHTML = "";


  let totalPrice = 0;


  cart.forEach((food, index) => {

    totalPrice += food.price;


    items.innerHTML += `

      <div class="cart-item">

        <img
          src="${food.image}"
          alt="${food.name}"
        >

        <div class="cart-item-info">

          <h4>
            ${food.name}
          </h4>

          <p>
            ₹${food.price}
          </p>

        </div>

        <button
          class="remove-item"
          onclick="removeFromCart(${index})"
        >
          ×
        </button>

      </div>

    `;

  });


  total.innerText =
    "₹" + totalPrice.toLocaleString("en-IN");

}


/* =====================================================
   REMOVE CART ITEM
===================================================== */

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

  document
    .getElementById("cartPanel")
    .classList.add("active");


  document
    .getElementById("cartOverlay")
    .classList.add("active");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

  document
    .getElementById("cartPanel")
    .classList.remove("active");


  document
    .getElementById("cartOverlay")
    .classList.remove("active");

}


/* =====================================================
   HEART
===================================================== */

function toggleHeart(button) {

  if (button.innerText === "♡") {

    button.innerText = "♥";

    button.style.color = "#ff5a36";

  } else {

    button.innerText = "♡";

    button.style.color = "#191919";

  }

}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

  document
    .getElementById("navMenu")
    .classList.toggle("active");

}


/* =====================================================
   SEARCH
===================================================== */

function focusSearch() {

  document
    .getElementById("searchInput")
    .focus();

}


function performSearch() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  if (!query) {

    document
      .getElementById("food")
      .scrollIntoView({
        behavior: "smooth"
      });

    return;

  }


  const results =
    foods.filter(food =>

      food.name
        .toLowerCase()
        .includes(query)

      ||

      food.type
        .toLowerCase()
        .includes(query)

    );


  displayFood(results);


  document
    .getElementById("food")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================================
   SEARCH ENTER
===================================================== */

document
  .getElementById("searchInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      performSearch();

    }

  });


/* =====================================================
   HOTEL BOOKING
===================================================== */

function bookHotel(hotelName) {

  alert(
    "🏨 Booking selected!\n\n" +
    hotelName +
    "\n\nBooking page will open here."
  );

}


/* =====================================================
   ROOM BOOKING
===================================================== */

function bookRoom(roomName) {

  alert(
    "🛏️ Room selected!\n\n" +
    roomName +
    "\n\nReservation form will open here."
  );

}


/* =====================================================
   SPORTS
===================================================== */

function joinSport(sportName) {

  alert(
    "🏆 Activity selected!\n\n" +
    sportName +
    "\n\nYou can add a registration form here."
  );

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;

  }


  const total =
    cart.reduce(
      (sum, item) => sum + item.price,
      0
    );


  alert(
    "🎉 Order Ready!\n\n" +
    "Total: ₹" +
    total.toLocaleString("en-IN") +
    "\n\nCheckout/payment page can be connected here."
  );

}


/* =====================================================
   SCROLL TOP
===================================================== */

function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   INITIALIZE
===================================================== */

displayFood(foods);

updateCart();
