# 🍔 Food Order App

A simple food ordering app built with React, Tailwind CSS, and Jotai for state management. Users can browse a menu, add or remove items from their cart, adjust quantities, and place an order. The backend uses a fake database stored in a `.js` file, with `fs.readFile` and `fs.writeFile` handling menu retrieval and order storage.

## ✨ Features

- 📜 View menu items fetched from a fake database
- ➕ Add and remove items from the cart
- 🔄 Increase or decrease item quantities in the cart
- 💰 Automatic total price calculation
- 🛒 Place an order by filling in a form (name, address, etc.)
- 💾 Orders are stored in the backend using `fs` module

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Jotai
- **Backend:** Node.js, Express
- **Data Handling:** `fs.readFile`, `fs.writeFile` (Fake JSON-based database)

## 🚀 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/food-order-app.git
   cd food-order-app
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Run the backend server:
   ```bash
   cd backend
   npm i
   npm start
   ```

4. Run the frontend:
   ```bash
   cd ../frontend
   npm i
   npm run dev
   ```

5. Open the app in your browser:
   ```
http://localhost:5173
   ```

## 📌 API Endpoints

- `GET /meals` - Fetch all menu items
- `POST /orders` - Submit an order (stores data in `data.js`)

## 📸 Screenshots
![foodorder2](https://github.com/user-attachments/assets/da81e9e4-fa9d-4dce-830e-abe1481845df)




## 🤝 Contributing
Feel free to submit issues and pull requests to improve the project!

---

Enjoy coding! 🚀

