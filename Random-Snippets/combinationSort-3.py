# d34, g54, d12, b87, g1, c65, g40, g5, d77

# L1: b87, c65, d34, d12, d77, g54, g1, g40, g5
# L2: b87, c65, d77, d34, d12, g54, g40, g5, g1

ele = input()
ele_lis = ele.replace(",", " ")
str_list = ele_lis.split()
# print(str_list)

use_list = str_list
# Lsort = sorted(str_list)   #sorted using all charactres in string
# print(Lsort)

# this block is for sorting only based on the first character in each string
new_list = []
while use_list:
    min = use_list[0]
    for x in use_list:
        if x[0] < min[0]:
            min = x
    new_list.append(min)
    use_list.remove(min)

# print(new_list)
L1_list = new_list
L1 = ",".join(new_list)
print("L1:", L1)


# this block is for sorting only the number portion of the elements
# L2 below

subGrps = []
currentLetter = None
currentGrp = []
for s in L1_list:
    if currentLetter == None:
        currentLetter = s[0]
    else:
        currentLetter

    if s[0] == currentLetter:
        currentGrp.append(s)
    else:
        subGrps.append(currentGrp)
        currentGrp = []
        currentGrp.append(s)
        currentLetter = s[0]
subGrps.append(currentGrp)
print("subGrps:", subGrps)

L2_list = []
for sub in subGrps:
    while sub:
        max = sub[0]
        if len(sub) == 1:
            L2_list.append(max)
            sub.remove(max)
        else:
            for s in sub:
                if (int(s[1:]) > int(max[1:])):
                    max = s
            L2_list.append(max)
            sub.remove(max)

print(L2_list)
# L2 = ",".join(L2_list)
# print("L2:",L2)
