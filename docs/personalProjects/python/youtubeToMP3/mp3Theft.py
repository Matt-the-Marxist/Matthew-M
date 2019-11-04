import requests
from bs4 import BeautifulSoup

youtubeUrl = "https://www.youtube.com/results?search_query="+input("Please enter the video: ")

videos = []

soup = BeautifulSoup(requests.get(youtubeUrl).text, 'html.parser')
for link in soup.find_all('a'):
    i = link.get('href')
    if 'watch' in i:
        videos.append("https://www.youtube.com"+i)
        #print(videos[len(videos)-1])

for i in videos:
    print(i)
    req = requests.get(i).text
    print(req)
    soub = BeautifulSoup(req, 'html.parser')
    print(soub.title)