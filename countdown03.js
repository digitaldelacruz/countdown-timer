class CountdownTimer extends HTMLElement {
  connectedCallback() {
    const targetDate = new Date("June 30, 2026 20:00:00 PST").getTime();

    // Container
    const container = document.createElement("div");
    container.style.fontFamily = "sans-serif";
    container.style.color = "#ffffff";
    container.style.textAlign = "center";
    container.style.fontSize = "32px";
    container.style.letterSpacing = "1px";
    container.style.background = "transparent";

    // Timer element
    const timerElement = document.createElement("div");
    timerElement.id = "timer";
    timerElement.textContent = "Loading...";
    container.appendChild(timerElement);

    this.appendChild(container);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

            if (distance < 0) {
        timerElement.textContent = "We Are Live.";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Clear previous content
      timerElement.innerHTML = "";

      // Helper to build each unit
      const makeUnit = (value, label) => {
        const unit = document.createElement("span");
        unit.style.display = "inline-block";
        unit.style.margin = "0 12px";
        unit.style.background = "transparent";

        const valueNode = document.createElement("span");
        valueNode.textContent = value;

        const labelNode = document.createElement("span");
        labelNode.textContent = label;
        labelNode.style.display = "block";
        labelNode.style.fontSize = "12px";
        labelNode.style.opacity = "0.7";
        labelNode.style.marginTop = "4px";

        unit.appendChild(valueNode);
        unit.appendChild(labelNode);

        return unit;
      };

      timerElement.appendChild(makeUnit(days, "DAYS"));
      timerElement.appendChild(makeUnit(hours, "HRS"));
      timerElement.appendChild(makeUnit(minutes, "MIN"));
      timerElement.appendChild(makeUnit(seconds, "SEC"));
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }
}

customElements.define("countdown-timer", CountdownTimer);
