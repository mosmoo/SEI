import random
import math

randNum = format(math.floor(random.random() * 100))

print("Welcome! Give me a random number between 0-100")
num = int(input())

if num == int(randNum):
    print (f"You guessed {num} and computer picked {randNum}! Genius!")
else :
    while num != int(randNum):
        if int(randNum) > num :
            print(f"Your guess is too low, try again")
            num = int(input())
        if int(randNum) < num :
            print(f"Your guess is too high try again")
            num = int(input())
        if int(randNum) == num:
            print(f"You guessed right!")
            