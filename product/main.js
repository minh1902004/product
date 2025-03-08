const listCategories = [];
const listProducts = [];

$(document).ready(function () {
    $("#formCategory").submit(function (e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 100).toString(),
            name: $("input[name='name']").val(),
            description: $("input[name='description']").val()
        };

        listCategories.push(data);
        updateCategoryDropdown();
        $("input[name='name']").val('');
        $("input[name='description']").val('');
    });

    $("#formProduct").submit(function (e) {
        e.preventDefault();
        const data = {
            id: Math.floor(Math.random() * 100).toString(),
            category: $("#category").val(),
            name: $("input[name='name']").val(),
            price: $("input[name='price']").val(),
            oldPrice: $("input[name='oldPrice']").val(),
            description: $("input[name='description']").val(),
            image: $("input[name='image']").val()
        };

        listProducts.push(data);
        renderProductList();
        $("input[name='name']").val('');
        $("input[name='price']").val('');
        $("input[name='oldPrice']").val('');
        $("input[name='description']").val('');
        $("input[name='image']").val('');
    });

    function updateCategoryDropdown() {
        $("#category").html('<option value="">Chọn danh mục</option>');
        listCategories.forEach((item) => {
            $("#category").append(`<option value="${item.id}">${item.name}</option>`);
        });
    }

    function renderProductList() {
        $("#productList").html('');
        listProducts.forEach((product) => {
            const categoryName = listCategories.find(cat => cat.id === product.category)?.name || 'Không xác định';
            $("#productList").append(`
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-old-price">${product.oldPrice ? product.oldPrice + 'đ' : ''}</div>
                        <div class="product-price">${product.price}đ</div>
                        <div class="product-description">${product.description}</div>
                        <div><strong>Danh mục:</strong> ${categoryName}</div>
                    </div>
                </div>
            `);
        });
    }
});
