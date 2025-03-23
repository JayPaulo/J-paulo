const cart = {};
function addToCart(productName, productPrice) {
  
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    
    updateCartDisplay();
}

function removeFromCart(productName, productPrice) {
    
    if (cart[productName] && cart[productName].quantity > 0) {
        cart[productName].quantity -= 1;
        cart[productName].totalPrice -= productPrice; 

        if (cart[productName].quantity == 0) {
            delete cart[productName];
        }
    } else {
       
        alert('The item is not in the cart!');
    }
   
    updateCartDisplay();
}

function calculateTotalPrice() {
    let total = 0;
    for (let product in cart) {
        total += cart[product].totalPrice;
    }
    return total;
}
ge
function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; 
  
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} 
                            - Quantity: ${cart[product].quantity} 
                            - Total Product Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    }

    
   
}
function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; 

   
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} 
                             Quantity: ${cart[product].quantity} 
                             Total Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        listItem.classList.add("list_of_items");
        cartList.appendChild(listItem); 
    }
    const totalPrice = calculateTotalPrice();
    const totalPriceElement = document.createElement('div');
    totalPriceElement.innerText = `Total Price: Php ${totalPrice.toFixed(2)}`;
    totalPriceElement.classList.add("total-cart-price");
    cartList.appendChild(totalPriceElement);
}