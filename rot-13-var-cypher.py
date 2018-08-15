from string import ascii_lowercase
alphabet = "nopqrstuvwxyzabcdefghijklm"

def encrypter(strng):
    return (strng.translate(str.maketrans(ascii_lowercase, alphabet))).translate(str.maketrans(ascii_lowercase, ascii_lowercase[::-1]))