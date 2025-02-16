function validatePhoneNumber(phone) {
    // Remove all non-numeric characters
    const cleaned = phone.replace(/\D/g, '');

    // Ensure phone number is between 10 and 15 digits
    if (cleaned.length < 10 || cleaned.length > 15) {
        return { valid: false, message: "Invalid phone number length." };
    }

    return { valid: true, phone: cleaned };
}

module.exports = validatePhoneNumber;