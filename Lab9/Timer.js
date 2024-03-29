// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-5: Object-oriented timer

class Timer {

  constructor(tempTotalTime) {
    this.totalTime = tempTotalTime; // How long Timer should last
    this.savedTime;  // When Timer started //supposed to be uninitialised
  }

  // Starting the timer
  start() {
    // When the timer starts it stores the current time in milliseconds.
    this.savedTime = millis();
  }

  // The function isFinished() returns true if 5,000 ms have passed. 
  // The work of the timer is farmed out to this method.
  isFinished() { 
    // Check how much time has passed
    let passedTime = millis()- this.savedTime;
    if (passedTime > this.totalTime) {
      return true;
    } else {
      return false;
    }
  }
}
