s=input()
first_word = ""
current_word = ""
i=0
n=len(s)
while i<=n:
    if i < n and s[i] != ' ' :
        current_word += s[i]
    else:
        if current_word != "" :
            if first_word == "" or current_word.lower() < first_word.lower() :
                first_word = current_word
            current_word=""
    i += 1
print(first_word)