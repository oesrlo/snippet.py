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
# 

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
count = Counter(my_list) # Counter 객체 생성 

print(count) # 모든 엘리멘트의 반복 횟수 
# Counter({'d': 5, 'b': 3, 'a': 2, 'c': 1}) 
print(count['b']) # 특정 엘리멘트의 갯수 
# 3 
print(count.most_common(1)) # 가장 많이 반복되는 것 1위 
# [('d', 5)]

```

