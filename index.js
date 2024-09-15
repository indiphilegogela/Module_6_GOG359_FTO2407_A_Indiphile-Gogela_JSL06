// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML 
        const menuSection = document.getElementById('menu');
        const categories = Object.keys(menu);
        categories.forEach(category => {
            const heading = document.createElement('h3');
            heading.textContent = category;
            menuSection.appendChild(heading);
            const menuItemList = document.createElement('ul');
            menuSection.appendChild(menuItemList);  
            menu[category].forEach(meal => 
                const menuItem = document.createElement('li');
                menuItem.textContent = meal;
                menuItem.addEventListener('click', () => addToOrder(meal));
                menuItemList.appendChild(menuItem);
            });
        })
    }
    

// Callback function for adding an item to the order
function removeFromOrder(orderItemElement, item) {
    const orderTotalElement = document.getElementById('order-total');

    // Remove the item from the DOM
    orderItemElement.remove();

    // Deduct the item's price from the total
    total -= item.price;
    order = order.filter(orderItem => orderItem.name !== item.name);

    // Update the total display
    orderTotalElement.textContent = total.toFixed(2);
}

// Initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system
initMenuSystem(menu);
