const Employee = require('../lib/Employee');
const employee = new Employee('adi', '1325748', 'awee@myseneca.ca');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('adi');
    expect(employee.id).toBe('1325748');
    expect(employee.email).toBe('awee@myseneca.ca');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('adi');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1325748');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('awee@myseneca.ca');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});