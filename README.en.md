<h1 align="center">🧾 Customer Manager App (EN)</h1>

<p align="center">
  🌎 <strong>Languages:</strong><br>
  <a href="README.md">🇧🇷 Português</a> |
  <a href="README.en.md">🇺🇸 English</a>
</p>

The **Customer Manager App** is a **Full Stack** application designed to manage customers in a simple, modern, and efficient way.

The project implements a complete CRUD (**Create, Read, Update, Delete**) using **Spring Boot** on the backend and **Angular** on the frontend, with direct integration via a **RESTful API** and data persistence in **PostgreSQL**.

---

## **How to Run the Project**

### **Environments**

- **Local:** uses `application-local.properties` and local PostgreSQL.
- **Production:** uses `application-prod.properties` and PostgreSQL on Render (env vars).

### **Prerequisites**

- Java 21
- Node.js 18+
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Running PostgreSQL instance

### **1. Database Setup (Local)**

Create a database in PostgreSQL:

```sql
CREATE DATABASE crud_db;
```

Local credentials live in `backend/src/main/resources/application-local.properties`.

### **2. Run Backend (Spring Boot)**

From `/backend` directory:

```bash
SPRING_PROFILES_ACTIVE=local mvn spring-boot:run
```

Windows PowerShell:

```powershell
$env:SPRING_PROFILES_ACTIVE="local"; mvn spring-boot:run
```

Backend will be available at: `http://localhost:8080/api/customers`

### **3. Run Frontend (Angular)**

From `/frontend` directory:

```bash
npm install
ng serve
```

Frontend will be available at: `http://localhost:4200`

### **Production (Render + Vercel)**

- Backend: Render (Spring Boot + PostgreSQL)
- Frontend: Vercel (Angular)
- Render env vars: `DB_URL`, `DB_USER`, `DB_PASSWORD`, `SPRING_PROFILES_ACTIVE=prod`

## **Project Features**

The **Customer Manager App** provides a complete CRUD with a modern and responsive UI.

### ✨ **Main Features**

- **➕ Create Customer**
Reactive form with validation and visual feedback.

- **📋 List Customers**
Responsive table with action buttons (Update / Delete).

- **✏️ Update Customer**
Data editing using a pre-filled form by ID.

- **❌ Delete Customer**
Instant deletion with automatic list refresh.

- **🌈 Modern UI**
  - Purple–pink gradient background (`#654ea3 → #eaafc8`)
  - Inter typography
  - Buttons with hover and focus effects
  - Centered and responsive layout

## 🧠 **Technical Learnings**

Throughout this project, several best practices were applied:

- Use of **standalone components** in Angular
- **Reactive Forms** with validation and data patching
- Unit testing with **HttpClientTestingModule**
- REST integration between **Angular and Spring Boot**
- **CORS** configuration and dynamic routing
- Modern styling and **responsive UX**

## 📜 License

This project is licensed under the **MIT** License.

You are free to use, modify, and distribute this code as long as proper credit is given.

## 🤝 **Contributing**

Contributions are very welcome!
To contribute:

1. Fork the repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes following **Conventional Commits**
4. Open a Pull Request 🚀

## 🧑‍💻 Author

**Piter Gomes** — Computer Science Student (5th Semester) & Full-Stack Developer

📧 [Email](mailto:piterg.bio@gmail.com) | 💼 [LinkedIn](https://www.linkedin.com/in/piter-gomes-4a39281a1/) | 💻 [GitHub](https://github.com/pitercoding) | 🌐 [Portfolio](https://portfolio-pitergomes.vercel.app/)
