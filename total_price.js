function calculateTotal() {
    // Get input values and convert them to numbers
    const price1 = parseFloat(document.getElementById('price1').value) || 0;
    const price2 = parseFloat(document.getElementById('price2').value) || 0;
    const price3 = parseFloat(document.getElementById('price3').value) || 0;
    const price4 = parseFloat(document.getElementById('price4').value) || 0;

    // Calculate the total
    const total = price1 + price2 + price3 + price4;

    // Display the total in the readonly input field
    document.getElementById('totalPrice').value = total.toFixed(2);
}

// Calculate total on page load as well
window.onload = calculateTotal;