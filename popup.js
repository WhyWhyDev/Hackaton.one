// Stand reminder: remind to stand up every 50 minutes past the hour
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener(
      'click',
      function () {
        // chrome.tabs.getSelected(null, function (tab) {
        chrome.windows.getCurrent(null, standAlert();
        });
      },
      false
    );
  },
  false
);

// create a function that sends a popup alert to stand after user input specified time amount
function standAlert() {
  const interval = document.getElementById('userInput').value;
  // convert interval (min) to ms
  // const intervalConversion = interval * 60000;
  // convert interval (sec) to ms
  const intervalConversion = interval * 1000;

  setTimeout(alert('Get up and move'), intervalConversion);
}
