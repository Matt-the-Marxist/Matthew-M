import os
import time as t
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import requests

def clear():
  os.system('cls' if os.name=='nt' else 'clear')

scope = ["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/drive"]
source = requests.get('https://api.myjson.com/bins/gd7bk').json()
print(source["client_email"])
creds = ServiceAccountCredentials.from_json_keyfile_dict(source, scope)
gs = gspread.authorize(creds)
sheet = gs.open("Game Project Stats").sheet1

cols = "abcdefghij"

for i in range(2, len(cols)):
    for j in range(2,22):
        print((i,j),int(sheet.cell(j,i).value) < 0)
        if int(sheet.cell(j,i).value) < 0:
            sheet.update_cell(j, i, 0)
        else:
            break
        t.sleep(.75)

            

