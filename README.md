<h1 align="center">🚦 Traffic Light Live Sensor</h1>

<p align="center">
A web-based traffic light monitoring system that displays real-time traffic light status and countdown timers for a specific intersection in <b>Legarda, Manila</b>.
</p>

<hr>

<h2>📍 Location</h2>
<p align="center">
<b>Intersection:</b><br>
Legarda St & Figueras St, Sampaloc, Manila, 1008 Metro Manila
</p>

<p align="center">
  <a href="https://maps.app.goo.gl/gSzLRfovJceGxTAw5" target="_blank">
    <img src="https://img.shields.io/badge/🗺️-Open%20in%20Google%20Maps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Google Maps">
  </a>
</p>

<p>
This system is designed based on the actual stoplight located at this intersection.
</p>

<h3>📸 Location Photos</h3>

<p align="center">
  <img src="images/map.png" alt="Map View of Legarda Intersection" width="48%" />
  <img src="images/streetview.jpg" alt="Street View of Traffic Light" width="48%" />
</p>

<p align="center">
  <i>Figure 1: Map location and actual street view of the monitored intersection</i>
</p>

<hr>

<h2>🌐 Live Demo</h2>
<p>
<a href="https://juuli6nn.github.io/Traffic-Light-Live-Sensor/" target="_blank">
🔗 View Live Project
</a>
</p>

<hr>

<h2>📌 Features</h2>
<ul>
  <li>⏱️ Real-time traffic light countdown (Red, Yellow, Green)</li>
  <li>🚦 Visual simulation of traffic light states</li>
  <li>📱 Simple and responsive web interface</li>
  <li>🧠 Helps pedestrians decide when to cross safely</li>
  <li>⚡ Lightweight (HTML, CSS, JavaScript only)</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li><b>HTML</b> – Structure of the webpage</li>
  <li><b>CSS</b> – Styling and layout</li>
  <li><b>JavaScript</b> – Logic and timer functionality</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>
<pre>
Traffic-Light-Live-Sensor/
│── index.html     # Main UI
│── style.css      # Design and layout
│── script.js      # Traffic light logic
│── images/        # Location photos
│   ├── map.png
│   └── streetview.jpg
│── README.md      # Project documentation
</pre>

<hr>

<h2>⚙️ How It Works</h2>
<p>
The system simulates a traffic light cycle using JavaScript timers. Each light phase (green, yellow, red) runs for a set duration and updates dynamically on the screen.
</p>

<hr>

<h2>⚠️ Known Issues</h2>
<ul>
  <li>
    <b>Timer Inaccuracy</b><br>
    The current countdown seconds are <b>not perfectly synchronized</b> with the actual traffic light at the Legarda intersection.
    <ul>
      <li>The system uses static timing logic instead of real sensor data</li>
      <li>Real-world variations (manual control, adaptive signals) are not reflected</li>
    </ul>
  </li>
</ul>

<hr>

<h2>🚀 Future Improvements</h2>
<ul>
  <li>🔌 Integrate real-time sensor or API data</li>
  <li>📡 Use IoT devices for live signal tracking</li>
  <li>🧠 Add AI prediction for traffic flow</li>
  <li>📍 Expand to multiple intersections</li>
  <li>📲 Improve UI/UX for mobile users</li>
</ul>

<hr>

<h2>📍 Google Maps Location</h2>

<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7442944676747!2d120.996!3d14.604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b07c08f6b12d%3A0x6c4d4f4e4f4e4f4e!2sLegarda%20St%20%26%20Figueras%20St%2C%20Manila!5e0!3m2!1sen!2sph!4v1234567890" 
  width="100%" 
  height="450" 
  style="border:0; border-radius: 8px;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

<p align="center">
  <i>📍 Interactive map showing the exact location of the traffic light sensor</i>
</p>

<hr>

<h2>📄 License</h2>
<p>
This project is open-source and available for educational purposes.
</p>

<hr>

<p align="center">
  <b>Made with ❤️ for safer pedestrian crossings in Manila</b>
</p>
