const orderForm = document.getElementById('orderForm');
const ordersList = document.getElementById('orders');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const coffeeType = document.getElementById('coffeeType').value;
    
    const orderItem = document.createElement('p');
    orderItem.textContent = Ordered: ${coffeeType};
    
    ordersList.appendChild(orderItem);
});

  