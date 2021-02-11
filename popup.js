// timer
// if the timer button is pressed, convert input time:
// HH * 3600000 ms, MM * 60000 ms, 60 ms 
// set alert to display after


/*
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const checkPageButton = document.getElementById('timer');
    checkPageButton.addEventListener(
      'click',
      function () {
        const interval = document.getElementById('userInput').value;
        
        chrome.tabs.getSelected(null, 
          // invoke timesUpAlert after intervalConversion
          setTimeout(timesUpAlert, intervalConversion)
        );
      },
      false
    );
  },
  false
);
*/



// window.onload = function () {
//   var fiveMinutes = 60 * 5,
//       display = document.querySelector('#time');
//   startTimer(fiveMinutes, display);
// };

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const checkPageButton = document.getElementById('timer');
    checkPageButton.addEventListener(
      'click',
      window.onload = function () {
        // seconds
        var fiveMinutes = 60 * document.getElementById('userInput').value,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
      },




      // function () {
      //   const interval = document.getElementById('userInput').value;
      //   const intervalConversion = interval * 1000;
      //   chrome.tabs.getSelected(null, 
      //     // invoke timesUpAlert after intervalConversion
      //     setTimeout(timesUpAlert, intervalConversion)
      //   );
      // },




      false
    );
  },
  false
);




function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
  // console.log('duration', duration, duration * 60000)
  // while (duration < 1) {
  //   setTimeout(timesUpAlert, duration * 60000);
  // }
}

// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     const interval = document.getElementById('userInput').value;
//     const display = document.querySelector('#time')
//     const checkPageButton = document.getElementById('timer');
//     checkPageButton.addEventListener(
//       'click',

//       function startTimer(duration = interval * 5, display) {
//         var timer = duration, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10)
//             seconds = parseInt(timer % 60, 10);
      
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
      
//             display.textContent = minutes + ":" + seconds;
      
//             if (--timer < 0) {
//                 timer = duration;
//             }
//         }, 1000);
//       }
      
//       window.onload = function () {
//         var fiveMinutes = 60 * 5,
//             display = document.querySelector('#time');
//         startTimer(fiveMinutes, display);
//       };


//       /*
//       function () {
//         const interval = document.getElementById('userInput').value;
        
//         chrome.tabs.getSelected(null, 
//           // invoke timesUpAlert after intervalConversion
//           setTimeout(timesUpAlert, intervalConversion)
//         */

//         );
//       },
//       false
//     );
//   },
//   false
// );






function timesUpAlert() {
  // const interval = document.getElementById('userInput').value;
  // const intervalConversion = interval * 1000;
  alert('hello, goodbye!')
  // timer: take user input (HH/MM/SS)
  
  // alarm:


}

// // alarm
// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     const checkPageButton = document.getElementById('alarm');
//     checkPageButton.addEventListener(
//       'click',
//       function () {
//         const inputTime = document.getElementById('timerInput').value;
//         const today = new Date();
//         const currentHour = Number(today.getHours())
//         const currentMin = Number(today.getMinutes())
//         // const currentSec = Number(today.getSeconds())
//         // current time in ms
//         const currentTime = (currentHour * 3600000) + (currentMin * 60000);
//         // console.log('typeofCurr', typeof currentTime, currentTime)
//         // create variable timeConversion
//         // timeConversion will equal inputTime minus current time converted to miliseconds
//         // hours: inputHour - currentHour * ms conversion ...
//         // console.log('TIMEE', inputTime)
//         let hours = Number(`${inputTime[0]}` + `${inputTime[1]}`)
//         let minutes = Number(`${inputTime[3]}` + `${inputTime[4]}`)
//         // let seconds = Number(`${inputTime[6]}` + `${inputTime[7]}`)
//         // input time in ms
//         const inputTimeToMs = (hours * 3600000) + (minutes * 60000);
//         // const inputTimeToMs = (hours * 3600000) + (minutes * 60000) + (seconds * 60);
//         // console.log(hours, minutes, seconds, 'sec', `${inputTime[6]}`, `${inputTime[7]}`)
//         // console.log('typeofInput', typeof inputTimeToMs, inputTimeToMs)
//         // hours = hours - currentHour;
//         // console.log('new hr', hours);
//         // minutes = minutes - currentMin;
//         // seconds = seconds - currentSec;
//         // (console.log('typeof', typeof hours, typeof minutes, typeof seconds))
//         // (console.log(hours, minutes, seconds))
//         const timeConversion = inputTimeToMs - currentTime;
//         // console.log('a', typeof timeConversion, timeConversion)
//         chrome.tabs.getSelected(null, function(tab) {
          
//         }
//           // invoke timesUpAlert after intervalConversion
//           // setTimeout(timesUpAlert, timeConversion)
//         );
//       },
//       false
//     );
//   },
//   false
// );





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




/*
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
          // invoke timesUpAlert after intervalConversion
          setTimeout(timesUpAlert, intervalConversion)
        );
      },
      false
    );
  },
  false
);


/*
// console.log(latLng[55795]);
function 
function timesUpAlert() {
  // const interval = document.getElementById('userInput').value;
  // const intervalConversion = interval * 1000;
  alert('hi')
  // timer: take user input (HH/MM/SS)
  
  // alarm:


}

*/





// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     const checkPageButton = document.getElementById('timer');
//     checkPageButton.addEventListener(
//       'click',
//       function () {
//         const inputTime = document.getElementById('timerInput').value;
//         // console.log('time', inputTime)
//         // get the hours in inputTime
//         let hours = Number(`${inputTime[0]}` + `${inputTime[1]}`)
//         // console.log('hour', hours, 'typeof', typeof hours)
//         // get the minutes in inputTime
//         let minutes = Number(`${inputTime[3]}` + `${inputTime[4]}`)
//         // get the seconds in inputTime
//         let seconds = Number(`${inputTime[6]}` + `${inputTime[7]}`)
//         console.log('sec', seconds)
//         if (!hours) hours = 0;
//         if (!minutes) minutes = 0;
//         // if (!seconds) seconds = 0;

//         console.log('no min', hours, minutes, seconds);
//         // convert time to ms
//         const timeConversion = (hours * 3600000) + (minutes * 60000) + (seconds * 60);
//         console.log('a', timeConversion)
//         chrome.tabs.getSelected(null, 
//           // invoke timesUpAlert after intervalConversion
//           setTimeout(timesUpAlert, timeConversion)
//         );
//       },
//       false
//     );
//   },
//   false
// );














// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = duration;
//       }
//   }, 1000);
// }

// window.onload = function () {
//   var fiveMinutes = 60 * 5,
//       display = document.querySelector('#time');
//   startTimer(fiveMinutes, display);
// };