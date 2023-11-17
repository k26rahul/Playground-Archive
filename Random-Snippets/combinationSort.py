strList = input().replace(',', '').split(' ')

L1 = sorted(strList, key=lambda str: ord(str[0]))
L2 = sorted(strList, key=lambda str: (
    ord(str[0]) - 96
) * 100 - int(str[1:]))

print(L1)
print(L2)

'''
Input: d34, g54, d12, b87, g1, c65, g40, g5, d77
'''
print(', '.join(L1) == 'b87, c65, d34, d12, d77, g54, g1, g40, g5')
print(', '.join(L2) == 'b87, c65, d77, d34, d12, g54, g40, g5, g1')
