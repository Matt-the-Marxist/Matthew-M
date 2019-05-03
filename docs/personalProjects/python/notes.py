import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import requests
from gspread_formatting import *

def clear():
  os.system('cls' if os.name=='nt' else 'clear')

scope = ["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/drive"]
source = requests.get('https://api.myjson.com/bins/gd7bk').json()
creds = ServiceAccountCredentials.from_json_keyfile_dict(source, scope)
gs = gspread.authorize(creds)

print("Well Formatted Note Cards for Research")
print("Made by Matthew Morrissette 2019")
print("")
print("For any questions or concerns, please contact helperbot.notecards@gmail.com")
print("")
print("Note: These fields must be exact for proper matching \nAdditionally, the hosting site is very bad with mobile.\nThis is your warning")
print("")
userName = input("Please enter your full name: ")
project = input("Please enter the name of the project: ")

#if it exists
try:
  spread = gs.open(userName+" "+project+' Note Cards')
  sheet = spread.sheet1
  sheet2 = spread.get_worksheet(1)
  noSources = int(sheet2.cell(1, 1).value)
  noFacts = int(sheet2.cell(1, 2).value)


#if it doesn't
except:
  spread = gs.create(userName+" "+project+" Note Cards")

  while True:
    try:
      print("")
      email = input("Please enter the email you would like the spreadsheet shared with:  ")
      spread.share(email, perm_type='user', role='owner')
      spread.share('helperbot.notecards@gmail.com', perm_type='user', role='writer')
      break
    except:
      print("Please enter a valid email.")
  spread.add_worksheet("dimentions", 1, 2)
  sheet = spread.sheet1
  
  fmt = cellFormat(wrapStrategy = 'WRAP')

  format_cell_range(sheet, "a1:z1000",fmt)

  sheet2 = spread.get_worksheet(1)
  clear()
  while True:
    try:
      noSources = int(input("Number of sources: "))
      sheet2.update_cell(1, 1, str(noSources))
      for i in range(2, noSources+2):
        sheet.update_cell(1, i, "Source "+str(i-1))
      break
    except:
      print("Please enter a whole number.")
  print("")
  while True:
    try:
      noFacts = int(input("Number of facts required per source: "))
      sheet2.update_cell(1, 2, noFacts)
      for i in range(3,noFacts+3):
        sheet.update_cell(i, 1, i-2)
      break
    except:
      print("Please enter a whole number.")

for i in range(2, noSources+2):
  clear()
  while sheet.cell(2, i).value=="":
    source = input("What is source "+str(i-1)+"?: ")
    sheet.update_cell(2, i, source)
  for j in range(3, noFacts+3):
    while sheet.cell(j, i).value=="":
      fact = input("Fact "+str(j-2)+" from source no."+str(i-1)+": ")
      sheet.update_cell(j, i, fact)
  if sheet.cell(2, i+1).value =="":
    while True:
      add = input("Would you like to add another fact from source "+str(i-1)+"?(y/n): ")
      if add=="y":
        factNo = len(sheet.col_values(i))
        fact = input("Fact "+str(j-2)+" from source no."+str(i-1)+": ")
        sheet.update_cell(factNo, i, fact)
        sheet.update_cell(factNo, 1, factNo-2)
      else:
        break
clear()
print("The file with your Cards should be in your drive.\n\nIf it isn't, please contact helperbot.notecards@gmail.com \nwith your name to sort it out.")
    