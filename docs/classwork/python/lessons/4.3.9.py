class Reservation:
	def __init__(self, name, people, time):
		self.name = name
		self.people = people
		self.time = time

reservations = []

if(input("Would you like to make a reservation? ") in ['true', '1', 't', 'y', 'yes', 'yeah', 'yup', 'certainly', 'uh-huh']):
	name = input("What is your name? ")
	people = input("How many people? ")
	time = input("What time? ")
	reservations.append(Reservation(name, people, time))
else:
	print("What are you doing here then?")

if(input("Do you have a reservation? ") in ['true', '1', 't', 'y', 'yes', 'yeah', 'yup', 'certainly', 'uh-huh']):
	name = input("Whats the name? ")
	found = False
	for i in range(len(reservations)):
		if reservations[i].name == name:
			print("that reservation is at "+reservations[i].time+" for "+reservations[i].people+" people.")
			found = True
	if found == False:
		if(input("Sorry, we don't seem to have that reservation. Would you like to make a reservation? ") in ['true', '1', 't', 'y', 'yes', 'yeah', 'yup', 'certainly', 'uh-huh']):
			name = input("What is your name? ")
			people = input("How many people? ")
			time = input("What time? ")
			reservations.append(Reservation(name, people, time))
		else:
			print("Have a good night!")
else:
	print("I'm sorry, we don't take walk-ins")