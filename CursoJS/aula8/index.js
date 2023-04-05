/*Ronaldo Martins tem 30 anos, pesa 82 kg
tem 1.82 de altura e seu IMC é de 25.925925925925924
Ronaldo Martins nasceu em 1980
*/
const nome = 'Ronaldo';
const sobrenome = 'Martins';
const idade = 30;
const peso = 82;
const alturaEmCm = 1.82;
let indiceMassaCorporal; // peso (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2019 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
