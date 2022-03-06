function show() {
	let age = parseInt(document.getElementById('age').value)
	let div = document.getElementById('mes')

	if (age < 10) {
		div.innerHTML = '<h1>Вы ребенок</h1>'
	}
else if (age < 17) {
	div.innerHTML = '<h1>Вы подросток</h1>'
}
else {
	div.innerHTML ='<h1>Вы взрослый</h1>'
    }
}