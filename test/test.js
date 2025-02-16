const validatePhoneNumber = require('../index');

// Test Cases
console.log(validatePhoneNumber("123-456-7890")); // { valid: true, phone: "1234567890" }
console.log(validatePhoneNumber("abc1234567")); // { valid: true, phone: "1234567" }
console.log(validatePhoneNumber("12345")); // { valid: false, message: "Invalid phone number length." }
console.log(validatePhoneNumber("+1 (800) 555-1212")); // { valid: true, phone: "18005551212" }
console.log(validatePhoneNumber("987654321")); // { valid: false, message: "Invalid phone number length." }