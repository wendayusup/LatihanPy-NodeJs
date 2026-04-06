# flight_checker.py
systems = ["GPS", "Battery", "Esc", "Compass", "Radio"]

print("--- Pre-Flight Check Sequence ---")
for item in systems:
    status = "OK" # Simulasi status
    print(f"Checking {item}... [{status}]")

print("\nAll systems GO! Drone is ready to arm.")

