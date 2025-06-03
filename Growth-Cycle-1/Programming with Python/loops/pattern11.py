m = int(input())
n = int(input())

k = m * n
hollow_spaces = n - 2

for row in range(m):
    each_row = ""
    if row == 0 or row == m - 1:
        for each_number in range(n):
            each_row = each_row + str(k) + " "
            k = k - 1
    else:
        each_row = str(k) + " "
        k = k - hollow_spaces - 1
        each_row = each_row + "  " * (hollow_spaces) + str(k)
        k = k - 1
    
    print(each_row)