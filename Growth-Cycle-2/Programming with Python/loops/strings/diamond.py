a = int(input())

# Upper part of diamond
for i in range(a):
    print(' ' * (a - i - 1) + '/' + ' ' * (i * 2) + '\\')

# Lower part of diamond
for j in range(a):
    print(' ' * j + '\\' + ' ' * ((a - j - 1) * 2) + '/')
