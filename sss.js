let students = [
	{'id': 1, 'name': 'Данила', 'surname': 'Алферов'},
	{'id': 2, 'name': 'Тихон', 'surname': 'Балаганский'},
	{'id': 3, 'name': 'Константин', 'surname': 'Бобровский'},
	{'id': 4, 'name': 'Владимир', 'surname': 'Бурыкин'},
	{'id': 5, 'name': 'Семен', 'surname': 'Велигжанин'}
]
let current = 0 

// загрузка по ид
function load_stedent(id) {
	document.getElementsById('name').value = students[id].name
	document.getElementsById('surname').value = students[id].surname
}

//следующий студент
function next() {
	load_stedent(current)
	current++

	if (current === students.length) {
		document.getElementsById('bth_next').disabled - true
	}
}