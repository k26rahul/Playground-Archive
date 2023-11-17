n = 6

matrix = [[0 for x in range(n)] for y in range(n)]
HT = 0
HB = n - 1
VL = 0
VR = n - 1
direction = 'R'

x = 0
while x < n * n:
    match direction:
        case 'R':
            for k in range(VL, VR + 1):
                x += 1
                matrix[HT][k] = x
            direction = 'B'
            HT += 1

        case 'B':
            for k in range(HT, HB + 1):
                x += 1
                matrix[k][VR] = x
            direction = 'L'
            VR -= 1

        case 'L':
            for k in range(VR, VL - 1, -1):
                x += 1
                matrix[HB][k] = x
            direction = 'T'
            HB -= 1

        case 'T':
            for k in range(HB, HT - 1, -1):
                x += 1
                matrix[k][VL] = x
            direction = 'B'
            VL += 1
            direction = 'R'

for row in matrix:
    for i in row:
        print(str(i).ljust(3), end=' ')
    print()
