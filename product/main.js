const listCategories = [];
const listProducts = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formCategory").addEventListener("submit", function (e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 100).toString(),
            name: document.querySelector("input[name='name']").value,
            description: document.querySelector("input[name='description']").value
        };

        listCategories.push(data);
        updateCategoryDropdown();
        document.querySelector("input[name='name']").value = '';
        document.querySelector("input[name='description']").value = '';
    });

    document.getElementById("formProduct").addEventListener("submit", function (e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 100).toString(),
            category: document.getElementById("category").value,
            name: document.querySelector("input[name='name']").value,
            price: document.querySelector("input[name='price']").value,
            oldPrice: document.querySelector("input[name='oldPrice']").value,
            description: document.querySelector("input[name='description']").value,
            image: document.querySelector("input[name='image']").value
        };

        listProducts.push(data);
        renderProductList();
        document.querySelector("input[name='name']").value = '';
        document.querySelector("input[name='price']").value = '';
        document.querySelector("input[name='oldPrice']").value = '';
        document.querySelector("input[name='description']").value = '';
        document.querySelector("input[name='image']").value = '';
    });

    function updateCategoryDropdown() {
        const categorySelect = document.getElementById("category");
        categorySelect.innerHTML = '<option value="">Chọn danh mục</option>';
        listCategories.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.name;
            categorySelect.appendChild(option);
        });
    }

    function renderProductList() {
        const productList = document.getElementById("productList");
        productList.innerHTML = '';
        listProducts.forEach((product) => {
            const categoryName = listCategories.find(cat => cat.id === product.category)?.name || 'Không xác định';
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-old-price">${product.oldPrice ? product.oldPrice + 'đ' : ''}</div>
                    <div class="product-price">${product.price}đ</div>
                    <div class="product-description">${product.description}</div>
                    <div><strong>Danh mục:</strong> ${categoryName}</div>
                </div>
            `;
            productList.appendChild(productItem);
        });
    }
});
