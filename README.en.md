<h1 align="center">🧾 Customer Manager App (EN)</h1>

<p align="center">
  🌎 <strong>Languages:</strong><br>
  <a href="README.md">🇧🇷 Português</a> |
  <a href="README.en.md">🇺🇸 English</a>
</p>

The **Customer Manager App** is a **Full Stack** application designed to manage customers in a simple, modern, and efficient way.

The project implements a complete CRUD (**Create, Read, Update, Delete**) using **Spring Boot** on the backend and **Angular** on the frontend, with direct integration via a **RESTful API** and data persistence in **MySQL**.

---

## 🎯 **Why this project?**

The main goal of this project is to consolidate learning and hands-on practice in a **Java + Angular full stack** environment, covering all stages of modern application development:

- Creating and consuming **REST APIs**
- Using **standalone and reactive components** in Angular
- Frontend and backend integration
- Handling real data in a relational database
- Testing, best practices, and clean architecture

This project also serves as a **reference model** for those who want to understand how to structure a complete CRUD using technologies widely adopted in the market.

## 📂 **Project Structure**

The overall structure is divided into **frontend** (Angular) and **backend** (Spring Boot):

```bash
customer-manager-app/
│
├── backend/
│   ├── src/main/java/com/example/customer/
│   │   ├── controller/CustomerController.java
│   │   ├── service/CustomerService.java
│   │   ├── repository/CustomerRepository.java
│   │   └── model/Customer.java
│   ├── resources/application.properties
│   └── pom.xml
│
└── frontend/
    ├── src/app/
    │   ├── components/
    │   │   ├── post-customer/
    │   │   ├── update-customer/
    │   │   └── get-all-customers/
    │   ├── service/customer.service.ts
    │   ├── model/customer.ts
    │   └── app.routes.ts
    ├── assets/
    ├── styles.css
    └── angular.json
```
## 🛠️ **Tools & Technologies**
| Category           | Technologies                                                             |
| ------------------ | ------------------------------------------------------------------------ |
| **Backend**        | ☕ Java 17+, 🌀 Spring Boot (Web, JPA, Validation), 🌐 CORS Configuration |
| **Frontend**       | ⚡ Angular 18+, 💻 TypeScript, 🎨 CSS3, 🧱 HTML5                          |
| **Database**       | 🐬 MySQL                                                                 |
| **Testing & APIs** | 🧪 Postman, ✅ HttpClientTestingModule                                    |
| **IDE & Tools**    | 🧰 IntelliJ IDEA, 🧩 VS Code                                             |

## 📷 Screenshots
### 1. Create Customer (Post)
<img src="https://github.com/user-attachments/assets/57793174-c20f-4df3-80ac-ae48070fe465" alt="post" width="600">

### 2. List Customers (Get)
<img src="https://github.com/user-attachments/assets/d35bbdcb-ab19-4795-9f1f-16fd246d94c1" alt="get-all" width="600">

### 3. Update Customer
<img src="https://github.com/user-attachments/assets/463b466b-c02b-40d9-9754-2340d46e0dc1" alt="update" width="600">

### 4. Delete Customer
<img src="https://github.com/user-attachments/assets/f93245b6-0efe-4892-8eda-97cb9e65dd41" alt="delete" width="600">

### 5. MySQL Database
<img src="https://github.com/user-attachments/assets/0c2a1809-54c5-48ff-99a3-03ed4b7d2f1c" alt="mysql" width="600">

### 6. Postman Request
<img src="https://github.com/user-attachments/assets/c9e0d9e1-edeb-4638-8342-8559fb60431c" alt="postman" width="600">

## 🚀 **How to Run the Project**

### 🔧 **Prerequisites**

- Java 17+
- Node.js 18+
- Angular CLI installed globally (`npm install -g @angular/cli`)
- Running MySQL instance

### 🗄️ 1. **Database Setup**

- Create a database in MySQL:
```sql
CREATE DATABASE customer_db;
```

- Edit `application.properties` in the backend:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/customer_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### ⚙️ 2. Run Backend (Spring Boot)

From `/backend` directory:
```bash
mvn spring-boot:run
```

Backend will be available at:
👉 `http://localhost:8080/api/customers`

### 💻 3. Run Frontend (Angular)

From `/frontend` directory:
```bash
npm install
ng serve
```

Frontend will be available at:
👉 `http://localhost:4200`

## 🎨 **Project Features**

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
