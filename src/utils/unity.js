// 监听unity传入的方法
if (window.vuplex) {
    addMessageListener();
  } else {
    window.addEventListener('vuplexready', addMessageListener);
  }