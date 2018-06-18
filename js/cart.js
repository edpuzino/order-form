/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var carts = [];

function loadCart() {
  /*var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  carts = new Cart(cartItems);*/
  var getCart = localStorage.getItem('cart');
  carts = JSON.parse(getCart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // Find the table body
  var cartEl = document.getElementById('cart');

  //  Iterate over the items in the cart
  for(var i = 0; i < carts.length; i++) {
  // Create a TR

    //  Create a TD for the delete link, quantity,  and the item
    var trEl = document.createElement('tr');
    var deleteEl = document.createElement('td');
    deleteEl.textContent = ('delete link');
    trEl.appendChild(deleteEl);
    var quantityEl = document.createElement('td');
    quantityEl.textContent = (carts[i].quantity);
    trEl.appendChild(quantityEl);
    var itemEl = document.createElement('img');
    var j = (carts[i].product - 1);
    itemEl.src = Product.allProducts[j].filePath;
    itemEl.textContent = ('item');
    trEl.appendChild(itemEl);
    cartEl.appendChild(trEl);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
}

function removeItemFromCart(event) {
  this.event = event;
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();