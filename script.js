document.addEventListener('DOMContentLoaded', () => {

  // evergreen webinar timer
  // we want to run this at the top of 
  // the hour, every hour in the users
  // time zone, but working days and 
  // hours only...
  
  // 1 = Monday, 2 = Tuesday.... 
  // 5 = Friday
  var StartOfWorkingWeek = 1
  var EndOfWorkingWeeek = 5
  var StartOfWorkingDay = 9
  var EndOfWorkingDay = 5

  
  // so, let's define
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);
  
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
