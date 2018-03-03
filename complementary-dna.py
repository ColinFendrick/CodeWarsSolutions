from string import maketrans

DNA = maketrans('ACGT', 'TGCA')

def DNA_strand(string):
    return string.translate(DNA)