const Manager = require('../lib/Manager');
const manager = new Manager('maras', '1413098', 'maraschat@gmail.com', '456');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('maras');
    expect(manager.id).toBe('1413098');
    expect(manager.email).toBe('maraschat@gmail.com');
    expect(manager.office).toBe('456');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('maras');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('1413098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('maraschat@gmail.com');
});

test('test if we can get the office number from the getOffice() method', () => {
    expect(manager.getOfficeNumber()).toBe('456');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});