window.sticky = (function () {
  var stickyElements = document.getElementsByClassName('sticky');
  var stickyFooter = document.querySelector('.sticky-footer');

  for (var i = stickyElements.length - 1; i >= 0; i--) {
      Stickyfill.add(stickyElements[i]);
  }
  
  Stickyfill.add(stickyFooter);
  
})();