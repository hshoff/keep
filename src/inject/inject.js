chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      var chatHideBtn = document.querySelector('.document-chat-hide');
      if (chatHideBtn) chatHideBtn.click();
      var toggleSidebarBtn = document.querySelector("[data-dom-id='toggle-sidebar']");
      if (toggleSidebarBtn) toggleSidebarBtn.click();
    }
  }, 1);
});
