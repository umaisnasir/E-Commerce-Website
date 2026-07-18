# EcomX — Pakistani Eastern-Wear E-Commerce Website

EcomX is a modern and responsive front-end e-commerce website designed for Pakistani eastern-wear brands, fashion boutiques, student projects, and online-store prototypes.

The website features a dark glassmorphism interface, Pakistani fashion products, PKR pricing, product filtering, search, sorting, product details, and browser-based shopping-cart functionality.

## Live Demo

[View Live Website](https://umaisnasir.github.io/E-Commerce-Website/)

## GitHub Repository

[View Repository](https://github.com/umaisnasir/E-Commerce-Website)

## Features

* Modern glassmorphism interface
* Pakistani eastern-wear products
* Men’s and women’s product categories
* Product prices displayed in PKR
* Responsive design
* Mobile navigation drawer
* Product search
* Category filtering
* Product sorting
* Dynamic product count
* Product-detail page
* Shopping-cart functionality
* Local Storage support
* Quantity controls
* Cart subtotal and total calculations
* Newsletter form validation
* Contact form validation
* FAQ accordion
* Hover and focus animations
* GitHub Pages compatibility

## Website Pages

### Home

The homepage includes:

* Responsive navigation
* Hero section
* Featured products
* Festive Edit banner
* New arrivals
* Shop by Mood section
* Newsletter signup
* Footer

### Shop

The Shop page includes:

* Complete product catalogue
* Product search
* Men’s and women’s filters
* Price sorting
* Product-count display
* Empty search-result state
* Responsive product grid

### Product Details

The product-detail page includes:

* Main product image
* Product thumbnails
* Product name
* Collection name
* Fabric information
* PKR price
* Size selector
* Quantity selector
* Add-to-cart button
* Product description
* Care instructions
* Related products

### Cart

The Cart page includes:

* Added products
* Product images
* Selected sizes
* Product prices
* Quantity controls
* Remove-item option
* Item subtotals
* Delivery charges
* Final total
* Empty-cart state

Cart data is saved in the browser using `localStorage`.

### About

The About page includes:

* Brand Story
* Design Philosophy
* Fashion Positioning
* Pakistani menswear and womenswear direction
* Editorial glassmorphism layout

### Contact

The Contact page includes:

* EcomX Atelier information
* Karachi contact details
* Contact form
* Form validation
* Frequently Asked Questions
* Accessible FAQ accordion

## Technologies Used

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* Browser Local Storage
* Boxicons
* Git
* GitHub
* GitHub Pages

No framework, package manager, or build process is required.

## Project Structure

```text
E-Commerce-Website/
│
├── index.html
├── shop.html
├── sproduct.html
├── cart.html
├── about.html
├── contact.html
├── style.css
├── script.js
├── README.md
├── LICENSE
│
└── img/
    ├── products/
    └── other-assets/
```

## Product Categories

### Men’s Eastern Wear

* Embroidered kurtas
* Cotton kurtas
* Wash-and-wear suits
* Festive kurta sets
* Waistcoats
* Shalwar kameez
* Eastern co-ords

### Women’s Eastern Wear

* Lawn suits
* Pret sets
* Chiffon festive suits
* Jacquard outfits
* Printed kurtis
* Linen co-ords
* Shalwar kameez

## Search, Filter, and Sort

Users can:

* Search by product name
* Search by collection
* Search by fabric
* View all products
* Filter men’s products
* Filter women’s products
* Sort products by featured order
* Sort prices from low to high
* Sort prices from high to low

The visible product count updates automatically.

## Shopping Cart

The shopping cart uses browser `localStorage`.

Users can:

* Add products to the cart
* Select a product size
* Select a quantity
* Increase quantities
* Decrease quantities
* Remove products
* View product subtotals
* View delivery charges
* View the final order total

All prices are displayed in Pakistani Rupees.

Example:

```text
PKR 4,990
```

## Responsive Design

The website is designed for:

* Mobile phones
* Tablets
* Windows split-screen layouts
* Laptops
* Desktop monitors

Important responsive components include:

* Navigation drawer
* Hero section
* Product grid
* Product cards
* Promotional banners
* Product-detail layout
* Shopping cart
* Contact form
* FAQ accordion
* Footer

## Accessibility

The project includes:

* Semantic HTML
* Descriptive image alternative text
* Keyboard-accessible navigation
* Keyboard-accessible FAQ controls
* Visible focus states
* Accessible form labels
* `aria-expanded` states
* Reduced-motion support
* Mobile-friendly touch targets

## Running the Project Locally

### Clone the Repository

```bash
git clone https://github.com/umaisnasir/E-Commerce-Website.git
```

Open the project folder:

```bash
cd E-Commerce-Website
```

Open the folder in Visual Studio Code:

```bash
code .
```

### Run with Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click inside the file.
5. Select **Open with Live Server**.

You can also open `index.html` directly in a web browser.

## GitHub Pages Deployment

To deploy your own version:

1. Upload the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch.
7. Select the `/root` folder.
8. Click **Save**.

Your website URL will follow this format:

```text
https://your-username.github.io/repository-name/
```

## Asset Paths

Use relative paths for CSS, JavaScript, and images.

Correct:

```html
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>
<img src="./img/products/product.jpg" alt="Product name">
```

Avoid root-relative paths:

```html
<link rel="stylesheet" href="/style.css">
```

Root-relative paths may break when the website is hosted inside a GitHub Pages repository path.

## Demo Contact Information

**EcomX Atelier**

Office 402, Shahrah-e-Faisal
PECHS Block 6
Karachi, Pakistan

**Phone:** +92 21 3456 7890
**Email:** [hello@ecomx.pk](mailto:hello@ecomx.pk)
**Business Hours:** Monday–Saturday, 10:00 AM–8:00 PM

These contact details are demonstration content and should be replaced before using the website for a real business.

## Current Limitations

This project is currently a front-end template.

It does not include:

* User authentication
* Product database
* Admin dashboard
* Inventory management
* Payment gateway
* Real checkout processing
* Order database
* Email delivery
* Contact-form backend
* Newsletter backend
* Customer accounts
* Order-tracking API

The checkout and form features operate as front-end demonstrations.

## Future Improvements

* Add user registration and login
* Connect a backend API
* Add a product database
* Add an admin dashboard
* Integrate a Pakistani payment gateway
* Add cash-on-delivery order processing
* Add wishlist functionality
* Add product reviews
* Add discount-code support
* Add inventory tracking
* Add real order tracking
* Add image optimization
* Add automated testing
* Add Progressive Web App support

## Author

**Umair Nasir**

GitHub: [@umaisnasir](https://github.com/umaisnasir)

## License

This project is available under the MIT License.

See the [LICENSE](./LICENSE) file for more information.

---

Built as a modern and responsive Pakistani eastern-fashion e-commerce website.
