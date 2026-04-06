# konversi_suhu.py
def celcius_to_fahrenheit(c):
    return (c * 9/5) + 32

temp_c = 30
temp_f = celcius_to_fahrenheit(temp_c)

print(f"Suhu ruangan saat ini: {temp_c}°C")
print(f"Dalam Fahrenheit: {temp_f}°F")

