let students = [
	{'id': 1, 'name': 'Данила', 'surname': 'Алферов'},
	{'id': 2, 'name': 'Тихон', 'surname': 'Балаганский'},
	{'id': 3, 'name': 'Константин', 'surname': 'Бобровский'},
	{'id': 4, 'name': 'Владимир', 'surname': 'Бурыкин'},
	{'id': 5, 'name': 'Семен', 'surname': 'Велигжанин'}
]

for ( i = 0; i < students.length; i++) {
	console.log(students[i].surname+' '+students[i].name)
}