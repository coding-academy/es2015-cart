import './style.scss'

import $ from 'jquery';


import storeService from './store.service';
import cartService from './cart.service';
import templates from './templates';

const generateProductsDOM = products => {
  const el = document.querySelector('.products');
  const fragment = document.createDocumentFragment();
  for( let product of products ) {
    const template = document.createElement('template');
    template.innerHTML = templates.getProductTpl(product);
    fragment.appendChild(template.content);
  }
  el.appendChild(fragment);
}

const generateCartItemsDOM = items => {
  const el = document.querySelector('.cart-items');
  $(el).empty();
  const fragment = document.createDocumentFragment();
  for( let item of items ) {
    const template = document.createElement('template');
    template.innerHTML = templates.getCartTpl(item);
    fragment.appendChild(template.content);
  }
  el.appendChild(fragment);
}

const hideLoader = () => {
  const el = document.querySelector('.loader');
  el.style.display = 'none';
}

const clickHandlers = () => {
  // Shop Buttons
  $('[data-add]').on('click', addToCart);
  $('[data-substract]').on('click', substractFromCartBtns);

  // Cart Buttons
  // We use Jquery style event delegation here, as those buttons 
  // are not in the dom yet, so we set a single click handler on the parent
  $('.cart-items').on('click', '[data-add]', addToCart);
  $('.cart-items').on('click', '[data-subs]', substractFromCartBtns);
  $('.cart-items').on('click', '[data-clear]', clearItem);

}

const addToCart = function() {
    const productId = $(this).closest('[data-id]').data('id');
    storeService.getProductById(productId).then(product => {
      const { id, title, price } = product;
      cartService.addToCart({
        id,
        title,
        price
      });

      renderCart();
    });
  }

  const substractFromCartBtns = function() {
    const productId = $(this).closest('[data-id]').data('id');
    cartService.substractFromCart(productId);
    renderCart();

  };

const clearItem = function() {
    const productId = $(this).closest('[data-id]').data('id');
    cartService.clearItem(productId);
    renderCart();

  }

  const renderCart = () => {
    generateCartItemsDOM(cartService.getCartItems());
    renderCartTotal();
    showCartStatus();
  }

const renderCartTotal = () => {
  const $el = $('[data-cart-total]');
  $el.text(cartService.getCartTotal());
}

const showCartStatus = () => {
  const el = document.querySelector('[data-cart-status]');
  if( cartService.getCartItems().length ) {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

const renderStore = products => {
  generateProductsDOM(products);
  clickHandlers();
  hideLoader();
}

storeService.getProducts().then(renderStore);



