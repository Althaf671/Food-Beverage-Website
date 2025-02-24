// Ambil total harga dari localStorage dan tampilkan di halaman pembayaran
window.addEventListener('DOMContentLoaded', (event) => {
    const cartTotal = localStorage.getItem('cartTotal');  // Ambil dari localStorage

    // Tampilkan total harga di halaman pembayaran
    const productTotalElement = document.querySelector('.product-total');
    if (productTotalElement && cartTotal !== null) {
        productTotalElement.textContent = `$${cartTotal}`;
    } else {
        productTotalElement.textContent = '$0.00'; // Default jika tidak ada data
    }
});


localStorage.removeItem('cartTotal');
