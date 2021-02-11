// Stand reminder: remind to stand up every 50 minutes past the hour
// import {latLng} from './geo.js';
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener(
      'click',
      function () {
        const interval = document.getElementById('userInput').value;
        const intervalConversion = interval * 1000;
        chrome.tabs.getSelected(null, 
          setTimeout(standAlert, intervalConversion)
        );
      },
      false
    );
  },
  false
);

// console.log(latLng[55795]);

function standAlert() {
  // const interval = document.getElementById('userInput').value;
  // const intervalConversion = interval * 1000;
  alert('hi')
}



/* SCRATCH WORK
// create a function that sends a popup alert to stand after user input specified time amount
function (tab) {
  const interval = document.getElementById('userInput').value;
  // convert interval (min) to ms
  // const intervalConversion = interval * 60000;
  // convert interval (sec) to ms
  const intervalConversion = interval * 1000;
  alert('hi!!!!');
  // setTimeout(alert('Get up and move'), intervalConversion);
}
*/