/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css?family=Raleway');

/* Global Styles */
html,
body {
  margin: 0;
  height: 100%;
  font-family: "Raleway", sans-serif;
}

* {
  box-sizing: border-box;
}

/* Logo Styles */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: #f3f3f3;
}

.logo {
  font-family: Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #ff6600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Heading Styles */
h2 {
  text-align: center;
  vertical-align: middle;
}

.logo {
  font-family: Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #ff6600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/*hamburger button*/
#menu {
  z-index: 2;
  position: fixed;
  right: 0;
  top: 100px;
}

#menu-bar {
  width: 35px;
  /* Reduced width */
  height: 35px;
  /* Reduced height */
  margin: 64px 20px;
  cursor: pointer;
}

.bar {
  height: 4px;
  /* Reduced height */
  width: 100%;
  background-color: #ffffff;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-3px);
  /* Adjusted transform */
}

#bar3 {
  transform: translateY(4px);
  /* Adjusted transform */
}

.nav {
  transition: 0.3s ease;
  display: none;
}

.nav ul {
  padding: 0 22px;
}

.nav li {
  list-style: none;
  padding: 12px 0;
}

.nav li a {
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.nav li a:hover {
  font-weight: bold;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  position: fixed;
  right: 0;
  top: 100px;
  margin: 60px 15px;
  background: linear-gradient(to left, #f46b45, #eea849);
  border-radius: 50%;
  transition: 0.3s ease;
}

.change {
  display: block;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(3px) rotateZ(-45deg);
  /* Adjusted transform */
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-5px) rotateZ(45deg);
  /* Adjusted transform */
}

.change-bg {
  width: 520px;
  height: 460px;
  transform: translate(60%, -30%);
}

.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00BAF0;
  background: linear-gradient(to left, #f46b45, #eea849);
  /* Gradient background */
  color: #FFF;
  height: 10px;
  padding: 1em;
}

/* Image Container Styles */
.image-container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
}

.image-container img {
  display: inline-block;
  height: auto;
  width: 100px;
  /* Adjust width as needed */
  margin: 1px;
  scroll-snap-align: start;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .image-container img {
    width: 300px;
    /* Adjust width for larger screens */
  }
}

/* Menu Section Styles */
.menu-section {
  padding: 2em;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
  border: 2px solid #ff6600;
  /* Adjust the border color to match your theme */
  border-radius: 24px;
  /* Rounded edges */
  background-color: #fff;
  /* Background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  /* Box shadow for depth */
  padding: 10px;
  /* Padding for the search bar */
}

#searchInput {
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  background-color: transparent;
}

#searchButton {
  background-color: #ff6600;
  /* Match your website's accent color */
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

#searchIcon {
  font-size: 20px;
  vertical-align: middle;
}

/* Animation for search button on hover */
#searchButton:hover {
  background-color: #ff9900;
  /* Lighter color on hover */
  transform: scale(1.1);
}





.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00BAF0;
  background: linear-gradient(to left, #f46b45, #eea849);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #FFF;
  height: 30px;
  /* Adjust the height to make it smaller */
  padding: 1em;
}

/* ... (other CSS rules) ... */




.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked+.menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked+.menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked+.menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle~.menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #menu-toggle:checked~.menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu>li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }

  .menu>li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}








.toggle {
  width: 40px;
  height: 20px;
  background-color: #f9c542;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}

.circle {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: 2px;
  transition: transform 0.3s ease-in-out;
}

.active {
  transform: translateX(20px);
}

body

/*home layout*/
  {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.nav-bar {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}

.nav-link {
  color: orange;
  /* Change link color to orange */
  text-decoration: none;
  padding: 10px 20px;
}

.menu-icon {
  font-size: 24px;
  cursor: pointer;
  padding: 0 15px;
  transition: opacity 0.3s ease-in-out;
}

.menu-icon:hover {
  opacity: 0.7;
}



/* CSS styles  for logo*/
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  background-color: #f3f3f3;
}

.logo {
  font-family: Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #ff6600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}




  {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.menu-item {
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
  transition: transform 0.2s;
}

.menu-item img {
  max-width: 100px;
  margin-right: 10px;
}

.menu-item:hover {
  transform: scale(1.05);
}

#cart {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  max-height: 300px;
  /* Limit the maximum height of the cart */
  overflow-y: auto;
  /* Enable vertical scrolling when needed */
}

#total {
  font-weight: bold;
  margin-top: 10px;
}

/* Button Styles */
.checkout-button {
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* Animation Keyframes */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  30%,
  70% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }
}

