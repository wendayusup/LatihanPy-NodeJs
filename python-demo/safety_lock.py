# safety_lock.py
battery_level = 15  # Persentase
is_connection_lost = False

print(f"Status Baterai: {battery_level}%")

if battery_level < 20 or is_connection_lost:
    print("WARNING: Triggering Auto-RTL (Return To Launch)!")
else:
    print("Status Aman. Lanjutkan misi.")
