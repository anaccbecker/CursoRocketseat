// Função de soma
function sum(array){
    let sum = 0;
    for(var i=0; i<array.length; i++){
        sum +=array[i]
    }
return sum
}

// Função de formatação de dinheiro
function moneyFormat(number, local = "US"){
    if (local == "BR"){
        return(`R$ ${number.toFixed(2).replace(".",",")}`)
    }
    else{
    return(`$ ${number.toFixed(2)}`)
    }    
}

// Função de cálculo do balanço
function calcBalance (incomes, expenses){
    totalIncomes = sum(values.incomes);
    totalExpenses = sum(values.expenses);
    balance = totalIncomes - totalExpenses;

    console.log(`Total incomes: ${moneyFormat(totalIncomes, "BR")}`)
    console.log(`Total expenses: ${moneyFormat(totalExpenses, "BR")}`)
    console.log(`Balance: ${moneyFormat(balance, "BR")}`)
}

// Inserção de valores
let values = {
    incomes: [636.,523,674,789],
    expenses: [636,523,987.,789]
}

// Aplicando a função
calcBalance(values)