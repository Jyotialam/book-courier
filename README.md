# BookCourier – Library-to-Home Delivery System

## Project Overview
**Project Name:** BookCourier – Library-to-Home Delivery System  
**Purpose:** BookCourier** is a library delivery management system that allows users to request book pickup or delivery from nearby libraries. The system aims to help students, researchers, and readers borrow and return books without physically visiting the library. It provides a seamless and convenient library experience online.  

## Live Demo
[Live URL of the project](#)  


## Key Features

### General
- Responsive layout for mobile, tablet, and desktop.
- Light/Dark theme toggle.
- Navbar with logo, website name, and links: Home, Books, Dashboard, Login/Register.
- Footer with quick links, contact info, social icons (using X logo), and copyright text.
- Animated sections and visually appealing design.

### Authentication
- Email/password login and one social login option.
- Registration with Name, Email, Password, and Profile Image.
- Strong password validation.
- Profile image properly updates on registration.
- Private routes protected using Firebase JWT token verification.

### Home Page
- Banner with 3 sliders showcasing book images, titles, and descriptions.
- Latest Books Section displaying recently added books.
- Coverage Section with a map showing cities available for delivery.
- "Why Choose BookCourier" section to highlight benefits.
- Additional animated and well-designed sections.

### Books
- All Books page displaying all available books in card layout.
- Book Details page with full information and “Order Now” modal.
- Users can place orders with Name, Email, Phone, Address.
- Orders are saved with status `pending` and payment status `unpaid`.

### User Dashboard
- **My Orders:** View all orders, cancel pending orders, pay for pending orders.
- **My Profile:** Update name and profile image.
- **Invoices:** View all payments made with Payment ID, amount, and date.
- **Wishlist:** Users can add books to their wishlist from Book Details page.

### Librarian Dashboard
- **Add Book:** Form to add new books with fields like book name, image, author, status, price, etc.
- **My Books:** Table showing all added books with edit/unpublish options.
- **Orders:** Manage book orders, change order status from `pending` → `shipped` → `delivered`.

### Admin Dashboard
- **All Users:** View all users, make them Admin or Librarian.
- **Manage Books:** Publish/unpublish or delete books (deleting a book deletes its orders as well).
- **Profile:** Update admin profile details.

### Additional Features
- Book Wishlist
- Reviews & Ratings on books
- Search & Sort books by name and price
- Skeleton loaders for better UI experience
- Optional: TanStack Query for optimized data fetching

---

## Technologies Used
- **Frontend:** React,React-router, TailwindCSS, DaisyUI, React Icons,swiper
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **Authentication:** Firebase Authentication
- **Backend-Deployment:**Vercel
- **Frontend-Deployment:**Netlify

