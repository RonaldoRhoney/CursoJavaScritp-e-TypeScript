//capiturando o formulário

const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
e.preventDefault();
console.log('Evento previnido.');
});