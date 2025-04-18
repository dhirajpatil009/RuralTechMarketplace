document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Wheat", price: "30 per kg", category: "Grains", imageUrl: "https://via.placeholder.com/250" },
        { name: "tomato", price: "22 per kg", category: "Vegetables", imageUrl: "https://via.placeholder.com/250" },
        { name: "maize", price: "15 per kg", category: "Grains", imageUrl: "https://via.placeholder.com/250" },
        { name: "mango", price: "80 per kg", category: "Fruits", imageUrl: "https://via.placeholder.com/250" },
        { name: "banana", price: "20 per kg", category: "Fruits", imageUrl: "https://via.placeholder.com/250" },
        { name: "rice", price: "30 per kg", category: "Grains", imageUrl: "https://via.placeholder.com/250" },
        { name: "potato", price: "30 per kg", category: "Vegetables", imageUrl: "https://via.placeholder.com/250" },
        { name: "lemon", price: "50 per kg", category: "Fruits", imageUrl: "https://via.placeholder.com/250" },
        { name: "moong dal", price: "35 per kg", category: "Pulses", imageUrl: "https://via.placeholder.com/250" },
        { name: "urad dal", price: "35 per kg", category: "Pulses", imageUrl: "https://via.placeholder.com/250" }
    ];

    const productContainer = document.getElementById("product-list");

    function displayProducts(filteredProducts) {
        productContainer.innerHTML = "";
        filteredProducts.forEach(product => {
            let productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>${product.price}</strong></p>
                <button onclick="alert('Added to Cart: ${product.name}')">Add to Cart</button>
            `;

            productContainer.appendChild(productCard);
        });
    }

    displayProducts(products);

    window.searchProducts = function () {
        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        let filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchInput)
        );
        displayProducts(filteredProducts);
    };

    window.filterCategory = function (category) {
        let filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    };
});