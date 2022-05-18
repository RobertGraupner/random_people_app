const fs = require('fs');

const genders = ['Female', 'Male'];
const maleNames = ['Robert', 'Daniel', 'Artur', 'Adam', 'Krystian', 'Mateusz', 'Janek'];
const femaleNames = ['Magda', 'Dominika', 'Edyta', 'Dorota', 'Kasia', 'Gosia', 'Oliwia'];
const lastNames = ['Nowak', 'Kowalski', 'Marchewka', 'Osadnik', 'Rolnik', 'Kutyba', 'Grab'];

const randChoice = arr => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
};

const people = [];

for (let i = 0; i < 20; i++) {
	const gender = randChoice(genders);
	const firstName = (gender == "Female") ? randChoice(femaleNames) : randChoice(maleNames);
	const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (78 - 18)) + 18;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  const number = Math.floor(Math.random() * (999999999 - 500000000) + 500000000);

	const person = {
		gender,
		firstName,
		lastName,
    age,
    email,
    number
	};

	people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile("people.json", data, (err) => {
	if (err) throw err;
	console.log("The file has been saved!");
});