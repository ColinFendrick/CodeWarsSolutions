def bmi(weight, height):
  result = weight/(height**2)
  if (result <= 18.5):
    return "Underweight"
  elif (result <= 25):
    return "Normal"
  elif (result <= 30):
    return "Overweight"
  else:
    return "Obese"