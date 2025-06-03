n=int(input())
for i in range(1,n+1):
    spaces=" "*(n-i)
    ch='A'
    for j in range(i):
        print(ch, end=" ")
        ch = chr(ord(ch) + 1)  # Increment character
    print()  # Move to the next line
        