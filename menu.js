// Fungsi untuk menangani perubahan quantity
function updateQuantity(button) {
    // Mendapatkan elemen input yang terkait dengan tombol yang ditekan
    var quantityInput = button.parentElement.querySelector('.quantity-input');
    var currentQuantity = parseInt(quantityInput.value);

    // Menentukan apakah tombol yang ditekan adalah tambah (+) atau kurang (-)
    if (button.textContent === '+') {
        quantityInput.value = currentQuantity + 1;
    } else if (button.textContent === '-' && currentQuantity > 0) {
        quantityInput.value = currentQuantity - 1;
    }
}

// Function to update the quantity of the product and recalculate the total price
function updateQuantity(button) {
    // Find the parent figure element of the clicked button
    const figure = button.closest('figure');
    
    // Find the input field that holds the quantity
    const quantityInput = figure.querySelector('.quantity-input');
    
    // Get the current quantity (default to 0 if empty)
    let quantity = parseInt(quantityInput.value) || 0;
    
    // Get the price of the product
    const priceElement = figure.querySelector('.price');
    const price = parseFloat(priceElement.textContent.replace('$', ''));
    
    // If the clicked button is '+', increase the quantity
    if (button.textContent === '+') {
        quantity += 1;
    }
    // If the clicked button is '-', decrease the quantity (but not below 0)
    else if (button.textContent === '-' && quantity > 0) {
        quantity -= 1;
    }

    // Update the quantity input field
    quantityInput.value = quantity;

    // Call updateCartTotal to recalculate the total price in the cart
    updateCartTotal();
}

// Function to update the total price in the cart
function updateCartTotal() {
    // Get all the figures (products) on the page
    const figures = document.querySelectorAll('figure');
    
    // Initialize a variable to hold the total price
    let cartTotal = 0;

    // Loop through all the figures and sum up the prices based on quantity
    figures.forEach(figure => {
        const quantityInput = figure.querySelector('.quantity-input');
        const priceElement = figure.querySelector('.price');
        const quantity = parseInt(quantityInput.value) || 0;
        const price = parseFloat(priceElement.textContent.replace('$', ''));

        // Add to the cart total
        cartTotal += price * quantity;
    });

    // Display the total in the cart section
    const productTotalElement = document.querySelector('.product-total');
    productTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}


