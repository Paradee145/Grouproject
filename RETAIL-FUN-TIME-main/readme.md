# Employee Attendance Management System (Capstone Project)

## 📌 Overview
This project is a **Employee Attendance Management System** developed as part of the capstone project. It is designed to manage employee attendance, work schedules, and request submissions. The system includes separate user roles for **Employees** and **Managers**, with different functionalities available for each.

---

## 🛠️ Features

### **1️⃣ Login Page**
- User authentication (ID/password)
- "Remember me" option for automatic login
- JWT token for session management
- Redirect to main page after successful login

### **2️⃣ Sign-up Page**
- User registration with ID, password, name, and role (Employee/Manager)
- Privacy policy agreement
- ID duplication check
- Redirect to login page after successful sign-up

### **3️⃣ Password Recovery**
- Send password reset link to email
- Allow user to set a new password after verification

### **4️⃣ Employee Information**
- View personal information, work schedule, and request history
- Track clock-in and clock-out times

### **5️⃣ Manager Information**
- View employee list, approve/reject requests, and manage work schedules

### **6️⃣ Request Form**
- Employees can submit leave or schedule change requests
- Managers approve or reject requests

### **7️⃣ Main Dashboard**
- Personalized dashboard displaying recent schedules and requests

### **8️⃣ Work Clock-in/Clock-out**
- Employees can clock in/out
- Record clock-in and clock-out times
- Indicate tardiness

### **9️⃣ My Request Checklist Page**
- View and track request status (Pending/Approved/Rejected)

### **🔟 View Full Schedule**
- Employees: View their own schedule
- Managers: View all employees' schedules

---

## ⚙️ Technologies Used
- **Frontend**: React, TailwindCSS
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL / MongoDB
- **Authentication**: JWT for secure login
- **State Management**: React Context API or Redux (for managing user authentication state)

---

## 💻 API Endpoints

- **POST /api/login**: Authenticate and issue JWT token
- **POST /api/signup**: Register a new user
- **POST /api/recover-password**: Send password reset link
- **POST /api/requests**: Submit a new request
- **GET /api/employees/:id**: Get employee details
- **GET /api/requests/user/:id**: Fetch employee request history
- **GET /api/schedule/user/:id**: Fetch personal schedule
- **GET /api/schedule/all**: Fetch full schedule for managers
- **PUT /api/requests/:id/approve**: Approve request
- **PUT /api/requests/:id/reject**: Reject request

---

## 📊 Database Schema

### **Users Table**
| Column Name      | Type           | Description               |
|------------------|----------------|---------------------------|
| `user_id`        | UUID (PK)      | Primary key for user      |
| `username`       | VARCHAR(50)    | User's ID (Login ID)      |
| `password`       | VARCHAR(255)   | Encrypted password        |
| `role`           | ENUM           | User role (employee/manager) |
| `created_at`     | TIMESTAMP      | Date of account creation  |

### **Attendance Table**
| Column Name      | Type           | Description               |
|------------------|----------------|---------------------------|
| `id`             | UUID (PK)      | Primary key               |
| `user_id`        | UUID (FK)      | Reference to Users table  |
| `clock_in`       | TIMESTAMP      | Clock-in time             |
| `clock_out`      | TIMESTAMP      | Clock-out time            |
| `status`         | ENUM           | Attendance status (e.g., on time, late) |

### **Requests Table**
| Column Name      | Type           | Description               |
|------------------|----------------|---------------------------|
| `id`             | UUID (PK)      | Primary key               |
| `user_id`        | UUID (FK)      | Reference to Users table  |
| `request_type`   | ENUM           | Request type (e.g., leave, schedule change) |
| `status`         | ENUM           | Request status (pending, approved, rejected) |
| `reason`         | TEXT           | Reason for the request    |
| `created_at`     | TIMESTAMP      | Date the request was created |

---

## 🏗️ Project Setup

### **1. Clone the repository**
```bash
git clone https://github.com/yourusername/employee-attendance-system.git
