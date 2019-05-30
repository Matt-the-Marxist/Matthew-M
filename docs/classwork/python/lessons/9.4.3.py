class ContactBook:
	def __init__(self, *args):
		for i in args:
			try:
				self.__dict__[i[0]].append(*i[1:])
			except:
				self.__dict__[i[0]] = [x for x in i[1:]]
	
	def __add__(self, other):
		l = []
		for key in self.__dict__:
			l.append((key, *self.__dict__[key]))
		for key in other.__dict__:
			l.append((key, *other.__dict__[key]))
		return ContactBook(*l)
	
	def __repr__(self):
		return(str(self.__dict__))
	
	def addContacts(self, *args):
		for i in args:
			try:
				self.__dict__[i[0]].append(*i[1:])
			except:
				self.__dict__[i[0]] = [x for x in i[1:]]

cb1 = ContactBook(("Lisa", "111-555-9999"),('Jonathan', '222-555-8888'))
cb2 = ContactBook(('Jonathan', '444-555-6666'),('Puneet', '333-555-7777'))
cb3 = cb1+cb2

print(cb3)