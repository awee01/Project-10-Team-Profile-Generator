const Engineer = require('../lib/Engineer');
const engineer = new Engineer('ophelia', '5314335', 'ophelia21@gmail.com', 'ophelia21');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('ophelia');
    expect(engineer.id).toBe('5314335');
    expect(engineer.email).toBe('ophelia21@gmail.com');
    expect(engineer.github).toBe('ophelia21');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('ophelia');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('5314335');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('ophelia21@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('ophelia21');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});