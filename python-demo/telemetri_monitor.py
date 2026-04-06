# telemetri_monitor.py
import random
import time

def get_telemetry():
    return {
        "pitch": round(random.uniform(-10, 10), 2),
        "roll": round(random.uniform(-10, 10), 2),
        "yaw": round(random.uniform(0, 360), 2)
    }

print("Monitoring Flight Data (3 detik)...")
for _ in range(3):
    data = get_telemetry()
    print(f"Pitch: {data['pitch']} | Roll: {data['roll']} | Yaw: {data['yaw']}")
    time.sleep(1)

