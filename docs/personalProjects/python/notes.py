import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('client_secret.json', scope)
gs = gspread.authorize(creds)

userName = input("What is your full name")

try:
  sheet = gs.open(userName+' Note Cards').sheet1
except:
  spread = gs.create(userName+" Note Cards")
  email = input("What is your email? ")
  spread.share(email, perm_type='user', role='writer')
  sheet = spread.sheet1

for i in range(2, 22):
  while sheet.cell(2, i).value=="":
    source = input("What is source "+str(i-1)+"?: ")
    sheet.update_cell(2, i, source)
  for j in range(3, 18):
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
        sheet.update_cell(factNo, 1, factNo)
      else:
        break
    