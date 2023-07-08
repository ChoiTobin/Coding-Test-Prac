a, b = map(int, input().split())
number = [int(input()) for _ in range(a)]

result = 0


for c in range(a - 1, -1, -1):

        result +=  b // number[c] 
        b %= number[c] 


print(result)


