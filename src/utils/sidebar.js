export var Show = {
  Sidebar:function() {
    var sidebar = document.querySelector('#sidebar');
    var computedStyle = window.getComputedStyle(sidebar);
      if (computedStyle.right === '-250px') {
        sidebar.style.right = '0';
      } else {
        sidebar.style.right = '-250px';
      }
    this.Opaquely();
  },

  Opaquely:function() {
    var opacityStyle = document.querySelector('#opacity').style;
    if(opacityStyle.display === 'none') {
      opacityStyle.display = 'block';
    }
    else {
      opacityStyle.display = 'none';
    }
  }
}