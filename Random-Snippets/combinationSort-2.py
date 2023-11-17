strList = input().replace(',', '').split(' ')

L1 = []
L2 = []

while strList:
    min = strList[0]
    for x in strList:
        if x[0] < min[0]:
            min = x
    L1.append(min)
    strList.remove(min)

wordGroups = []
currentLetter = None
currentWordGroup = []
for word in L1:
    currentLetter = word[0] if currentLetter == None else currentLetter
    if word[0] == currentLetter:
        currentWordGroup.append(word)
    else:
        wordGroups.append(currentWordGroup)
        currentWordGroup = []
        currentWordGroup.append(word)
        currentLetter = word[0]
wordGroups.append(currentWordGroup)
print(wordGroups)

for wordGroup in wordGroups:
    while wordGroup:
        max = wordGroup[0]
        for word in wordGroup:
            if int(word[1:]) > int(max[1:]):
                max = word
        L2.append(max)
        wordGroup.remove(max)

print(L1)
print(L2)

'''
Input: d34, g54, d12, b87, g1, c65, g40, g5, d77
'''
print(', '.join(L1) == 'b87, c65, d34, d12, d77, g54, g1, g40, g5')
print(', '.join(L2) == 'b87, c65, d77, d34, d12, g54, g40, g5, g1')
