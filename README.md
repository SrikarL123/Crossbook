# 📚 CrossBook

A full-stack book discovery and tracking platform that allows users to browse books, create accounts, and maintain personalized book preferences.

🌐 **Live Demo:** https://crossbook.netlify.app/

---

## 🚀 Features

### User Authentication

* Secure user signup and login
* Password encryption using BCrypt
* Persistent user accounts

### Book Discovery

* Browse books across multiple genres
* Clean and responsive user interface
* Dynamic book rendering

### Personalized Shelves

* ❤️ Add books to Favorites
* 👎 Mark books as Disliked
* Preferences persist across sessions

### Data Persistence

* User accounts stored in PostgreSQL
* Favorites and dislikes saved permanently
* Data remains available after logout/login

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Java
* Spring Boot
* Spring Data JPA

### Database

* PostgreSQL (Neon)

### Deployment

* Frontend: Netlify
* Backend: Render

---

## 🏗️ Project Architecture

Frontend (Netlify)
↓
JavaScript Fetch API
↓
Spring Boot REST API (Render)
↓
PostgreSQL Database (Neon)

---

## 🔑 Key Functionalities

### Authentication

* User Registration
* User Login
* Password Hashing with BCrypt

### Book Management

* Browse Books by Genre
* Favorite Books
* Dislike Books
* Persistent Book Preferences

### Database Operations

* Store User Information
* Store Favorites
* Store Dislikes
* Retrieve User-Specific Data

---

## 📸 Screenshots

Add screenshots here:

### Login Page

![Login Screenshot](images/login.png)

### Book Dashboard

![Dashboard Screenshot](images/dashboard.png)

### Favorites Section

![Favorites Screenshot](images/favorites.png)

### Disliked Books Section

![Disliked Screenshot](images/disliked.png)

---

## 💻 Local Setup

### Clone Repository

```bash
git clone https://github.com/SrikarL123/Crossbook.git
cd Crossbook
```

### Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

### Frontend Setup

Open:

```txt
frontend/index.html
```

in your browser.

---

## 📈 Future Improvements

* Book Search Functionality
* Reading Lists
* Book Reviews & Ratings
* Dark Mode
* User Profile Page
* Recommendation System

---

## 👨‍💻 Author

**Srikar Lokai**

* LinkedIn: https://www.linkedin.com/in/srikar-lokai/
* GitHub: https://github.com/SrikarL123

---

⭐ If you like this project, consider giving it a star!
