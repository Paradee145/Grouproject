const { body, validationResult } = require("express-validator");

exports.addEmployee = [
  body("name").notEmpty().withMessage("Name is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("salary").isFloat({ gt: 0 }).withMessage("Salary must be a positive number"),
  body("department").notEmpty().withMessage("Department is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
];




