# Shopping Cart 🛒

## Project Description

A mock shopping cart application built with React and Vite. This project demonstrates a functional e-commerce interface where users can browse products, add them to a cart, manage quantities, and view order summaries. It utilizes the `fakestoreapi.com` for product data and `react-router` for navigation.

## Table of Contents

- [Project Description](#project-description)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)

## Features ✨

- **Product Browsing:** View a list of products fetched from an external API.
- **Search and Filtering:** Search for products by title or description and filter by category.
- **Shopping Cart Functionality:** Add products to a cart, adjust quantities, and remove items.
- **Order Summary:** View subtotal, tax, and shipping costs with a final total.
- **Theming:** Supports both light and dark modes with automatic detection and manual switching.
- **Responsive Design:** Adapts to various screen sizes for a seamless user experience.
- **Testing:** Includes unit tests for key components using Vitest.

## Tech Stack 💻

- **Frontend:** React
- **Bundler:** Vite
- **Language:** JavaScript
- **Routing:** React Router (`react-router`)
- **State Management:** React's `useState` hook
- **API:** Fakestoreapi (`https://fakestoreapi.com/products`)
- **Styling:** CSS Modules
- **Testing:** Vitest, React Testing Library
- **Linting:** ESLint

## Installation 🚀

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hasan-mostafa1/shopping-cart
   cd shopping-cart
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage 🛍️

This project serves as a demonstration of a functional e-commerce shopping cart. The primary use case is to showcase:

- **Product Display:** Users can browse an array of products. The `Shop` component fetches products using the `useProducts` hook and displays them using the `Product` component.
- **Cart Management:** Users can add items to their cart from the shop page. The `Product` component handles adding and updating quantities. The `Cart` component displays the current items in the cart, calculates totals, and allows for item removal.
- **Navigation:** The `Navbar` provides links to the Home, Shop, and Cart pages. `react-router` manages the client-side routing.
- **Theming:** The `useTheme` hook and `global.css` handle theme switching between light and dark modes.

To use the application:

1. After installation, run `npm run dev`.
2. Open your browser to `http://localhost:5173` (or the port specified by Vite).
3. Navigate through the 'Shop' to view products and add them to your cart.
4. Visit the 'Cart' page to review your selections and see the order summary.

## Project Structure 📂

```
shopping-cart/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   ├── app/
│   │   │   ├── hooks/useProducts.jsx
│   │   │   └── App.jsx
│   │   │   └── App.module.css
│   │   ├── cart/
│   │   │   ├── tests/
│   │   │   │   ├── Cart.test.jsx
│   │   │   │   └── __snapshots__/Cart.test.jsx.snap
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.module.css
│   │   ├── coming_soon/
│   │   │   ├── tests/
│   │   │   │   ├── ComingSoon.test.jsx
│   │   │   │   └── __snapshots__/ComingSoon.test.jsx.snap
│   │   │   ├── ComingSoon.jsx
│   │   │   └── ComingSoon.module.css
│   │   ├── error_page/
│   │   │   ├── tests/
│   │   │   │   ├── ErrorPage.test.jsx
│   │   │   │   └── __snapshots__/ErrorPage.test.jsx.snap
│   │   │   ├── ErrorPage.jsx
│   │   │   └── ErrorPage.module.css
│   │   ├── global.css
│   │   ├── home/
│   │   │   ├── tests/
│   │   │   │   ├── Home.test.jsx
│   │   │   │   └── __snapshots__/Home.test.jsx.snap
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── navbar/
│   │   │   ├── hooks/useTheme.jsx
│   │   │   ├── tests/
│   │   │   │   ├── Navbar.test.jsx
│   │   │   │   └── __snapshots__/Navbar.test.jsx.snap
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── product/
│   │   │   ├── tests/
│   │   │   │   ├── Product.test.jsx
│   │   │   │   └── __snapshots__/Product.test.jsx.snap
│   │   │   ├── Product.jsx
│   │   │   └── Product.module.css
│   │   ├── reset.css
│   │   ├── shop/
│   │   │   ├── tests/
│   │   │   │   ├── Shop.test.jsx
│   │   │   │   └── __snapshots__/Shop.test.jsx.snap
│   │   │   ├── Shop.jsx
│   │   │   └── Shop.module.css
│   │   ├── main.jsx
│   │   └── routes.jsx
│   └── tests/setup.js
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Dependencies 📦

- **React:** `react`, `react-dom`
- **Routing:** `react-router`
- **Development Dependencies:**
  - Vite: `vite`, `@vitejs/plugin-react`
  - ESLint: `eslint`, `@eslint/js`, `globals`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
  - Testing: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`

## Testing 🧪

Unit tests are included for several components using Vitest and React Testing Library. You can run the tests using the command:

```bash
npm test
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## 🔗 Important Links

- **Live Demo:** [Shopping Cart](https://shopping-souq.netlify.app/)
- **API Used:** [Fake Store API](https://fakestoreapi.com/)
- **Author's GitHub:** [hasan-mostafa1](https://github.com/hasan-mostafa1)
- **Author's LinkedIn:** [Hasan Mostafa](https://www.linkedin.com/in/hasan-mostafa-dev/)

---

<footer>
  <p align="center">
  ✨ Built with ❤️ and lots of code! ✨
 </p>
 <p align="center">
  ⭐ Feel free to fork, star, and open issues! ⭐
 </p>
  <p align="center">
    <a href="https://github.com/hasan-mostafa1/shopping-cart" target="_blank">shopping-cart</a>
  </p>
  <p align="center">
    Created by <a href="https://github.com/hasan-mostafa1" target="_blank">hasan_mostafa</a>
  </p>
  <p align="center">
    <a href="mailto:dev.hasan.mostafa1@gmail.com" target="_blank">✉️ dev.hasan.mostafa1@gmail.com</a>
  </p>
  <p align="center">
    <a href="https://github.com/hasan-mostafa1/blog-api-ts/fork" target="_blank">Fork</a> | <a href="https://github.com/hasan-mostafa1/blog-api-ts/watchers" target="_blank">Watch</a> | <a href="https://github.com/hasan-mostafa1/blog-api-ts/stargazers" target="_blank">Star</a> | <a href="https://github.com/hasan-mostafa1/blog-api-ts/issues" target="_blank">Issue</a>
  </p>
</footer>
