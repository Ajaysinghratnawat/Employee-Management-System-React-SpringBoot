# Employee Management System (Full-Stack)

A professional Full-Stack web application developed using **React.js** for the frontend and **Spring Boot** for the backend. This system provides a streamlined interface for HR departments to manage employee data with full CRUD (Create, Read, Update, Delete) functionality.

---

## 🚀 Features

* **Employee Dashboard:** View a comprehensive list of all employees.
* **Add Employee:** Modal/Form to register new staff members.
* **Update Records:** Edit existing employee details dynamically.
* **Delete Records:** Remove employee profiles from the database.
* **Responsive Design:** Fully compatible with mobile, tablet, and desktop views via Bootstrap.
* **REST API Integration:** Clean separation of concerns between frontend and backend.

---

## 🛠️ Tech Stack

### Frontend
* **React.js** (Functional Components & Hooks)
* **Axios** (Promise-based HTTP client)
* **React Router Dom** (Navigation)
* **Bootstrap 5** (UI Styling)

### Backend
* **Java 17+**
* **Spring Boot 3.x**
* **Spring Data JPA** (Hibernate)
* **MySQL** (Database)
* **Maven** (Dependency Management)

---

## 📋 Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [Java JDK](https://www.oracle.com/java/technologies/downloads/) (v17 or higher)
* [MySQL Server](https://dev.mysql.com/downloads/installer/)
* An IDE (IntelliJ IDEA, VS Code, or STS)

---

## ⚙️ Installation & Setup

### 1. Database Configuration
1. Login to MySQL and create the database:
   ```sql
   CREATE DATABASE employee_management_system;
### 2. Backend Configuration (Spring Boot)

1.  Navigate to the backend directory:
    ```bash
    cd backend-folder-name
    ```
2.  Open `src/main/resources/application.properties` and update the following properties with your MySQL credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_system
    spring.datasource.username=YOUR_MYSQL_USERNAME
    spring.datasource.password=YOUR_MYSQL_PASSWORD
    
    # Hibernate properties
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
    ```
3.  Build and run the application using Maven:
    ```bash
    mvn spring-boot:run
    ```
    *The backend server will start at:* `http://localhost:8080`

### 3. Frontend Configuration (React)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend-folder-name
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
    *The application will automatically open at:* `http://localhost:3000`

---

## 📡 API Endpoints (Base URL: `http://localhost:8080/api/v1/`)



| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/employees` | Retrieve a list of all employees |
| **POST** | `/employees` | Create and save a new employee |
| **GET** | `/employees/{id}` | Get specific employee details by ID |
| **PUT** | `/employees/{id}` | Update existing employee information |
| **DELETE** | `/employees/{id}` | Permanently remove an employee |

---

## 📂 Project Structure

### Backend (Spring Boot)
* **Controller:** Handles HTTP requests and maps them to service methods.
* **Service:** Contains business logic (optional but recommended for scalability).
* **Repository:** Interface for CRUD operations via Spring Data JPA.
* **Entity:** Defines the MySQL table structure using JPA annotations.

### Frontend (React)
* **Components:** UI elements like Header, Footer, and List/Update forms.
* **Services:** Axios configurations to communicate with the Spring Boot API.
