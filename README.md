# 🛍️ FutureStore – Modern E-Commerce Web App

FutureStore is a modern, responsive e-commerce web application built using **React**.  
It provides a clean shopping experience with product browsing, authentication, cart, wishlist, and checkout functionality.

🔗 **Live Demo:** https://future-fs-002.vercel.app  

---

## 🚀 Features

- 🛒 Product listing with modern UI
- 🔍 Search, category filter & sorting
- ❤️ Wishlist functionality
- 🧾 Product details with image gallery
- 🔐 Authentication (Login required for checkout)
- 🛍️ Cart & Checkout flow
- 📦 Orders page
- 📱 Fully responsive (Mobile + Tablet + Desktop)
- 🌙 Dark-themed modern UI
- ⚡ Fast deployment using Vercel

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, React Router
- **State Management:** Context API
- **Styling:** Custom CSS (Responsive, Mobile-first)
- **Build Tool:** Vite
- **Deployment:** Vercel

---

## Project Structure


FUTURE_FS_02/
│
├── public/
│
├── src/
│   ├── assets/                 # Images & static assets
│
│   ├── components/             # Reusable UI components
│   │   ├── CartItem.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OrderSummary.jsx
│   │   ├── OrderTimeline.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Rating.jsx
│   │   ├── RecentlyViewed.jsx
│   │   └── Toast.jsx
│
│   ├── context/                # Global state (Context API)
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── WishlistContext.jsx
│   │   └── cartReducer.js
│
│   ├── data/                   # Static data
│   │   └── products.js
│
│   ├── pages/                  # Application pages
│   │   ├── Home.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Success.jsx
│   │   ├── Orders.jsx
│   │   ├── Invoice.jsx
│   │   ├── Login.jsx
│   │   └── Wishlist.jsx
│
|   ├── utils/                  
│   |   ├── recent.js
|
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md

🔐 Protected Routes

The following routes are accessible only after login:

/checkout

/success

/orders

/invoice

If a user is not authenticated, they are redirected to the Login page.

🚀 Getting Started (Local Setup)
# Clone the repository
git clone https://github.com/akshaykumarsingh1501/FUTURE_FS_02.git

# Navigate into the project
cd FUTURE_FS_02

# Install dependencies
npm install

# Start development server
npm run dev


The app will run on:
👉 http://localhost:5173

📱 Responsiveness

Mobile-first layout

Optimized spacing for small screens

Adaptive grid system

Touch-friendly buttons & inputs

📌 Future Improvements

Backend integration (API)

Real authentication system

Payment gateway (UPI / Card)

Admin dashboard

Order history persistence

👤 Author

Akshay Kumar Singh
Frontend Developer | React Enthusiast

GitHub: https://github.com/akshaykumarsingh1501