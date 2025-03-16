document.addEventListener("DOMContentLoaded", () => {
    // Simple Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields before submitting.');
        } else {
            alert('Thank you for reaching out!');
        }
    });
});
