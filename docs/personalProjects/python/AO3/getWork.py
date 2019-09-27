import AO3



tave = 0
positive = []
for tryId in range(10000067,99999999):
	print(tryId)
	try:
		w = AO3.Work(tryId)
		a = {}
		a['id'] = tryId
		a['title'] = w.title
		print(a['title'])
		a['chapters'] = []
		w.load_chapters()
		for i in range(1,len(w.chapter_ids)+1):
			a['chapters'].append(w.get_chapter_text(i))
		print(a)
		positive.append(a)
	except:
		pass
print(positive)