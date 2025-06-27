s=int(input())
n=int(input())

for row in range(n):
    spaces = " "*row
    if row==1:
        print(spaces+str(s)+" ",end="")
        s+=1
    else:
        for col in range(n):
            each_row = spaces+str(s)+" "
            print(each_row,end="")
            s+=1
        print()
        