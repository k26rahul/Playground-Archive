n = 999

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
            print('case R →', str(x + 1).ljust(2), f'V:{VL + 1},{VR + 1}')

            for k in range(VL, VR + 1):
                x += 1
                matrix[HT][k] = x
            direction = 'B'
            HT += 1

        case 'B':
            print('case B ↓', str(x + 1).ljust(2), f'H:{HT + 1},{HB + 1}')

            for k in range(HT, HB + 1):
                x += 1
                matrix[k][VR] = x
            direction = 'L'
            VR -= 1

        case 'L':
            print('case L ←', str(x + 1).ljust(2), f'V:{VR + 1},{VL + 1}')

            for k in range(VR, VL - 1, -1):
                x += 1
                matrix[HB][k] = x
            direction = 'T'
            HB -= 1

        case 'T':
            print('case T ↑', str(x + 1).ljust(2), f'H:{HB + 1},{HT + 1}')

            for k in range(HB, HT - 1, -1):
                x += 1
                matrix[k][VL] = x
            direction = 'B'
            VL += 1
            direction = 'R'

for row in matrix:
    for i in row:
        print(str(i).ljust(6), end=' ')
    print()
