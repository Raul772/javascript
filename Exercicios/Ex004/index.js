var person = {
    age:17,
    name:'Lucas'
}

//função pura - Não altera o objeto original
function getRemainingYearsToMajority (person){
    return 18 - person.age
}

//Função impura - Gera uma alteração no objeto original
function increasePersonAge(person){
    person.age += 1
}

increasePersonAge(person)

var ramainingYears = getRemainingYearsToMajority(person)
console.log(ramainingYears)