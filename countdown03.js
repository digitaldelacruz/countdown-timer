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

      <div class="countdown" id="timer">Loading…</div>
    `;

    const timerElement = this.querySelector("#timer");

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance
