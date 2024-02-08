# snippet.py
snippets using python

## 파이썬 알고리즘 인터뷰 
+ 문자열 뒤집기  ( 1번, 2번)

```python
 strs=[]
 reversed_strs == strs[::-1]

 # 문자열 점검 : isalnum()
 # 모든 문자 소문자로 변경할 때 : lower() 
 # 모든 문자 대문자로 변경할 때 : title()
 # 리스트의 경우 reverse() 사용 가능
 # 슬라이싱에서 [:: n] 이면 n 만큼 건너뜀
```

+ 인덱스,원소 출력
```python
    s = ['A', 'B', 'C']
    char = 'A'

 for idx, val in enumerate(s):
    print(idx, val)
    
>>> (0, 'A')
    (1, 'B')
    (2, 'C')

for idx, val in enumeratr(s, 5)
    print(idx, val)

>>> (5, A)
    (6, B)
    (7, C)





```

+  각 단어를 알파벳순으로 정렬  ( 3번 )

 
```python

strs= ['2,a','1,b']
strs.sort(key= lambda x: (x.split()[1:], x.split()[0]))

>>> ['2,a','1,b']

# sorted(strs) 의 경우
>>> ['1,b','2,a']

```


+ 딕셔너리를 사용한 정렬 ( 5번 )

```python 

Input: strs = ["eat","tea","tan","ate","nat","bat"]

output=collection.defaultdict(list)

for word in strs:
    output['', join(sorted(word))].append(word)
return list(output.values())

output: [["bat"],["nat","tan"],["ate","eat","tea"]]

# join(sorted(word)) 를 dictionary의 key로 사용
# values() 사용시 모든 value 정렬

```



+ 리스트에서 문자만 골라내기 ( 4번 )

```python

strs = [ 'A man, a plan, a canal: Panama']

words = [word for word in re.sub(r'[^\W]', ' ',  strs) ]

>>> 'A man  a plan  a canal  Panama'
# 문자열의 '숫자', '.' 등을 공백으로 변경

```

```python

strs = 'A man, a plan, a canal: Panama'
for s in strs:
    if s.isalnum():
        pass

# 영문자, 숫자 여부 판단 
```


+ 리스트에서 특정 요소 골라내기 ( 4번 )

```python
strs = ['apple', 'cat2', 'dog', 'apple', 'dog', 'apple']
banned = ['dog']

words = [(word for word in strs if word not in banned ) ]

>>> ['apple', 'cat2', 'apple', 'apple']

```


+ 리스트에서 각 요소별 빈도수 찾기 ( 4번 )

```python
strs = ['apple', 'cat2', 'dog', 'apple', 'dog', 'apple']

key = collections.Counter(strs).most_common(1)[0][0]
count = collections.Counter(strs).most_common(1)[0][1]

```

+ enumerate()를 사용해서 인덱스와 값 동시에 사용하기 ( 7번 )

```python
strs = ['a', 'b', 'c', 'd']

for i, num in enumerate(strs):
    print(i, num)

>>> 0:a
    1:b
    2:c
    3:d
```

+ 리스트 요소 반복 횟수

```python
my_list = ['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd', 'd', 'd', 'd'] 

count = Counter(my_list) 
# Counter 객체 생성 

print(count) # 모든 엘리멘트의 반복 횟수 
# Counter({'d': 5, 'b': 3, 'a': 2, 'c': 1}) 

print(count['b']) # 특정 엘리멘트의 갯수 
# 3 

print(count.most_common(1)) # 가장 많이 반복되는 것 1위 
print(count.most_common(n=1))
# [('d', 5)]

```
+ 리스트 컴프리헨션

```python

S = ['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd', 'd']
J = ['a', 'c']
    s for s in S
    # ['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd', 'd']

    s in J for s in S
    # [true, true, false, false, false, true, false, false, false,]

    sum(s in J for s in S)
    # 3
    # 카운터와 비슷함

```



+ 리스트 중복 제거, 리스트 정렬

```python
a = [3, 1, 5, 8, 5, 10, 7, 1]
c = sorted(list(set(a)))
 # [1, 3, 5, 7, 8, 10]
 
d = sorted(list(set(a)), reverse=True)
 # [10, 8, 7, 5, 3, 1]
# set 으로 변경해서 다시 list로 변경하면 중복 제거됨, reverse 로 내림차순으로 변경 가능

```
+ 리스트 정렬 ( 힙큐 )   --> 최소, 최대, n번 째로 큰 수 반환 등에 사용

```python

pq = []
heapq.heappush(pq, 1)
heapq.heappush(pq, 3)
heapq.heappush(pq, 2)

heapq.heappop(pq) # 1
heapq.heappop(pq) # 2
heapq.heappop(pq) # 3
 # 리스트에 원소를 넣는 순간 정렬되므로 sort()보다 빠름

```
+ zip() 함수로 데이터 변경

```python
numbers = [1, 2, 3]
letters = ["A", "B", "C"]

for pair in zip(numbers, letters):
    print(pair)

>>> (1, 'A')
    (2, 'B')
    (3, 'C')
# 리스트로 변환 가능 : list_pair = list(pair)
# >>> [(1, 'A'), (2, 'B'), (3, 'C')]

# dic 로 변환
keys = [1, 2, 3]
values = ["A", "B", "C"]
dict(zip(keys, values))
>>> {1: 'A', 2: 'B', 3: 'C'}
```

+ 가변인자, 데이터 Unpacking ( Asterisk 사용 )

```python
primes = [2, 3, 5, 7, 11, 13]

def product(*numbers):
    p = reduce(lambda x, y: x * y, numbers)
    return p

print(*primes)
>>> 1234

product(*primes)
# *primes 의 경우 primes 리스트 안의 값 인식
# 30030

product(primes)
# [2, 3, 5, 7, 11, 13]
```


+ range() 함수 사용한 범위 지정

```python
for num in range(10, 21, 5):
    # 10,15,20
    
for num in range(21, 10, -5):
    # 21,16,11

#range(시작, 종료, 증분)

```

+ 최댓값, 최솟값 지정

```python
max = -sys.maxsize 
min = sys.maxsize

# 최댓값의 경우 가장 낮은 값을 초기값으로 설정해 계속 갱신될 수 있도록 함
# 최솟값의 경우 반대
```
+ 반복자 : itertools 사용

```python
n = [1, 2, 3]

    1. times 만큼 반복해  리스트를 연결(chain)
print(list(chain.from_iterable(repeat(n, 3))))
>>> [1, 2, 3, 1, 2, 3, 1, 2, 3]

```

+ 순열, 조합 : itertools 사용

```python
from itertools import combinations

1. iterable 에서 원소 개수가 r개인 조합 뽑기

num = [1,2,3]
for i in combinations(num, 2):
    print(i)

>>> (1, 2)
    (1, 3)
    (2, 3)
    ...

# 범위를 지정할 경우(1-n 까지 k 개)
return list(itertools.combinations(range(1,n+1), k))

1.1 중복 조합인 경우

for i in combination_with_repalcement(1,2):
    print(i)

>>> ('A', 'A')
    ('A', 'B')
    ('A', 'C')
    ('B', 'B')
    ('B', 'C')
    ('C', 'C')

2. iterable에서 원소 개수가 r개인 순열 뽑기

letter = ['A', 'B', 'C']
# itertools.permutations(letter)
for i in permutations(letter):
	print(i)

>>> ('A', 'B', 'C')
    ('A', 'C', 'B')
    ('B', 'A', 'C')
    ('B', 'C', 'A')
    ('C', 'A', 'B')
    ('C', 'B', 'A')
# r을 지정하지 않거나 r=None으로 하면 최대 길이의 순열이 리턴

3. 여러 iterable의 데카르트곱 리턴

l1 = ['A', 'B']
l2 = ['1', '2']

for i in product(l1,l2,repeat=1): 
	print(i)
#l1과 l2의 모든 쌍을 지어 리턴한다

'''
출력결과:
('A', '1')
('A', '2')
('B', '1')
('B', '2')
'''

for i in product(l1,repeat=3):
	print(i)
 #product(l1,l1,l1,repeat=1)과 동일한 출력

'''
출력결과:
('A', 'A', 'A')
('A', 'A', 'B')
('A', 'B', 'A')
('A', 'B', 'B')
('B', 'A', 'A')
('B', 'A', 'B')
('B', 'B', 'A')
('B', 'B', 'B')
```
+ 튜플 -> 리스트

```python
my_tuple = (1, 2, 3, 4, 5)

my_list = list(my_tuple)    // 방법1
my_list = [*my_tuple]       // 방법2
my_list = [x for x in my_tuple] // 방법3



```



---
+ 연결리스트 뒤집기

```python
   node, prev = head, None
   # prev= None 도 가능
        while node:
            next, node.next = node.next, prev
            prev, node. next= node.next, next 
        return prev
```
---

+ 연결리스트 -> 리스트 

```python
list: List = []
while node:
    list.append(node.val)
    node = node.next
return list

```

+ 리스트 -> 연결리스트

```python
1.
def listToNode(list):

    head = None
    while list:
        head = ListNode(list.pop(), head)
        # head 값을 갱신 

    return head

2. 
    node = head
    for i in range(len(list)):
        node.val = list[i]
        node = node.next
    return head
```

+ 연결리스트의 루트만 (0번째 인덱스) -> 힙 ( 힙큐 )

```python
heap = []

for i in range(len(lists)):
    if lists[i]:
        heapq.heappush(heap, (lists[i].val, i, lists[i]))


```

+ 연결리스트(크기 불명) 중간 노드 찾기 --> 런너 기법

```python
half, slow, fast = None, head, head
while fast and fast.next:
    half, slow, fast = slow, slow.next, fast.next.next
half.next = None     # half 위치 기준으로 연결리스트 관계 중단

# 0-half | slow-0-fast 순으로 분할
# fast는 2씩 이동, slow 는 1씩 이동, half 는 slow 이전

```





+ 데크(deque)
   --> 양쪽 방향에서 엘리먼트 추가, 제거에 유용

```python
deq = deque([1, 2, 3, 4, 5])

deque.append(6)
# deque([1,2,3,4,5,6])

deque.appendleft(6)
# deque([6,1,2,3,4,5])


deque.extend('6','7','8')
# deque([1,2,3,4,5,6,7,8])

deque.extendleft('0')
# deque([0,1,2,3,4,5,6])

deq.rotate(1)
# deque([5, 1, 2, 3, 4])

deque.remove(3)
# deque([1,2,4,5])

deque.insert(0,'9')
# deque([9,2,4,5])

deq.rotate(-1)
# deque([1, 2, 3, 4, 5])

```

## DFS
 깊이 우선 탐색
 "앞으로 찾아야 가야할 노드"(계속 검색)와 "이미 방문한 노드"(무시, 따로 저장)를 기준으로 데이터를 탐색



+ deque 사용할 경우
```python


def dfs2(graph, start_node):
    from collections import deque
    visited = []
    need_visited = deque()
    
    ##시작 노드 설정해주기
    need_visited.append(start_node)
    
    ## 방문이 필요한 리스트가 아직 존재한다면
    while need_visited:
        ## 시작 노드를 지정하고
        node = need_visited.pop()
 
        ##만약 방문한 리스트에 없다면
        if node not in visited:
 
            ## 방문 리스트에 노드를 추가
            visited.append(node)
            ## 인접 노드들을 방문 예정 리스트에 추가
            need_visited.extend(graph[node])
                
    return visited
# >>> A, C, I, J, H, G, B, D, F, E ( 그래프 기준 오른쪽부터)
```
    
+ 재귀함수 사용할 경우
```python

def dfs_recursive(graph, start, visited = []):
# 데이터를 추가하는 명령어 / 재귀가 이루어짐 
    visited.append(start)
 
    for node in graph[start]:
        if node not in visited:
            dfs_recursive(graph, node, visited)
    return visited

# >>> A, B, D, E, F, C, G, H, I, J (그래프 기준 왼쪽부터)


```
