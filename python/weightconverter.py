weight=int(input("Enter the weight: "))
choice = input("(l)bs or (k)g: ")
if choice == 'l' or choice == 'L':
    Nweight = weight*0.45
    print(f'Converted weight in Lbs is: {Nweight}')
elif choice == 'k' or choice == 'K':
    Nweight = weight/0.45
    print(f'Converted weight in Kgs is: {Nweight}')
else:
    print("Enter a valid choice")