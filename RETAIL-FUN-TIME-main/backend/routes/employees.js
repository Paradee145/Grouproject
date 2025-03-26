const express = require("express");
const router = express.Router();
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");
const { protect, authorize } = require("../middleware/auth"); // Import authentication

// ✅ GET all employees (Protected)
router.get("/", protect, getEmployees);

// ✅ GET an employee by ID (Protected)
router.get("/:id", protect, getEmployeeById);

// ✅ POST a new employee (Only Admins)
router.post("/", protect, authorize("admin"), addEmployee);

// ✅ PUT update an employee (Only Admins)
router.put("/:id", protect, authorize("admin"), updateEmployee);

// ✅ DELETE an employee (Only Admins)
router.delete("/:id", protect, authorize("admin"), deleteEmployee);

module.exports = router;



