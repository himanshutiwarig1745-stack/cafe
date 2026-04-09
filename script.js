/* ================= MENU DATA ============= */
const menuData = [
  // VEG
  { category: "veg", name: "Paneer Tikka", price: 180, image: "panner-tikka.png" },
  { category: "veg", name: "Kadhai Paneer", price: 240, image: "kadhai-panner.png" },
  { category: "veg", name: "Shahi Paneer", price: 260, image: "Shahi Paneer.png" },
  { category: "veg", name: "Mix Veg Curry", price: 200, image: "Mix Veg Curry .png" },
  { category: "veg", name: "Dal Makhani", price: 190, image: "Dal Makhani.png" },
  { category: "veg", name: "Palak Paneer", price: 230, image: "Palak Paneer.png" },
  { category: "veg", name: "Veg Kofta", price: 220, image: "Veg Kofta.png" },
  { category: "veg", name: "Chana Masala", price: 200, image: "Chana Masala.png" },
  { category: "veg", name: "Rajma Masala", price: 190, image: "Rajma Masala.png" },
  { category: "veg", name: "Mushroom Masala", price: 220, image: "Mushroom Masala.png" },
  { category: "veg", name: "Malai Kofta", price: 250, image: "Malai Kofta.png" },
  { category: "veg", name: "Paneer Lababdar", price: 260, image: "Paneer Lababdar.png" },
  { category: "veg", name: "Jeera Aloo", price: 160, image: "Jeera Aloo.png" },
  { category: "veg", name: "Bhindi Masala", price: 170, image: "Bhindi Masala.png" },
  { category: "veg", name: "Lasooni Palak", price: 180, image: "Lasooni Palak.png" },

  // NON VEG
  { category: "nonveg", name: "Chicken Tikka", price: 280, image: "Chicken Tikka.png" },
  { category: "nonveg", name: "Tandoori Chicken", price: 540, image: "Tandoori Chicken.png" },
  { category: "nonveg", name: "Chilli Chicken", price: 270, image: "Chilli Chicken.png" },
  { category: "nonveg", name: "Fish Fry", price: 350, image: "Fish Fry.png" },
  { category: "nonveg", name: "Butter Chicken", price: 380, image: "Butter Chicken.png" },
  { category: "nonveg", name: "Prawn Tempura", price: 380, image: "Prawn Tempura.png" },
  { category: "nonveg", name: "Chicken Curry", price: 300, image: "Chicken Curry.png" },
  { category: "nonveg", name: "Egg Curry", price: 320, image: "Egg Curry.png" },
  { category: "nonveg", name: "Fish Curry", price: 350, image: "Fish Curry.png" },
  { category: "nonveg", name: "Chicken Do Pyaza", price: 320, image: "Chicken Do Pyaza.png" },

  // CHINESE
  { category: "chinese", name: "Hakka Noodles", price: 140, image: "Veg Hakka Noodles.png" },
  { category: "chinese", name: "Veg Fried Rice", price: 150, image: "Veg Fried Rice.png" },
  { category: "chinese", name: "Crispy Chilli Potato", price: 100, image: "Crispy Chilli Potato.png" },
  { category: "chinese", name: "Veg Manchurian", price: 120, image: "Veg Manchurian.png" },
  { category: "chinese", name: "Chilli Paneer", price: 210, image: "Chilli Paneer.png" },
  { category: "chinese", name: "American Chopsuey", price: 240, image: "American Chopsuey.png" },
  { category: "chinese", name: "Chicken Lollipop", price: 240, image: "Chicken Lollipop.png" },
  { category: "chinese", name: "Egg Fried Rice", price: 190, image: "Egg Fried Rice.png" },
  { category: "chinese", name: "Veg Manchow Soup", price: 120, image: "Veg Manchow Soup.png" },
  { category: "chinese", name: "Sweet Corn Soup", price: 150, image: "Sweet Corn Soup.png" },

  // ITALIAN
  { category: "italian", name: "Margherita Pizza", price: 250, image: "Margherita Pizza.png" },
  { category: "italian", name: "Farmhouse Pizza", price: 280, image: "Farmhouse Pizza.png" },
  { category: "italian", name: "Paneer Tikka Pizza", price: 320, image: "Paneer Tikka Pizza.png" },
  { category: "italian", name: "Corn & Cheese Pizza", price: 260, image: "Corn & Cheese Pizza.png" },
  { category: "italian", name: "Chicken Pizza", price: 450, image: "Chicken Pizza.png" },
  { category: "italian", name: "White Sauce Pasta", price: 220, image: "White Sauce Pasta.png" },
  { category: "italian", name: "Arrabbiata Pasta", price: 250, image: "Arrabbiata Pasta.png" },
  { category: "italian", name: "Chicken Alfredo Pasta", price: 290, image: "Chicken Alfredo Pasta.png" },
  { category: "italian", name: "Cheesy Garlic Bread", price: 100, image: "Cheesy Garlic Bread.png" },
  { category: "italian", name: "Bruschetta", price: 190, image: "Bruschetta.png" },

  // DRINKS
  { category: "drinks", name: "Cold Coffee", price: 90, image: "cold coffee.png" },
  { category: "drinks", name: "Tea", price: 20, image: "Tea.png" },
  { category: "drinks", name: "Green Tea", price: 60, image: "Green Tea.png" },
  { category: "drinks", name: "Hot Coffee", price: 50, image: "Hot Coffee.png" },
  { category: "drinks", name: "Cappuccino", price: 130, image: "Cappuccino.png" },
  { category: "drinks", name: "Latte", price: 110, image: "Latte.png" },
  { category: "drinks", name: "Banana Shake", price: 100, image: "Banana Shake.png" },
  { category: "drinks", name: "Strawberry Shake", price: 140, image: "Strawberry Shake.png" },
  { category: "drinks", name: "Virgin Mojito", price: 120, image: "Virgin Mojito.png" },
  { category: "drinks", name: "Mixed Fruit Juice", price: 150, image: "Mixed Fruit Juice.png" }
];

