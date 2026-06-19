class CountdownTimer extends HTMLElement {
  connectedCallback() {
    const targetDate = new Date("June 30, 2026 20:00:00 PST").getTime();

    this.innerHTML = `
      <style>
        .countdown {
          font-family: sans-serif;
          color: #ffffff;
          text-align: center;
          font-size: 32px;
          letter-spacing: 1px;
          background: transparent;
        }
        .label {
          font-size: 12px;
          opacity: 0.7;
          display: block;
          margin-top: 4px;
        }
        .unit {
          display: inline-block;
          margin: 0 12px;
          background: transparent;
        }
        :host {
          display: block;
          background: transparent !important;
        }
      </style>

      <div class="countdown" id="timer">Loading...</div>
    `;

    const timerElement = this.querySelector("#timer");

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

            if (distance < 0) {
        timerElement.innerHTML = "We Are Live.";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerElement.innerHTML = `
        <span class="unit">${days}<span class="label">DAYS</span></span>
        <span class="unit">${hours}<span class="label">HRS</span></span>
        <span class="unit">${minutes}<span class="label">MIN</span></span>
        <span class="unit">${seconds}<span class="label">SEC</span></span>
      `;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }
}

customElements.define("countdown-timer", CountdownTimer);

