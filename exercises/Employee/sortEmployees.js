/**
 * Write a class Employee, which represents an employee in a company.
 * The employee has a employeeNumber (9 digit number), firstName, lastName
 * and emailId as member variables. Create a few employee objects and
 * store them in an array. Write the insertion sort algorithm, which
 * takes an array of employee and sorts them in order of their employee
 * number.
 */

module.exports = function sortEmployees(array) {
  for (let i = 1; i < array.length; i++) {
    const currentEmployee = array[i];
    let j = i - 1;
    while (j >= 0 && array[j].employeeNumber > currentEmployee.employeeNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentEmployee;
  }
  return array;
};
