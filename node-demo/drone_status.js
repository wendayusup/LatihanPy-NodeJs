// drone_status.js
const drone = {
    model: "Quadcopter X",
    battery: 85,
    isArmed: false,
    sensors: ["MPU6050", "Barometer", "GPS"]
};

if (drone.battery > 20) {
    console.log(`Drone ${drone.model} siap terbang! Baterai: ${drone.battery}%`);
} else {
    console.log("Baterai lemah! Segera mendarat.");
}

console.log("Sensor aktif:", drone.sensors.join(", "));
