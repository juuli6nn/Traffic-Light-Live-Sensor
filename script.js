const cycleLength = 121;  // total time (16 green + 105 red)
const greenDuration = 16; // seconds

// Your recorded start time: October 22, 2025 at 15:22:59 (+8 GMT)
const startTime = new Date("2025-10-22T15:22:59+08:00").getTime();

const light = document.getElementById("light");
const status = document.getElementById("status");
const countdown = document.getElementById("countdown");
const progress = document.getElementById("progress");

setInterval(() => {
  const now = Date.now();
  const elapsed = Math.floor((now - startTime) / 1000);
  const currentCycle = elapsed % cycleLength;

  let remaining, color, text, progressWidth;

  if (currentCycle < greenDuration) {
    // GREEN phase
    color = "limegreen";
    text = "GO (Green)";
    remaining = greenDuration - currentCycle;
    progressWidth = (currentCycle / greenDuration) * 100;
  } else {
    // RED phase
    color = "red";
    text = "STOP (Red)";
    remaining = cycleLength - currentCycle;
    progressWidth = ((currentCycle - greenDuration) / (cycleLength - greenDuration)) * 100;
  }

  light.style.backgroundColor = color;
  status.textContent = text;
  countdown.textContent = remaining + "s remaining";
  progress.style.width = progressWidth + "%";
  progress.style.backgroundColor = color;
}, 1000);
