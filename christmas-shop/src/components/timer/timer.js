class Timer {
  constructor(
    timerSelector = "[data-timer]",
    daysSelector = "[data-timer-days]",
    hoursSelector = "[data-timer-hours]",
    minutesSelector = "[data-timer-minutes]",
    secondsSelector = "[data-timer-seconds]",
  ) {
    this.timer = document.querySelector(timerSelector);

    this.daysHolder = this.timer.querySelector(daysSelector);
    this.hoursHolder = this.timer.querySelector(hoursSelector);
    this.minutesHolder = this.timer.querySelector(minutesSelector);
    this.secondsHolder = this.timer.querySelector(secondsSelector);

    this.finalTime = this.getFinalTime();
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const currentTime = new Date();
    const secondsBefore = this.getSecondsBefore(currentTime);

    this.daysHolder.textContent = this.getIntDays(secondsBefore);
    this.hoursHolder.textContent = this.getIntHours(secondsBefore);
    this.minutesHolder.textContent = this.getIntMinutes(secondsBefore);
    this.secondsHolder.textContent = this.getIntSeconds(secondsBefore);
  }

  getFinalTime() {
    const nextYear = new Date().getUTCFullYear() + 1;
    return new Date(Date.UTC(nextYear, 0, 1, 0, 0, 0));
  }

  getSecondsBefore(currentTime) {
    return Math.floor(
      (this.finalTime.getTime() - currentTime.getTime()) / 1000,
    );
  }

  getIntSeconds(secondsBefore) {
    return secondsBefore % 60;
  }

  getIntMinutes(secondsBefore) {
    return Math.floor((secondsBefore / 60) % 60);
  }

  getIntHours(secondsBefore) {
    return Math.floor((secondsBefore / 3600) % 24);
  }

  getIntDays(secondsBefore) {
    return Math.floor(secondsBefore / 86400);
  }
}

export default function initTimer() {
  new Timer();
}
