rows = int(input())
starting_number = int(input())
second_number = starting_number
for row in range(1, rows + 1):
    if row == 1:
        each_row = ""
        
        for column in range(1, rows + 1):
            each_row = each_row + str(starting_number) + " "
            starting_number += 1
        print(each_row)
    elif row == rows:
        each_row = " " * (row - 1)
        
        for column in range(rows - row + 1):
            each_row = each_row + str(second_number) + " "

        print(each_row)
    else:
        spaces = " " * (row - 1)
        hollow_spaces = "  " * (rows - row - 1)
        each_row = spaces + str(second_number) + " " + hollow_spaces + str(second_number + rows - row) + " "
        
        print(each_row)
        starting_number += 1