const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');

// Add event listeners for touch events
imageContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
imageContainer.addEventListener('touchmove', handleTouchMove, { passive: false });

let initialX;
let initialScrollLeft;

function handleTouchStart(event) {
  initialX = event.touches[0].clientX;
  initialScrollLeft = imageContainer.scrollLeft;
}

function handleTouchMove(event) {
  event.preventDefault(); // Prevent default behavior to avoid vertical scrolling
  const difference = event.touches[0].clientX - initialX;
  imageContainer.scrollLeft = initialScrollLeft - difference;
}

// Add click event listener to images
images.forEach(image => {
  image.addEventListener('click', () => {
    const sectionId = image.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


let cart = [];

function addToCart(itemName, itemPrice) {
  const cartItem = {
    name: itemName,
    price: itemPrice,
    quantity: 1
  };

  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(cartItem);
  }

  updateCart();
}


function isEqualCartItem(item1, item2) {
  return item1.name === item2.name && arraysEqual(item1.toppings, item2.toppings);
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}




function removeItemFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  showAlert('error', 'Item has been removed from cart.', 'error');
}


function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  let total = 0;
  let totalQuantity = 0; // Initialize total quantity

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'cart-item';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${item.name} x${item.quantity}`;

    const priceSpan = document.createElement('span');
    priceSpan.textContent = `\u20B9 ${item.price * item.quantity}`;

    const removeButton = document.createElement('img');
    removeButton.src = 'https://img.icons8.com/?size=512&id=102550&format=png';
    removeButton.width = 20;
    removeButton.height = 20;
    removeButton.alt = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', () => removeItemFromCart(index));

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(removeButton);

    cartItemsList.appendChild(li);

    total += item.price * item.quantity;
    totalQuantity += item.quantity; // Increment total quantity
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: \u20B9 ${total.toFixed(2)}`;

  // Update the total quantity in the bottom bar
  const totalQuantityElement = document.getElementById('totalQuantity');
  totalQuantityElement.textContent = totalQuantity;

  // Update the total amount in the bottom bar
  const totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.textContent = total.toFixed(2);
}


// Rest of your JavaScript code..

// ... (your existing addToCart, removeItemFromCart, and updateCart functions) ...

const checkoutButton = document.getElementById("checkoutButton");
const totalQuantityElement = document.getElementById("totalQuantity");
const totalAmountElement = document.getElementById("totalAmount");

checkoutButton.addEventListener("click", () => {
  checkoutButton.classList.add("clicked");
  setTimeout(() => {
    checkoutButton.classList.remove("clicked");
    if (cart.length > 0) {
      const totalAmount = cart.reduce((total, item) => total + item.price, 0);
      showAlert('success', `Order has been placed!\nTotal Amount: \u20B9 ${totalAmount.toFixed(2)}`, 'success');
      cart = [];
      updateCart();
    } else {
      showAlert('error', 'Your cart is empty. Add items to cart before checking out.', 'error');
    }
  }, 1000);
});

function totalItemsInCart() {
  return cart.reduce((total, item) => total + 1, 0);
}


  // ... (your existing JavaScript code) ...

  let currentAlert = null; // Variable to track the currently displayed alert

  function showAlert(type, message) {
    if (currentAlert) {
      // If there's already an alert displayed, remove it before showing a new one
      document.body.removeChild(currentAlert);
    }

    const alertDiv = document.createElement('div');
    alertDiv.className = `custom-alert ${type}`;
    alertDiv.innerText = message;
    document.body.appendChild(alertDiv);

    // Store the current alert to be able to remove it later
    currentAlert = alertDiv;

    setTimeout(() => {
      alertDiv.style.animation = 'fadeOutUp 0.5s forwards';
      setTimeout(() => {
        document.body.removeChild(alertDiv);
        currentAlert = null; // Reset the current alert when it's removed
      }, 100);
    }, 2000);
  }

  /* ... (rest of your JavaScript code) ... */


/*search bar*/
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const menuItems = document.querySelectorAll(".menu-item");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();

  menuItems.forEach((item) => {
    const itemName = item.querySelector("h3").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  menuItems.forEach((item) => {
    const itemName = item.querySelector("h3").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});




/*script for scrollable counter*/

document.addEventListener("DOMContentLoaded", function() {
      const prevButton = document.querySelector('.scroll-button.prev');
      const nextButton = document.querySelector('.scroll-button.next');

      prevButton.addEventListener('click', function() {
        document.querySelector('.scroll-wrapper').scrollBy({
          left: -200, 
          behavior: 'smooth'
        });
      });

      nextButton.addEventListener('click', function() {
        document.querySelector('.scroll-wrapper').scrollBy({
          left: 200, 
          behavior: 'smooth'
        });
      });
    });

    function menuOnClick() {
      document.getElementById("menu-bar").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
    }
