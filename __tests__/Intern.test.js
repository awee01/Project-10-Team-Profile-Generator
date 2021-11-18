const Intern = require('../lib/Intern');
const intern = new Intern('selene', '1513532', 'selene13@gmail.com', 'UofT');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('selene');
    expect(intern.id).toBe('1513532');
    expect(intern.email).toBe('selene13@gmail.com');
    expect(intern.school).toBe('UofT');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('selene');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('1513532');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('selene13@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UofT');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});