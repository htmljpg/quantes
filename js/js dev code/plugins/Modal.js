import { overflowHidden, overflowVisible } from "../utils/overflow";
import { isScrollable } from "../utils/scrollbar";

const Modal = () => {
    /* Opening modal window function */
    function openModal() {
        /* Get trigger element */
        var modalTrigger = document.querySelectorAll('[data-js-modal-trigger]');
        
  
        /* Set onclick event handler for all trigger elements */
        for(var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
              var target = this.getAttribute('href').substr(1);
              var modalWindow = document.getElementById(target);

              modalWindow && ( modalWindow.style.display = 'block' );
  
              modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
              
              overflowHidden();
            }
        }
    }
  
    function closeModal(){
      /* Get close button */
      var closeButton = document.querySelectorAll('[data-js-modal-close]');
      var closeOverlay = document.querySelectorAll('[data-js-modal-overlay]');
  
      /* Set onclick event handler for close buttons */
        for(var i = 0; i < closeButton.length; i++) {
          closeButton[i].onclick = function() {
            var modalWindow = this.closest('[data-js-modal]');

            modalWindow && ( modalWindow.style.display = 'none' );
  
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        
            overflowVisible();
          }
        }   
  
      /* Set onclick event handler for modal overlay */
        for(var i = 0; i < closeOverlay.length; i++) {
          closeOverlay[i].onclick = function() {
            var modalWindow = this.closest('[data-js-modal]');

            modalWindow && ( modalWindow.style.display = 'none' );
  
            modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        
            overflowVisible();
          }
        }
  
    }
  
    /* Handling domready event IE9+ */
    function ready(fn) {
      if (document.readyState != 'loading'){
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  
    /* Triggering modal window function after dom ready */
    ready(openModal);
    ready(closeModal);
}

export default Modal;