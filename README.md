# Zerodha Clone 🟢📈

A fullstack **Zerodha Clone** built using the **MERN** stack — MongoDB, Express.js, React.js, and Node.js.  
This project replicates the core experience of Zerodha, allowing users to sign up, log in securely, and access a personalized trading dashboard. Features include order management, portfolio tracking, and a structured UI, all styled responsively.

---

## Features

### 🔐 Secure Authentication

- Signup/Login with encrypted passwords (`bcryptjs`)
- JWT-based sessions with `httpOnly` cookies
- Persistent authentication across routes

### 📊 Trading Dashboard

- Modular sections: Orders, Holdings, Positions, Funds, Apps
- Sidebar navigation with active tab highlighting
- Profile dropdown with username and logout

### 📈 Portfolio & Orders

- View holdings and investment insights
- Order history and P&L summary
- UI supports dynamic stock chart integration

### 🔄 Smooth Navigation

- `React Router` client-side routing
- Separate frontend for public (unauthenticated) and dashboard for private (authenticated) views

---

## 🔧 Tech Stack

React
Node.js
Express
MongoDB

---

## 🛠️ Installation

Clone the repo
Install dependencies in /dashboard and /backend
Run both servers

## Folder Summary

| Folder      | Description                                        |
| ----------- | -------------------------------------------------- |
| `frontend`  | Public-facing landing page, signup & login views   |
| `backend`   | Node/Express API, MongoDB models, auth logic       |
| `dashboard` | Authenticated user dashboard with trading features |

## Contributions

Feel free to fork this repo, raise issues, or submit pull requests.
For major changes, please open an issue first to discuss what you would like to change.

## LICENSE

This project is licensed under the MIT License.
