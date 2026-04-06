// telemetri_drone.js
function generateSensorData() {
    // Simulasi data sudut kemiringan (Pitch & Roll)
    const pitch = (Math.random() * 10 - 5).toFixed(2);
    const roll = (Math.random() * 10 - 5).toFixed(2);
    const altitude = (Math.random() * 100).toFixed(1);

    const timestamp = new Date().toLocaleTimeString();

    console.log(`[${timestamp}] Alt: ${altitude}m | Pitch: ${pitch}° | Roll: ${roll}°`);
}

console.log("--- Memulai Logging Telemetri Drone (Press Ctrl+C to stop) ---");

// Jalankan fungsi setiap 1 detik (1000ms)
const logger = setInterval(generateSensorData, 1000);

// Berhenti otomatis setelah 10 detik biar nggak menuhin terminal
setTimeout(() => {
    clearInterval(logger);
    console.log("--- Logging Selesai. Data aman di buffer! ---");
}, 10000);console.log('halo bang');
