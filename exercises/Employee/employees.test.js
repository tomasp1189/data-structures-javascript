describe('Employees Sorting', () => {
  const expect = require('chai').expect;
  const Employee = require('./Employee');
  const sortEmployees = require('./sortEmployees');
  const employeeArray = [];
  const preSortedEmployees = [];

  const buildEmployee = num => {
    const employeeNumber = parseInt(`${num}`.padEnd(9, 0));
    const firstName = 'Employee';
    const lastName = `${num}`;
    const emailId = `${num}@employee.com`;
    return new Employee(employeeNumber, firstName, lastName, emailId);
  };

  before(() => {
    const maxEmployees = 9;
    for (let index = maxEmployees; index > 0; index--) {
      const auxEmployee = buildEmployee(index);
      employeeArray.push(auxEmployee);
    }
    for (let index = 1; index < maxEmployees + 1; index++) {
      const auxEmployee = buildEmployee(index);
      preSortedEmployees.push(auxEmployee);
    }
  });

  it('should sort employees correctly based on employeeNumber', () => {
    const sortedEmployees = sortEmployees(employeeArray);
    expect(sortedEmployees).eql(preSortedEmployees);
  });
});
