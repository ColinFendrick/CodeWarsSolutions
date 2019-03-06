import operator
def order(sentence):
    array = sentence.split()

    toReturn = ""

    new_dict = {"1":"NONE", "2":"NONE", "3":"NONE", "4":"NONE", "5":"NONE", "6":"NONE", "7":"NONE", "8":"NONE", "9":"NONE", }

    for word in array:
        for char in word:
            if(char.isdigit() and int(char) <= 9):
                new_dict[char] = word

    sorted_dict = sorted(new_dict.items())

    for s in sorted_dict:

        if(s[1] != "NONE"):
            toReturn = toReturn + s[1]+" "

    toReturn = toReturn[:-1]
    return toReturn