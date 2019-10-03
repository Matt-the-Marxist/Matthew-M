import requests as r
import pprint as p

url = input("url: ")

res = r.get(url)
content = res.content
html = content.decode('utf-8')

lines = html.split("\n")

for i in lines:
    if "author" in i.lower():
        print(i)
    if "<title>" in i.lower():
        print(i)