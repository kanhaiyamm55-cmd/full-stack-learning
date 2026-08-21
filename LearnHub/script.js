/* =========================================================
   LEARNHUB - ONLINE COURSE WEBSITE
   script.js
========================================================= */


/* =========================================================
   1. COURSE DATA
========================================================= */

const courses = [

  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    category: "Development",
    description:
      "Learn HTML, CSS, JavaScript and modern web development from scratch.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    instructor: "Alex Morgan",
    rating: 4.9,
    reviews: 2450,
    students: 12800,
    duration: "42 Hours",
    lessons: 186,
    level: "Beginner",
    price: 799,
    oldPrice: 2499,
    badge: "BESTSELLER"
  },

  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    description:
      "Master Figma, user research, wireframing and modern interface design.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85",
    instructor: "Sarah Williams",
    rating: 4.8,
    reviews: 1870,
    students: 9400,
    duration: "28 Hours",
    lessons: 124,
    level: "Intermediate",
    price: 699,
    oldPrice: 1999,
    badge: "POPULAR"
  },

  {
    id: 3,
    title: "Python for Data Science",
    category: "Data Science",
    description:
      "Learn Python, NumPy, Pandas, Matplotlib and real-world data analysis.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
    instructor: "David Chen",
    rating: 4.9,
    reviews: 3210,
    students: 15600,
    duration: "35 Hours",
    lessons: 152,
    level: "Beginner",
    price: 899,
    oldPrice: 2999,
    badge: "BESTSELLER"
  },

  {
    id: 4,
    title: "Artificial Intelligence & Machine Learning",
    category: "AI",
    description:
      "Understand machine learning, neural networks and practical AI projects.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=85",
    instructor: "David Chen",
    rating: 4.9,
    reviews: 2150,
    students: 11200,
    duration: "48 Hours",
    lessons: 210,
    level: "Intermediate",
    price: 999,
    oldPrice: 3499,
    badge: "NEW"
  },

  {
    id: 5,
    title: "Digital Marketing Complete Course",
    category: "Marketing",
    description:
      "Master SEO, social media marketing, Google Ads and content strategy.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=85",
    instructor: "Emma Davis",
    rating: 4.7,
    reviews: 1340,
    students: 7200,
    duration: "25 Hours",
    lessons: 110,
    level: "Beginner",
    price: 599,
    oldPrice: 1799,
    badge: "SALE"
  },

  {
    id: 6,
    title: "React JS From Zero to Expert",
    category: "Development",
    description:
      "Build modern interactive web applications using React and JavaScript.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=85",
    instructor: "Alex Morgan",
    rating: 4.8,
    reviews: 2780,
    students: 13500,
    duration: "32 Hours",
    lessons: 145,
    level: "Intermediate",
    price: 849,
    oldPrice: 2499,
    badge: "HOT"
  },

  {
    id: 7,
    title: "Graphic Design with Photoshop",
    category: "Design",
    description:
      "Learn Photoshop, branding, posters, social media designs and more.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=85",
    instructor: "Sarah Williams",
    rating: 4.7,
    reviews: 980,
    students: 5400,
    duration: "22 Hours",
    lessons: 96,
    level: "Beginner",
    price: 499,
    oldPrice: 1499,
    badge: "SALE"
  },

  {
    id: 8,
    title: "Business & Entrepreneurship",
    category: "Business",
    description:
      "Learn how to start, grow and manage a successful modern business.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    instructor: "Michael Brown",
    rating: 4.8,
    reviews: 1120,
    students: 6800,
    duration: "18 Hours",
    lessons: 82,
    level: "Beginner",
    price: 649,
    oldPrice: 1899,
    badge: "POPULAR"
  },

  {
    id: 9,
    title: "Full Stack JavaScript Developer",
    category: "Development",
    description:
      "Build complete full-stack applications with Node.js, Express and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=900&q=85",
    instructor: "Alex Morgan",
    rating: 4.9,
    reviews: 1640,
    students: 8300,
    duration: "50 Hours",
    lessons: 220,
    level: "Advanced",
    price: 1099,
    oldPrice: 3999,
    badge: "PREMIUM"
  },

  {
    id: 10,
    title: "Excel & Business Analytics",
    category: "Data Science",
    description:
      "Master Excel, dashboards, formulas and business data analysis.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    instructor: "Michael Brown",
    rating: 4.7,
    reviews: 760,
    students: 4200,
    duration: "16 Hours",
    lessons: 74,
    level: "Beginner",
    price: 449,
    oldPrice: 1299,
    badge: "SALE"
  },

  {
    id: 11,
    title: "Generative AI & ChatGPT Masterclass",
    category: "AI",
    description:
      "Learn prompt engineering, AI tools and practical generative AI workflows.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    instructor: "David Chen",
    rating: 4.9,
    reviews: 2910,
    students: 18700,
    duration: "20 Hours",
    lessons: 92,
    level: "Beginner",
    price: 749,
    oldPrice: 2199,
    badge: "TRENDING"
  },

  {
    id: 12,
    title: "Social Media Marketing Mastery",
    category: "Marketing",
    description:
      "Grow brands using Instagram, YouTube, Facebook and modern social strategies.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85",
    instructor: "Emma Davis",
    rating: 4.8,
    reviews: 890,
    students: 5100,
    duration: "19 Hours",
    lessons: 88,
    level: "Beginner",
    price: 549,
    oldPrice: 1599,
    badge: "POPULAR"
  }

];