/* ================= RENDER MENU ================= */
function renderMenu() {
  document.querySelectorAll(".menu-grid").forEach(grid => grid.innerHTML = "");
  menuData.forEach(item => {
    const grid = document.querySelector(`#${item.category} .menu-grid`);
    if (!grid) return;
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

/* ================= CATEGORY FUNCTION ================= */
function showCategory(categoryId) {
  document.querySelectorAll(".menu-items").forEach(cat => cat.style.display = "none");
  const selected = document.getElementById(categoryId);
  if (selected) {
    selected.style.display = "block";
    selected.scrollIntoView({ behavior: "smooth" });
  }
}

/* ================= CART STATE ================= */
const STORAGE_KEY = "cafeCart";
let cart = loadCart();
function loadCart() { try { const data = JSON.parse(localStorage.getItem(STORAGE_KEY)); if (!Array.isArray(data)) return []; return data.map(item => ({ name: String(item.name || ""), price: Number(item.price) || 0, quantity: Number(item.quantity) || 1 })); } catch { return []; } }
function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function $(id) { return document.getElementById(id); }
function updateCartCount() { const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); document.querySelectorAll("#cartCount").forEach(el => el.innerText = totalItems); }

/* ================= CART OPERATIONS ================= */
function addToCart(name, price) { const existing = cart.find(item => item.name === name); if (existing) existing.quantity++; else cart.push({ name, price, quantity: 1 }); saveCart(); updateCartUI(); flashCartIcon(); }
function increaseQuantity(i) { if (cart[i]) { cart[i].quantity++; saveCart(); updateCartUI(); } }
function decreaseQuantity(i) { if (cart[i]) { if (cart[i].quantity > 1) { cart[i].quantity--; } else { cart.splice(i, 1); } saveCart(); updateCartUI(); } }
function removeItem(i) { if (cart[i]) { cart.splice(i, 1); saveCart(); updateCartUI(); } }
function clearCart() { cart = []; saveCart(); updateCartUI(); }

/* ================= CART SIDEBAR ================= */
function toggleCart() { const sidebar = $("cartSidebar"); if (!sidebar) return; sidebar.classList.toggle("active"); addPayNowButton(); }

/* ================= CART UI ================= */
function updateCartUI() {
  updateCartCount();
  const container = $("cartItems"); if (!container) return;
  const totalElement = $("cartTotal");
  container.innerHTML = "";
  if (cart.length === 0) { container.innerHTML = "<p>Your cart is empty 🛒</p>"; if (totalElement) totalElement.innerText = "0"; return; }
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      <div class="quantity-controls">
        <button data-action="decrease" data-index="${i}">-</button>
        <span>${item.quantity}</span>
        <button data-action="increase" data-index="${i}">+</button>
      </div>
      <button data-action="remove" data-index="${i}">Remove</button>
      <hr>
    `;
    container.appendChild(div);
  });
  if (totalElement) totalElement.innerText = Math.round(total);
}

/* ================= EVENT DELEGATION ================= */
document.addEventListener("click", e => {
  const action = e.target.getAttribute("data-action");
  const index = Number(e.target.getAttribute("data-index"));
  if (!action) return;
  if (action === "increase") increaseQuantity(index);
  if (action === "decrease") decreaseQuantity(index);
  if (action === "remove") removeItem(index);
});

/* ================= SEARCH ================= */
function searchItem() {
  const input = $("searchInput");
  if (!input) return;
  const query = input.value.trim().toLowerCase();
  if (!query) return;
  const found = menuData.find(item => item.name.toLowerCase().includes(query));
  if (!found) { alert("Item not found!"); return; }
  document.querySelectorAll(".menu-items").forEach(cat => cat.style.display = "none");
  showCategory(found.category);
}

/* ================= SCROLL TO CATEGORY SELECTION ================= */
function showCategorySelection() {
  document.querySelectorAll(".menu-items").forEach(cat => cat.style.display = "none");
  const menuSection = document.getElementById("menu");
  if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
  const curationSection = document.querySelector(".curations");
  if (curationSection) curationSection.scrollIntoView({ behavior: "smooth" });
}

/* ================= PAY NOW BUTTON ================= */
function addPayNowButton() {
  const cartSidebar = $("cartSidebar");
  if (!cartSidebar) return;
  const oldBtn = cartSidebar.querySelector("#payNowBtn");
  if (oldBtn) oldBtn.remove();
  const btn = document.createElement("button");
  btn.id = "payNowBtn";
  btn.className = "pay-now-btn";
  btn.innerText = "Pay Now";
  btn.addEventListener("click", () => {
    const total = $("cartTotal") ? $("cartTotal").innerText : "0";
    alert(`Proceeding to pay ₹${total}`);
  });
  const totalElement = $("cartTotal");
  if (totalElement && totalElement.parentNode) totalElement.parentNode.appendChild(btn);
}

/* ================= NAVBAR & HERO ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  updateCartUI();

  // Hero "Order Now"
  const heroBtn = document.querySelector(".hero .btn-primary");
  if (heroBtn) heroBtn.addEventListener("click", e => { e.preventDefault(); showCategorySelection(); });

  // Navbar links
  const orderLink = $("orderLink");
  if (orderLink) orderLink.addEventListener("click", e => { e.preventDefault(); showCategorySelection(); });
  const payLink = $("payLink");
  if (payLink) payLink.addEventListener("click", e => { e.preventDefault(); toggleCart(); });

  const searchInput = $("searchInput");
  if (searchInput) searchInput.addEventListener("keypress", e => { if (e.key === "Enter") searchItem(); });
});
