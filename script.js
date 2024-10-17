document.getElementById('myForm').addEventListener('submit', function(event) {
    const nameInput = document.querySelector('.name-inp');
    const emailInput = document.querySelector('.email-inp');
    const passwordInput = document.querySelector('.pass-inp');

    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        event.preventDefault();
    }
})