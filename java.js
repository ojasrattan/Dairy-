// Glory Soya Centre — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      nav.style.cssText = isOpen
        ? 'display:flex;flex-direction:column;position:absolute;top:74px;left:20px;right:20px;border-radius:20px;padding:14px;'
        : '';
    });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* Product filter tabs */
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar){
    const buttons = filterBar.querySelectorAll('button');
    const cards = document.querySelectorAll('[data-category]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        cards.forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* Generic form handling (login / signup / contact) — front-end only demo */
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.form-msg');
      if (msg){
        msg.textContent = form.dataset.successMessage || 'Done — thanks!';
        msg.classList.add('show', 'ok');
      }
      form.reset();
    });
  });

  /* Cart count demo increment */
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      const countEl = document.querySelector('.cart-count');
      if (!countEl) return;
      countEl.textContent = String(Number(countEl.textContent || '0') + 1);
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.textContent = 'Add to cart'; }, 1200);
    });
  });

});
// ================================
// Glory Soya Centre Products Page
// ================================

// Search Products

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        productCards.forEach(function (card) {

            let name = card.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}



// ================================
// Category Filter
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        let filter = this.getAttribute("data-filter");

        productCards.forEach(function (card) {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});



// ================================
// Add To Cart
// ================================

let cartCount = 0;

const cartCounter = document.querySelector(".cart-count");

const cartButtons = document.querySelectorAll(".product-card .btn-primary");

cartButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        cartCount++;

        if (cartCounter) {

            cartCounter.textContent = cartCount;

        }

        alert("✅ Product added to cart!");

    });

});

// ================================
// Newsletter
// ================================

const subscribeButton = document.querySelector(".newsletter button");
if (subscribeButton) {
    subscribeButton.addEventListener("click", function () {
        const email = document.querySelector(".newsletter input");
        if (email.value.trim() === "") {
            alert("Please enter your email.");
            return;
        }
        alert("🎉 Thank you for subscribing!");
        email.value = "";
    });

}