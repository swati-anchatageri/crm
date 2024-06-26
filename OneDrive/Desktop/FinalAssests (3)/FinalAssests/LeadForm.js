document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!userName || !email || !phoneNumber || !message) { // Corrected variable names
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phoneNumber)) { // Corrected function parameter
        alert('Please enter a valid phone number.');
        return;
    }

    const user = {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    };

    fetch('http://localhost:8080/addUser', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        console.log('Success:', data);
    })
    .catch((error) => {
        alert('Error submitting form');
        console.error('Error:', error);
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phoneNumber) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phoneNumber);
}
