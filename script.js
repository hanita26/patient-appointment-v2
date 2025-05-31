function showConfirmation(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('appointmentForm').reset();
}