/* =========================================================
   2. GLOBAL VARIABLES
========================================================= */

let cart = [];

let wishlist = [];

let currentCourses = [...courses];

let currentSearch = "";


/* =========================================================
   3. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  loadCart();

  loadWishlist();

  renderCourses(courses);

  updateCart();

  setupSearchEvents();

});


/* =========================================================
   4. RENDER COURSES
========================================================= */

function renderCourses(courseList) {

  const grid = document.getElementById("courseGrid");

  const noResults = document.getElementById("noResults");


  if (!grid) return;


  grid.innerHTML = "";


  if (courseList.length === 0) {

    noResults.style.display = "block";

    return;

  }


  noResults.style.display = "none";


  courseList.forEach(course => {

    const card = document.createElement("article");

    card.className = "course-card";


    const isWishlisted =
      wishlist.includes(course.id);


    card.innerHTML = `

      <div class="course-image">

        <img
          src="${course.image}"
          alt="${course.title}"
          loading="lazy"
        >

        <span
          class="course-badge ${
            course.badge === "BESTSELLER"
              ? "best"
              : ""
          }"
        >
          ${course.badge}
        </span>


        <button
          class="course-wishlist ${
            isWishlisted ? "active" : ""
          }"
          onclick="toggleWishlist(${course.id}, this)"
          aria-label="Add to wishlist"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

      </div>


      <div class="course-content">

        <div class="course-category">
          ${course.category}
        </div>


        <h3 class="course-title">
          ${course.title}
        </h3>


        <p class="course-description">
          ${course.description}
        </p>


        <div class="course-rating">

          <span class="stars">
            ${getStars(course.rating)}
          </span>

          <strong>
            ${course.rating}
          </strong>

          <span>
            (${formatNumber(course.reviews)})
          </span>

        </div>


        <div class="course-meta">

          <span>
            ⏱ ${course.duration}
          </span>

          <span>
            📚 ${course.lessons} Lessons
          </span>

          <span>
            ${course.level}
          </span>

        </div>


        <div class="course-bottom">

          <div class="course-price">

            <strong>
              ₹${course.price}
            </strong>

            <del>
              ₹${course.oldPrice}
            </del>

          </div>


          <button
            class="add-cart-btn"
            onclick="addToCart(${course.id})"
          >
            🛒 Add
          </button>

        </div>

      </div>

    `;


    card.addEventListener("click", event => {

      if (
        !event.target.closest(
          ".add-cart-btn, .course-wishlist"
        )
      ) {

        openCourseModal(course.id);

      }

    });


    grid.appendChild(card);

  });

}


/* =========================================================
   5. STAR RATING
========================================================= */

function getStars(rating) {

  const fullStars = Math.round(rating);

  return "★".repeat(fullStars) +
         "☆".repeat(5 - fullStars);

}


/* =========================================================
   6. NUMBER FORMAT
========================================================= */

function formatNumber(number) {

  return new Intl.NumberFormat("en-IN")
    .format(number);

}


/* =========================================================
   7. CATEGORY FILTER
========================================================= */

