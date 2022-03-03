function show() {
	let age = parseInt(document.getElementById('age').value)

	if (age < 10){
		console.log('Вы ребенок')
	}
else if (age < 17) {
	console.log('Вы подросток')
}
else{
	console.log('Вы взрослый')
}
}