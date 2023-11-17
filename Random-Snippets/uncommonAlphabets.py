def uncommonAlphabets(set1, set2):
    asciiSum = 0
    for char in set1 ^ set2:
        asciiSum += ord(char)
    asciiSum = str(asciiSum)

    while len(asciiSum) > 1:
        asciiSum = str(sum([
            int(digit) for digit in asciiSum
        ]))

    print(asciiSum)


uncommonAlphabets(
    set(['A', 'B', 'C']),
    set(['B', 'C']),
)

uncommonAlphabets(
    set(['G', 'Q', 'R']),
    set(['R', 'T', 'U']),
)
