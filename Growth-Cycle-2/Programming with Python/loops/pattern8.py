S = int(input())
N = int(input())

spaces = 2 * N - 3

for row in range(1, N + 1):
    each_row = ""
    for each_number in range(1, N + 1):
        if row == 1 or row == N:
            each_row += str(S) + " "
        else:
            each_row = str(S - N + 1) + " " * spaces + str(S)
        S += 1
    print(each_row)