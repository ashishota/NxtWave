str1 = input()
str2 = input()

i = j = 0
while i < len(str1) and j < len(str2):
    if str1[i] == str2[j]:
        j += 1
    i += 1

if j == len(str2):
    print("Yes")
else:
    print("No")
