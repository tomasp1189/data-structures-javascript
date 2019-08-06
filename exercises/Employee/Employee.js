/**
 * Write a class Employee, which represents an employee in a company.
 * The employee has a employeeNumber (9 digit number), firstName, lastName
 * and emailId as member variables. Create a few employee objects and
 * store them in an array. Write the insertion sort algorithm, which
 * takes an array of employee and sorts them in order of their employee
 * number.
 */

class Employee {
  constructor(employeeNumber, firstName, lastName, emailId) {
    this.employeeNumber = employeeNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
  }
}

module.exports = Employee;
