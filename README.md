# e-commerce react project

## Features

Products Catalogue
Filters and Search 
Product details with some sub routes 
User Profile with some sub routes
Signup and Login
Cart
Checkout


## Layout and Pages
Homepage (/)
  Header: Logo (left), search bar, cart/user icons (right). Main navigation (categories) below the header or in a hamburger menu for mobile.
  Hero Section (Optional): A large banner with a call-to-action for offers or new arrivals.
  Featured Products Sections: Grid of popular or discounted products. Each product should be a Bootstrap card with image, name, price, and "Add to Cart" button.
  Footer: Useful links (about us, contacts), social media, legal information.
Product Catalogue Page (/products or /categories/:slug):
  Header/Breadcrumbs: Indicates the current category.
  Sidebar (Desktop) / Collapsible Filters (Mobile): Filters for price, category, brand, etc. (managed with Redux Toolkit).
  Main Content Area: Responsive grid of product cards. Pagination or "Load more" at the bottom.
Product Detail Page (/product/:id): 
  Header/Breadcrumbs: Allow you to go back. 
  Images Section: Main product image, with thumbnails below or beside. 
  Details Section: Name (H1), price, description, quantity selector, 'Add to Cart' button (clear and visible). 
  Additional Info Section: Tab or accordion for technical details, reviews, shipping (uses Bootstrap components).
  Related Products: Section at the bottom with other products that may be of interest. 
Cart Page (/cart): 
  Header: 'Your Cart' (H1). 
  Items List: Each row shows image, name, price, quantity (with +/- buttons), subtotal and 'Remove' button. 
  Order Summary: Subtotal, shipping costs (simulated), final total. 
  Checkout Button: Large and prominent. 
Checkout Page (/checkout): 
  Step process (shipping information, payment, summary). Uses Bootstrap forms with validation. 
  Few elements on the page to reduce the distractions
Sign-up Page (/signup):

Login Page (/login):



