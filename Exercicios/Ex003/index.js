var me = {
    nome: 'Raul',
    idade: 10
}
function checkAge(person){
    console.log('A idade da pessoa é: ' + person.idade + ' anos.')
    if(person.idade > 17){ 
        console.log('A pessoa é maior de idade.')
    } else console.log('A pessoa é menor de idade.')
}

checkAge(me)