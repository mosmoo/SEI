print("Welcome! Give me a value for temperature")
tempValue = int(input())

print ("Give me a unit")
tempUnit = str (input())

def convert_temp(num , unit ):
    if tempUnit == "f":
        num = (tempValue -32)/1.8
        print(f"{num}C")
        num = (tempValue + 459.67) /1.8
        print(f"{num}K")
    elif tempUnit =="c":
        num = tempValue * 1.8 + 32
        print(f"{num}F")
        num = tempValue + 273.15
        print(f"{num}K")
    else:
        num = tempValue - 273.15
        print(f"{num}F") 
        num = tempValue * 1.8 - 459.67
        print(f"{num}C")

convert_temp(tempValue, tempUnit)