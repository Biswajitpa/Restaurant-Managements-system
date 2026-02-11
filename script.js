// ===== Full Menu with Images =====
const PREDEFINED_MENU= [
  { id: 1, title: "Paneer Butter Masala", category: "Indian", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRQMKHs5qBBmBwVN6e7UTPlt3PpK2c6T8XA&s" },
  { id: 2, title: "Chicken Biryani", category: "Indian", price: 130, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s" },
  { id: 3, title: "Spring Rolls", category: "Chinese", price: 150, img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg" },
  { id: 4, title: "Sushi", category: "Japanese", price: 50, img: "https://images.getrecipekit.com/20240406030024-andy-20cooks-20-20sushi-20recipe-20recipe.jpg?aspect_ratio=4:3&quality=90&" },
  { id: 5, title: "Veg Burger", category: "Veg", price: 125, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUj-oaXjE6q2wY2ReKcNSAVy7pqEh0uJQ9iQ&s  " },
  { id: 6, title: "Grilled Chicken", category: "Non-Veg", price: 200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCejJG8uGK5kCRUQUlRptPivNJj8kSoWtjgg&s" },
  { id: 7, title: "Chocolate Cake", category: "Sweet Dish", price: 3999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jWA0VaTu_McECyx9xloy_Socgev8HoIag&s" },
  { id: 8, title: "Latte", category: "Coffee", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8Q_RrELDLpBSuhHF9CEAWgSBo9mRQtSy-g&s "},
  { id: 9, title: "Espresso", category: "Hot Coffee", price: 2.99, img: "https://cdn.shopify.com/s/files/1/0669/0966/7619/files/espresso-shot-crema-in-white-cup-on-wood-table-wrexham-bean.webp?v=1745257519" },
  { id: 10, title: "coke", category: "Cold Drinks", price: 75, img: "https://cdn.uengage.io/uploads/18085/image-179182-1711711756.jpeg" },
  { id: 11, title: "French Fries", category: "Snacks", price: 160, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-yEQFkBTlySNv8Y-Vr-sdATg1tzy_kO2rg&s" },
  { id: 12, title: "Dal Tadka", category: "Indian", price: 85, img: "https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions-1024x822.jpg.webp" },
  { id: 13, title: "Rajma Masala", category: "Indian", price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41waSU6aZq8SpvXONfhxyeT7-HauxsVpfvQ&s" },
  { id: 14, title: "Aloo Matar", category: "Indian", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e7RqeHiz3tAwbOD4SDvmc190waysfoGOgw&s" },
  { id: 15, title: "Bhindi Masala", category: "Indian", price: 55, img: "https://www.nehascookbook.com/wp-content/uploads/2022/10/Dahi-bhindi-WS-500x500.jpg" },
  { id: 16, title: "Kadhi Pakora", category: "Indian", price: 30, img: "https://mytastycurry.com/wp-content/uploads/2020/06/Kadhi-pakora-1-500x500.jpg" },
  { id: 17, title: "Malai Kofta", category: "Indian", price: 150, img: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg" },
  { id: 18, title: "Paneer Tikka", category: "Indian", price: 100, img: "https://www.cookingcarnival.com/wp-content/uploads/2021/07/Hariyali-Paneer-Tikka-4.jpg" },
  { id: 19, title: "Butter Naan", category: "Indian", price: 30, img: "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg" },
  { id: 20, title: "Garlic Naan", category: "Indian", price: 40, img: "https://goodfooddiscoveries.com/wp-content/uploads/2024/04/easy-cheese-garlic-naan-bread-3-683x1024.jpg" },
  { id: 21, title: "Tandoori Chicken", category: "Indian", price: 100, img: "https://sinfullyspicy.com/wp-content/uploads/2023/11/1200-by-1200-images-2.jpg" },
  { id: 22, title: "Chicken Korma", category: "Indian", price: 200, img: "https://recipe52.com/wp-content/uploads/2022/04/white-chicken-korma-2.jpg" },
  { id: 23, title: "Mutton Biryani", category: "Indian", price: 220 , img: "https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg" },
  { id: 24, title: "Paneer Lababdar", category: "Indian", price: 100, img: "https://www.vidhyashomecooking.com/wp-content/uploads/2022/12/PaneerLababdarRecipe.jpg" },
  { id: 25, title: "Chicken Vindaloo", category: "Indian", price: 110, img: "https://images.archanaskitchen.com/images/recipes/indian/main-course/indian-non-veg-recipes/chicken-recipes/Goan_Chicken_Vindaloo_028f6c281a.jpg" },
  { id: 26, title: "Egg Curry", category: "Indian", price: 50, img: "https://www.sharmispassions.com/wp-content/uploads/2015/06/EggCurry5.jpg" },
  { id: 27, title: "Lamb Rogan Josh", category: "Indian", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rPBhcKkoktodRI7sXmW7I7KUf4F2ZJJFNg&s" },
  { id: 28, title: "Fish Curry", category: "Indian", price: 150, img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Manglorean-Fish-Curry-750x750.jpg" },
  { id: 29, title: "Paneer Bhurji", category: "Indian", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkEKY0Cqc665B5Nv2H4BCFisW-x4uw7ai_Q&s" },
  { id: 30, title: "Chole Masala", category: "Indian", price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl949jrdLZseI1fRYRqcoOiKw-RR8xMmNRNw&s" },
  { id: 31, title: "Pav Bhaji", category: "Indian", price: 80, img: "https://greedyeats.com/wp-content/uploads/2024/01/Pav-bhaji.jpg" },
  { id: 32, title: "Veg Hakka Noodles", category: "Chinese", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Qrc3-vPlXeDWaT8w7Vtlfl7Fq6-_NVpwrw&s" },
  { id: 33, title: "Chicken Hakka Noodles", category: "Chinese", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89FGhd8AgfBheeK4V_IDWnVmRtq2Df_xa8w&s" },
  { id: 34, title: "Veg Fried Rice", category: "Chinese", price: 50, img: "https://i0.wp.com/sirisblog.com/wp-content/uploads/2024/05/20210905_140559-scaled.jpg?resize=840%2C630&ssl=1" },
  { id: 35, title: "Chicken Fried Rice", category: "Chinese", price: 85, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYscNsOtcOqTmjr0kQES62GqlrNLyk3D7Lg&s" },
  { id: 36, title: "Manchurian Dry Veg", category: "Chinese", price: 150, img: "https://www.cookclickndevour.com/wp-content/uploads/2018/05/veg-manchurian-recipe.jpg" },
  { id: 37, title: "Manchurian Chicken", category: "Chinese", price: 150, img: "https://www.kannammacooks.com/wp-content/uploads/chicken-manchurian-recipe-dry-restaurant-style-1.jpg" },
  { id: 38, title: "Chili Paneer", category: "Chinese", price: 120, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYyiWwGKDIJeO8d_9b-X79tTvEOJDKdvLJg&s" },
  { id: 39, title: "Chili Chicken", category: "Chinese", price: 15.99, img: "https://source.unsplash.com/300x200/?chili,chicken&sig=39" },
  { id: 40, title: "Schezwan Noodles", category: "Chinese", price: 12.99, img: "https://source.unsplash.com/300x200/?schezwan,noodles&sig=40" },
  { id: 41, title: "Schezwan Fried Rice", category: "Chinese", price: 12.49, img: "https://source.unsplash.com/300x200/?schezwan,friedrice&sig=41" },
  { id: 42, title: "Vegetable Spring Roll", category: "Chinese", price: 7.99, img: "https://source.unsplash.com/300x200/?veg,springroll&sig=42" },
  { id: 43, title: "Chicken Spring Roll", category: "Chinese", price: 8.99, img: "https://source.unsplash.com/300x200/?chicken,springroll&sig=43" },
  { id: 44, title: "Sweet & Sour Veg", category: "Chinese", price: 11.99, img: "https://source.unsplash.com/300x200/?sweet,sour,veg&sig=44" },
  { id: 45, title: "Sweet & Sour Chicken", category: "Chinese", price: 13.49, img: "https://source.unsplash.com/300x200/?sweet,sour,chicken&sig=45" },
  { id: 46, title: "Veg Manchurian Gravy", category: "Chinese", price: 12.99, img: "https://source.unsplash.com/300x200/?veg,manchurian,gravy&sig=46" },
  { id: 47, title: "Chicken Manchurian Gravy", category: "Chinese", price: 14.99, img: "https://source.unsplash.com/300x200/?chicken,manchurian,gravy&sig=47" },
  { id: 48, title: "Hot Garlic Noodles", category: "Chinese", price: 10.99, img: "https://source.unsplash.com/300x200/?garlic,noodles&sig=48" },
  { id: 49, title: "Hot Garlic Chicken", category: "Chinese", price: 13.99, img: "https://source.unsplash.com/300x200/?garlic,chicken&sig=49" },
  { id: 50, title: "Dimsum Veg", category: "Chinese", price: 9.99, img: "https://source.unsplash.com/300x200/?dimsum,veg&sig=50" },
  { id: 51, title: "Dimsum Chicken", category: "Chinese", price: 11.99, img: "https://source.unsplash.com/300x200/?dimsum,chicken&sig=51" },
  { id: 52, title: "Veg Biryani", category: "Lunch", price: 150, img: "https://source.unsplash.com/300x200/?veg,biryani&sig=52" },
  { id: 53, title: "Chicken Biryani", category: "Lunch", price: 200, img: "https://source.unsplash.com/300x200/?chicken,biryani&sig=53" },
  { id: 54, title: "Paneer Butter Masala", category: "Lunch", price: 180, img: "https://source.unsplash.com/300x200/?paneer,butter,masala&sig=54" },
  { id: 55, title: "Dal Makhani", category: "Lunch", price: 130, img: "https://source.unsplash.com/300x200/?dal,makhani&sig=55" },
  { id: 56, title: "Mixed Veg Curry", category: "Lunch", price: 140, img: "https://source.unsplash.com/300x200/?mixed,veg,curry&sig=56" },
  { id: 57, title: "Butter Chicken", category: "Lunch", price: 220, img: "https://source.unsplash.com/300x200/?butter,chicken&sig=57" },
  { id: 58, title: "Mutton Rogan Josh", category: "Lunch", price: 250, img: "https://source.unsplash.com/300x200/?mutton,roganjosh&sig=58" },
  { id: 59, title: "Chole Bhature", category: "Lunch", price: 120, img: "https://source.unsplash.com/300x200/?chole,bhature&sig=59" },
  { id: 60, title: "Palak Paneer", category: "Lunch", price: 170, img: "https://source.unsplash.com/300x200/?palak,paneer&sig=60" },
  { id: 61, title: "Jeera Rice", category: "Lunch", price: 100, img: "https://source.unsplash.com/300x200/?jeera,rice&sig=61" },
  { id: 62, title: "Veg Pulao", category: "Lunch", price: 140, img: "https://source.unsplash.com/300x200/?veg,pulao&sig=62" },
  { id: 63, title: "Fish Curry", category: "Lunch", price: 220, img: "https://source.unsplash.com/300x200/?fish,curry&sig=63" },
  { id: 64, title: "Egg Curry", category: "Lunch", price: 150, img: "https://source.unsplash.com/300x200/?egg,curry&sig=64" },
  { id: 65, title: "Aloo Gobi", category: "Lunch", price: 130, img: "https://source.unsplash.com/300x200/?aloo,gobi&sig=65" },
  { id: 66, title: "Paneer Tikka Masala", category: "Lunch", price: 190, img: "https://source.unsplash.com/300x200/?paneer,tikka,masala&sig=66" },
  { id: 67, title: "Dal Fry", category: "Lunch", price: 120, img: "https://source.unsplash.com/300x200/?dal,fry&sig=67" },
  { id: 68, title: "Chicken Curry", category: "Lunch", price: 210, img: "https://source.unsplash.com/300x200/?chicken,curry&sig=68" },
  { id: 69, title: "Veg Korma", category: "Lunch", price: 160, img: "https://source.unsplash.com/300x200/?veg,korma&sig=69" },
  { id: 70, title: "Mutton Curry", category: "Lunch", price: 240, img: "https://source.unsplash.com/300x200/?mutton,curry&sig=70" },
  { id: 71, title: "Lassi", category: "Lunch", price: 60, img: "https://source.unsplash.com/300x200/?lassi&sig=71" },
  { id: 72, title: "Grilled Chicken", category: "Dinner", price: 250, img: "https://source.unsplash.com/300x200/?grilled,chicken&sig=72" },
  { id: 73, title: "Paneer Tikka", category: "Dinner", price: 200, img: "https://source.unsplash.com/300x200/?paneer,tikka&sig=73" },
  { id: 74, title: "Veg Manchurian", category: "Dinner", price: 180, img: "https://source.unsplash.com/300x200/?veg,manchurian&sig=74" },
  { id: 75, title: "Chicken Manchurian", category: "Dinner", price: 220, img: "https://source.unsplash.com/300x200/?chicken,manchurian&sig=75" },
  { id: 76, title: "Spring Rolls", category: "Dinner", price: 150, img: "https://source.unsplash.com/300x200/?spring,rolls&sig=76" },
  { id: 77, title: "Fried Rice", category: "Dinner", price: 180, img: "https://source.unsplash.com/300x200/?fried,rice&sig=77" },
  { id: 78, title: "Noodles", category: "Dinner", price: 170, img: "https://source.unsplash.com/300x200/?noodles&sig=78" },
  { id: 79, title: "Sushi Roll", category: "Dinner", price: 300, img: "https://source.unsplash.com/300x200/?sushi,roll&sig=79" },
  { id: 80, title: "Tempura", category: "Dinner", price: 250, img: "https://source.unsplash.com/300x200/?tempura&sig=80" },
  { id: 81, title: "Ramen", category: "Dinner", price: 280, img: "https://source.unsplash.com/300x200/?ramen&sig=81" },
  { id: 82, title: "Veg Pizza", category: "Dinner", price: 200, img: "https://source.unsplash.com/300x200/?veg,pizza&sig=82" },
  { id: 83, title: "Chicken Pizza", category: "Dinner", price: 250, img: "https://source.unsplash.com/300x200/?chicken,pizza&sig=83" },
  { id: 84, title: "Spaghetti", category: "Dinner", price: 220, img: "https://source.unsplash.com/300x200/?spaghetti&sig=84" },
  { id: 85, title: "Lasagna", category: "Dinner", price: 240, img: "https://source.unsplash.com/300x200/?lasagna&sig=85" },
  { id: 86, title: "Grilled Fish", category: "Dinner", price: 260, img: "https://source.unsplash.com/300x200/?grilled,fish&sig=86" },
  { id: 87, title: "Beef Steak", category: "Dinner", price: 300, img: "https://source.unsplash.com/300x200/?beef,steak&sig=87" },
  { id: 88, title: "Caesar Salad", category: "Dinner", price: 180, img: "https://source.unsplash.com/300x200/?caesar,salad&sig=88" },
  { id: 89, title: "Garlic Bread", category: "Dinner", price: 120, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theseasonedmom.com%2Fhow-to-make-garlic-bread%2F&psig=AOvVaw1dwGpmYBLmwS4kNra_u__J&ust=1764915582932000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOCynYalo5EDFQAAAAAdAAAAABA_" },
  { id: 90, title: "Paneer Salad", category: "Dinner", price: 160, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtC-E1g8Cg34&psig=AOvVaw04tyiq4yvCZzpQZHjDf_ee&ust=1764915509513000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjIpeako5EDFQAAAAAdAAAAABAE" },
  { id: 91, title: "Chocolate Mousse", category: "Dinner", price: 150, img: "data:image/jpeg;base64,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" }
];
// ===== Categories =====
const categories = ["Indian","Chinese","Japanese","Veg","Non-Veg","Sweet Dish","Coffee","Hot Coffee","Cold Drinks","Snacks","Lunch","Dinner"];

// ===== Merge dynamic items into main menu =====
let MENU = [...PREDEFINED_MENU];
let currentId = MENU.length + 1;

// Add dynamic dishes per category
["Japanese","Veg","Non-Veg","Sweet Dish","Coffee","Hot Coffee","Cold Drinks","Snacks"].forEach(cat => {
  for(let i = 1; i <= 20; i++){
    MENU.push({
      id: currentId++,
      title: `${cat} dish ${i}`,
      category: cat,
      price: (Math.random() * 20 + 5).toFixed(2),
      img: `https://source.unsplash.com/300x200/?${cat}-food&sig=${currentId}`
    });
  }
});


// ===== Tables & Delivery =====
const TABLES = ["Table 1", "Table 2", "Table 3", "Table 4", "Table 5"];
const DELIVERY_COMPANIES = ["Zomato", "Swiggy", "Uber Eats"];

// ===== Render Menu with Images =====
function renderMenu(menuItems, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        <p>Category: ${item.category}</p>
        <p>Price: ₹${item.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// ===== Populate Dishes with Icons =====
function populateDishes(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "<p>Select Dishes:</p>";
  const dishContainer = document.createElement("div");
  dishContainer.classList.add("dish-checkboxes");
  MENU.forEach(item => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${item.id}">
      <img src="${item.img}" alt="${item.title}" class="dish-icon" style="width:40px; height:40px; object-fit:cover;"> ${item.title}
    `;
    dishContainer.appendChild(label);
  });
  container.appendChild(dishContainer);
}

// ===== Populate Tables & Delivery =====
function populateTables() {
  const tableSelect = document.getElementById("table");
  TABLES.forEach(table => {
    const option = document.createElement("option");
    option.value = table;
    option.textContent = table;
    tableSelect.appendChild(option);
  });
}

function populateDeliveryMenu() {
  const delMenu = document.getElementById("del-menu");
  delMenu.innerHTML = "";
  MENU.forEach(item => {
    const option = document.createElement("option");
    option.value = item.title;
    option.textContent = item.title;
    option.dataset.img = item.img;
    delMenu.appendChild(option);
  });
}

// ===== Initial Render =====
document.getElementById("current-date").innerText = new Date().toLocaleDateString();
renderMenu(MENU, "menu-list");
renderMenu(MENU, "dish-list");
populateDishes("booking-dishes");
populateDishes("event-dishes");
populateTables();
populateDeliveryMenu();

// ===== Filters =====
document.querySelectorAll("#filter-container button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#filter-container button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    const filteredMenu = filter === "all" ? MENU : MENU.filter(item => item.category === filter);
    renderMenu(filteredMenu, "menu-list");
  });
});

// ===== QR Code Payment =====
function generateQRCode(amount, purpose = "Payment") {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  const upiId = "8658846620@ibl";
  const qrText = `upi://pay?pa=${upiId}&pn=Riverside+Bistro&am=${amount}&cu=INR&tn=${purpose}`;
  new QRCode(qrContainer, { text: qrText, width: 200, height: 200 });
  document.getElementById("qr-amount").innerText = `Amount: ₹${amount}`;
  document.getElementById("payment-qr").style.display = "block";
}

// ===== Booking Form =====
document.getElementById("booking-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const table = document.getElementById("table").value;

  const dishIds = Array.from(document.querySelectorAll('#booking-dishes input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
  const dishes = MENU.filter(d => dishIds.includes(d.id));
  const total = dishes.reduce((sum,d)=>sum+parseFloat(d.price),0).toFixed(2);
  const paymentMethod = document.getElementById("payment-method").value;

  if(paymentMethod === "online" || paymentMethod === "ecash") {
    generateQRCode(total, `Table ${table} Booking by ${name}`);
  } else {
    document.getElementById("booking-summary").innerHTML = `
      <p>✅ ${name} booked <strong>Table ${table}</strong> on <strong>${date}</strong> at <strong>${time}</strong>.<br>
      Pre-ordered: ${dishes.length>0?dishes.map(d=>d.title).join(", "):"None"}<br>
      <b>Payment Method: Cash on Arrival (₹${total})</b></p>
    `;
    document.getElementById("payment-qr").style.display = "none";
  }
});

// ===== Event Booking Form =====
document.getElementById("event-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("event-name").value;
  const date = document.getElementById("event-date").value;
  const time = document.getElementById("event-time").value;
  const people = document.getElementById("event-people").value;
  const type = document.getElementById("event-type").value;
  const selectedDishes = Array.from(document.querySelectorAll("#event-dishes input:checked")).map(i=>i.value);
  const paymentMethod = document.getElementById("event-payment-method")?.value || "cash";
  const total = selectedDishes.reduce((sum,id)=>{
    const dish = MENU.find(d=>d.id==id);
    return sum+(dish?parseFloat(dish.price):0);
  },0).toFixed(2);

  if(paymentMethod === "online" || paymentMethod === "ecash") {
    generateQRCode(total, `${type} Event by ${name}`);
  } else {
    document.getElementById("event-summary").innerHTML = `
      <p>Thank you <strong>${name}</strong>, your <strong>${type}</strong> event for <strong>${people}</strong> people is booked on <strong>${date}</strong> at <strong>${time}</strong>.</p>
      <p>Selected Dishes: ${selectedDishes.length>0?selectedDishes.join(", "):"None"}</p>
      <b>Payment Method: Cash on Arrival (₹${total})</b>
    `;
  }
});

// ===== Hotel Booking Form =====
document.getElementById("hotel-booking-form").addEventListener("submit", e => {
  e.preventDefault();
  const guest = document.getElementById("guest-name").value;
  const checkin = document.getElementById("checkin-date").value;
  const checkout = document.getElementById("checkout-date").value;
  const roomType = document.getElementById("room-type").value;
  const acType = document.getElementById("ac-type").value;

  const selectedDishIds = Array.from(document.querySelectorAll('#hotel-dishes input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
  const selectedDishes = MENU.filter(d => selectedDishIds.includes(d.id));
  const total = selectedDishes.reduce((sum,d)=>sum+parseFloat(d.price),0).toFixed(2);
  const paymentMethod = document.getElementById("hotel-payment-method")?.value || "cash";

  if(paymentMethod === "online" || paymentMethod === "ecash"){
    generateQRCode(total, `${roomType} Hotel Booking by ${guest}`);
  } else {
    document.getElementById("hotel-booking-summary").innerHTML = `
      <p>Thank you <strong>${guest}</strong>, your <strong>${roomType}</strong> room (${acType}) is booked from <strong>${checkin}</strong> to <strong>${checkout}</strong>.</p>
      <p>Pre-ordered Dishes: ${selectedDishes.length>0?selectedDishes.map(d=>d.title).join(", "):"None"}</p>
    `;
  }
});

// ===== Delivery Booking Form =====
document.getElementById("delivery-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("del-name").value;
  const address = document.getElementById("del-address").value;
  const phone = document.getElementById("del-phone").value;
  const menu = document.getElementById("del-menu").value;
  const price = MENU.find(d=>d.title===menu)?.price || 0;
  const paymentMethod = document.getElementById("delivery-payment-method")?.value || "cash";

  if(paymentMethod === "online" || paymentMethod === "ecash"){
    generateQRCode(price, `Delivery for ${menu} by ${name}`);
  } else {
    document.getElementById("delivery-summary").innerHTML = `
      <p>Thank you <strong>${name}</strong>, your order for <strong>${menu}</strong> will be delivered to <strong>${address}</strong>. Contact: <strong>${phone}</strong></p>
    `;
  }
});