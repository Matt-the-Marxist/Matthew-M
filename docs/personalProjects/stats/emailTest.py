from email.mime.text import MIMEText
from subprocess import Popen, PIPE

msg = MIMEText("Hello from exim")
msg["From"] = "noreply@localhost"
msg["To"] = "m.morrissette105000@gmail.com"
msg["Subject"] = "Python sendmail test"
p = Popen(["/usr/sbin/sendmail", "-t", "-oi"], stdin=PIPE)
p.communicate(msg.as_string())