/* Applying Animation to Button */
.checkout-button.clicked {
  animation: bounce 0.6s;
}

/* CSS styles for reset button */
.reset-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #2980b9;
}

.reset-button.clicked {
  background-color: #e74c3c;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
}

/* CSS styles for order button */
.order-button {
  display: inline-block;
  padding: 10px 15px;
  font-size: 13px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.order-button span {
  display: inline-block;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.order-button:hover span {
  transform: translateX(0);
}

.order-button::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0;
  left: -100%;
  transition: left 0.3s ease-in-out;
}

.order-button:hover::before {
  left: 0;
}

/*alert message*/

#alert-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  /* Make sure it's on top of other content */
}


.custom-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  /* Ensure the alert is on top of other content */
  animation: fadeInUp 0.5s, fadeOutUp 0.5s 1.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(20px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-20px);
  }
}


.hotel-logo {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.hotel-logo img {
  max-width: 100px;
  height: auto;
  margin-right: 10px;
}


/* Bottom bar styles */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .remove-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    margin-left: 5px;
  }

  /* search bar*/
  /* Styling for search bar */

}

/* Styling for search bar */
/* Styling for the search bar matching your website theme */
.search-container {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 20px;
  border: 2px solid #ff6600;
  /* Adjust the border color to match your theme */
  border-radius: 24px;
  /* Rounded edges */
  background-color: #fff;
  /* Background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  /* Box shadow for depth */
  padding: 10px;
  /* Padding for the search bar */
}

#searchInput {
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  background-color: transparent;
}

#searchButton {
  background-color: #ff6600;
  /* Match your website's accent color */
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

#searchIcon {
  font-size: 20px;
  vertical-align: middle;
}

/* Animation for search button on hover */
#searchButton:hover {
  background-color: #ff9900;
  /* Lighter color on hover */
  transform: scale(1.1);
}


/* Style for items with toppings in the cart */
.cart-item .with-toppings-label {
  color: #FF0000;
  /* Change the color as desired */
  font-style: italic;
}



/* ... (rest of your CSS styles) ... */

/* Add these styles to your existing CSS */
.browse-menu-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999;
  /* Ensure it's above other content */
}

.popup-menu {
  display: none;
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  max-width: 200px;
  z-index: 998;
  /* Ensure it's above the button but below other content */
}

.popup-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.popup-menu li {
  margin-bottom: 10px;
}

.popup-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Style for hover effect on the button */
.browse-menu-button:hover {
  background-color: #ff9900;
}

.container {
  display: flex;
  align-items: center;
  overflow-x: hidden;
  position: relative;
}

.scroll-wrapper {
  overflow-x: auto;
  flex: 1;
  scroll-behavior: smooth;
  padding: 0.5px;
  margin: 0.5px;
}

.scroll-content {
  display: flex;
  padding: 0;
  margin: 0;

}

.item {
  flex: 0 0 auto;
  width: 150px;
  /* Set a fixed width for each item */
  height: 150px;
  /* Set a fixed height for each item */
  padding: 10px;
  position: relative;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  max-width: 100%;
  max-height: 100%;
}

.scroll-button {
  padding: 10px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  background-size: contain;
  background-repeat: no-repeat;
}

.scroll-button.prev {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Aiga_uparrow.svg/1024px-Aiga_uparrow.svg.png');
  margin-right: 10px;
}

.scroll-button.next {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aiga_downarrow.svg/1024px-Aiga_downarrow.svg.png');
  margin-left: 10px;
}
