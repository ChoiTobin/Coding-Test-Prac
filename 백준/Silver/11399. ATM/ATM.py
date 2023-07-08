num = int(input())
arr = list(map(int, input().split()))
sorted_nums = sorted(arr)
# 작은 값들로 리스트 정렬 ex: [1, 2, 3, 3, 4]
result = 0
sum_value = 0

#num을 5라고 가정했을때 0~4까지 5번 result
for b in range(num):
    result =result+1
    for a in range(result):
        #0부터 0까지인데
        sum_value = sum_value+sorted_nums[a]
print(sum_value)

