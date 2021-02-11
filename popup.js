// Stand reminder: remind to stand up every 50 minutes past the hour
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener(
      'click',
      function () {
        chrome.tabs.getSelected(null, function (tab) {
          alert('TESTING!!!!');
        });
      },
      false
    );
  },
  false
);