function filterCourses(category) {

  currentSearch = "";


  const searchInput =
    document.getElementById("courseSearch");

  if (searchInput) {

    searchInput.value = "";

  }


  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.textContent
          .toLowerCase()
          .includes(category.toLowerCase())
      ) {

        button.classList.add("active");

      }

    });


  if (category === "All") {

    currentCourses = [...courses];

  } else {

    currentCourses = courses.filter(course => {

      return course.category
        .toLowerCase()
        .includes(category.toLowerCase());

    });

  }


  renderCourses(currentCourses);


  document
    .getElementById("courses")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   8. SHOW ALL COURSES
========================================================= */

function showAllCourses() {

  currentSearch = "";

  currentCourses = [...courses];

  const input =
    document.getElementById("courseSearch");

  if (input) {

    input.value = "";

  }


  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

      button.classList.remove("active");

    });


  const allButton =
    document.querySelector(".filter-btn");

  if (allButton) {

    allButton.classList.add("active");

  }


  renderCourses(courses);


  document
    .getElementById("courses")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   9. SEARCH
========================================================= */

function searchCourses() {

  const input =
    document.getElementById("courseSearch");

  if (!input) return;


  const query =
    input.value
      .trim()
      .toLowerCase();


  currentSearch = query;


  if (!query) {

    renderCourses(courses);

    return;

  }


  const results =
    courses.filter(course => {

      return (
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
      );

    });


  currentCourses = results;

  renderCourses(results);


  document
    .getElementById("courses")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   10. QUICK SEARCH
========================================================= */

function quickSearch(text) {

  const input =
    document.getElementById("courseSearch");

  if (!input) return;


  input.value = text;

  searchCourses();

}


/* =========================================================
   11. SEARCH ENTER KEY
========================================================= */

function setupSearchEvents() {

  const input =
    document.getElementById("courseSearch");


  if (!input) return;


  input.addEventListener("keydown", event => {

    if (event.key === "Enter") {

      searchCourses();

    }

  });

}


/* =========================================================
   12. FOCUS SEARCH
========================================================= */

function focusSearch() {

  const input =
    document.getElementById("courseSearch");


  if (!input) return;


  input.focus();


  document
    .getElementById("home")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   13. ADD TO CART
========================================================= */

function addToCart(courseId) {

  const course =
    courses.find(item => item.id === courseId);


  if (!course) return;


  const exists =
    cart.some(item => item.id === courseId);


  if (exists) {

    showToast(
      "Course is already in your cart!"
    );

    openCart();

    return;

  }


  cart.push(course);


  saveCart();

  updateCart();


  showToast(
    `${course.title} added to cart`
  );

}


/* =========================================================
   14. REMOVE FROM CART
========================================================= */

function removeFromCart(courseId) {

  cart =
    cart.filter(item => item.id !== courseId);


  saveCart();

  updateCart();


  showToast("Course removed from cart");

}


/* =========================================================
   15. UPDATE CART
========================================================= */

function updateCart() {

  const count =
    document.getElementById("cartCount");

  const items =
    document.getElementById("cartItems");

  const total =
    document.getElementById("cartTotal");


  if (count) {

    count.textContent = cart.length;

  }


  if (!items) return;


  if (cart.length === 0) {

    items.innerHTML = `

      <div class="empty-cart">

        <div>
          🛒
        </div>

        <h3>
          Your cart is empty
        </h3>

        <p>
          Add a course and start learning today.
        </p>

      </div>

    `;

  } else {

    items.innerHTML = cart.map(course => `

      <div class="cart-item">

        <img
          src="${course.image}"
          alt="${course.title}"
        >


        <div class="cart-item-info">

          <h4>
            ${course.title}
          </h4>

          <p>
            ₹${course.price}
          </p>

        </div>


        <button
          class="remove-cart-item"
          onclick="removeFromCart(${course.id})"
          aria-label="Remove course"
        >
          ×
        </button>

      </div>

    `).join("");

  }


  const cartTotal =
    cart.reduce(
      (sum, course) =>
        sum + course.price,
      0
    );


  if (total) {

    total.textContent =
      `₹${cartTotal}`;

  }

}


/* =========================================================
   16. SAVE CART
========================================================= */

function saveCart() {

  localStorage.setItem(
    "learnhubCart",
    JSON.stringify(cart)
  );

}


/* =========================================================
   17. LOAD CART
========================================================= */

function loadCart() {

  const savedCart =
    localStorage.getItem(
      "learnhubCart"
    );


  if (!savedCart) return;


  try {

    cart = JSON.parse(savedCart);

  } catch {

    cart = [];

  }

}


/* =========================================================
   18. OPEN CART
========================================================= */

function openCart() {

  document
    .getElementById("cartPanel")
    ?.classList.add("active");


  document
    .getElementById("cartOverlay")
    ?.classList.add("active");


  document.body.style.overflow = "hidden";

}


/* =========================================================
   19. CLOSE CART
========================================================= */

function closeCart() {

  document
    .getElementById("cartPanel")
    ?.classList.remove("active");


  document
    .getElementById("cartOverlay")
    ?.classList.remove("active");


  document.body.style.overflow = "";

}


/* =========================================================
   20. WISHLIST
========================================================= */

function toggleWishlist(courseId, button) {

  const index =
    wishlist.indexOf(courseId);


  if (index === -1) {

    wishlist.push(courseId);

    button.classList.add("active");

    button.textContent = "♥";

    showToast(
      "Added to your wishlist ❤️"
    );

  } else {

    wishlist.splice(index, 1);

    button.classList.remove("active");

    button.textContent = "♡";

    showToast(
      "Removed from wishlist"
    );

  }


  saveWishlist();

}


/* =========================================================
   21. SAVE WISHLIST
========================================================= */

function saveWishlist() {

  localStorage.setItem(
    "learnhubWishlist",
    JSON.stringify(wishlist)
  );

}


/* =========================================================
   22. LOAD WISHLIST
========================================================= */

function loadWishlist() {

  const saved =
    localStorage.getItem(
      "learnhubWishlist"
    );


  if (!saved) return;


  try {

    wishlist = JSON.parse(saved);

  } catch {

    wishlist = [];

  }

}


/* =========================================================
   23. SHOW WISHLIST
========================================================= */

function showWishlist() {

  const wishlistCourses =
    courses.filter(course =>
      wishlist.includes(course.id)
    );


  if (wishlistCourses.length === 0) {

    showToast(
      "Your wishlist is empty ❤️"
    );

    return;

  }


  currentCourses = wishlistCourses;

  renderCourses(wishlistCourses);


  document
    .getElementById("courses")
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   24. COURSE MODAL
========================================================= */

function openCourseModal(courseId) {

  const course =
    courses.find(item => item.id === courseId);


  if (!course) return;


  const modal =
    document.getElementById("courseModal");


  const content =
    document.getElementById(
      "courseModalContent"
    );


  content.innerHTML = `

    <div class="modal-course-image">

      <img
        src="${course.image}"
        alt="${course.title}"
      >

    </div>


    <div class="modal-course-content">

      <div class="course-category">
        ${course.category}
      </div>


      <h2>
        ${course.title}
      </h2>


      <p>
        ${course.description}
        This complete course is designed to give
        you practical skills through projects,
        exercises and real-world examples.
      </p>


      <div class="course-rating">

        <span class="stars">
          ${getStars(course.rating)}
        </span>

        <strong>
          ${course.rating}
        </strong>

        <span>
          ${formatNumber(course.reviews)} reviews
        </span>

      </div>


      <div class="modal-course-info">

        <span>
          👨‍🏫 ${course.instructor}
        </span>

        <span>
          ⏱ ${course.duration}
        </span>

        <span>
          📚 ${course.lessons} Lessons
        </span>

        <span>
          🎯 ${course.level}
        </span>

        <span>
          👥 ${formatNumber(course.students)} Students
        </span>

      </div>


      <div class="modal-course-bottom">

        <div class="modal-course-price">

          ₹${course.price}

          <del>
            ₹${course.oldPrice}
          </del>

        </div>


        <button
          class="modal-add-btn"
          onclick="addToCart(${course.id}); closeCourseModal();"
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>

  `;


  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   25. CLOSE COURSE MODAL
========================================================= */

function closeCourseModal() {

  document
    .getElementById("courseModal")
    ?.classList.remove("active");


  document.body.style.overflow = "";

}


/* =========================================================
   26. LOGIN
========================================================= */

function loginUser() {

  document
    .getElementById("loginModal")
    ?.classList.add("active");


  document.body.style.overflow = "hidden";

}


/* =========================================================
   27. CLOSE LOGIN
========================================================= */

function closeLoginModal() {

  document
    .getElementById("loginModal")
    ?.classList.remove("active");


  document.body.style.overflow = "";

}


/* =========================================================
   28. SIGN UP
========================================================= */

function signupUser() {

  closeLoginModal();


  showToast(
    "Sign up page coming soon!"
  );

}


/* =========================================================
   29. LOGIN FORM
========================================================= */

function handleLogin(event) {

  event.preventDefault();


  const form =
    event.target;


  const email =
    form.querySelector(
      'input[type="email"]'
    ).value;


  closeLoginModal();


  showToast(
    `Welcome back! ${email}`
  );


  form.reset();

}


/* =========================================================
   30. NEWSLETTER
========================================================= */

function subscribeNewsletter(event) {

  event.preventDefault();


  const input =
    document.getElementById(
      "emailInput"
    );


  const email =
    input.value.trim();


  if (!email) return;


  showToast(
    "Thanks! You're subscribed 🎉"
  );


  input.value = "";

}


/* =========================================================
   31. CHECKOUT
========================================================= */

function checkout() {

  if (cart.length === 0) {

    showToast(
      "Please add a course first."
    );

    return;

  }


  const total =
    cart.reduce(
      (sum, course) =>
        sum + course.price,
      0
    );


  showToast(
    `Checkout total: ₹${total}`
  );


  /*
    Real website me yahan payment gateway
    integrate kiya ja sakta hai.
  */

}


/* =========================================================
   32. MOBILE MENU
========================================================= */

function toggleMenu() {

  const menu =
    document.getElementById(
      "navMenu"
    );


  menu?.classList.toggle("active");

}


/* =========================================================
   33. CLOSE MENU AFTER CLICK
========================================================= */

document.addEventListener(
  "click",
  event => {

    const menu =
      document.getElementById(
        "navMenu"
      );


    const menuButton =
      document.querySelector(
        ".menu-btn"
      );


    if (
      menu &&
      menu.classList.contains("active") &&
      !menu.contains(event.target) &&
      !menuButton?.contains(event.target)
    ) {

      menu.classList.remove("active");

    }

  }
);


/* =========================================================
   34. CLOSE MODALS ON OUTSIDE CLICK
========================================================= */

document.addEventListener(
  "click",
  event => {

    const courseModal =
      document.getElementById(
        "courseModal"
      );


    const loginModal =
      document.getElementById(
        "loginModal"
      );


    if (
      event.target === courseModal
    ) {

      closeCourseModal();

    }


    if (
      event.target === loginModal
    ) {

      closeLoginModal();

    }

  }
);


/* =========================================================
   35. ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;


    closeCart();

    closeCourseModal();

    closeLoginModal();

  }
);


/* =========================================================
   36. TOAST MESSAGE
========================================================= */

function showToast(message) {

  let toast =
    document.querySelector(
      ".toast"
    );


  if (!toast) {

    toast =
      document.createElement(
        "div"
      );

    toast.className = "toast";

    document.body.appendChild(toast);

  }


  toast.textContent = message;


  toast.classList.add("show");


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

}


/* =========================================================
   37. NAVBAR ACTIVE LINK
========================================================= */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


window.addEventListener(
  "scroll",
  () => {

    const scrollPosition =
      window.scrollY + 150;


    sections.forEach(section => {

      const top =
        section.offsetTop;

      const height =
        section.offsetHeight;

      const id =
        section.getAttribute("id");


      const link =
        document.querySelector(
          `.nav-menu a[href="#${id}"]`
        );


      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {

        document
          .querySelectorAll(
            ".nav-menu a"
          )
          .forEach(item =>
            item.classList.remove(
              "active"
            )
          );


        link?.classList.add("active");

      }

    });

  }
);


/* =========================================================
   38. PAGE LOAD ANIMATION
========================================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.1
    }
  );


document
  .querySelectorAll(
    ".category-card, .why-card, .instructor-card"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(20px)";

    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

  });


/* =========================================================
   END
========================================================= */
