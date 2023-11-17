n = int(input())
primes = []
for i in range(2, n + 1):
    isPrime = True

    for j in range(2, i):
        if i % j == 0:
            isPrime = False
            break

    if isPrime:
        primes.append(i)

print(0 if len(primes) == 0 else sum(primes))
