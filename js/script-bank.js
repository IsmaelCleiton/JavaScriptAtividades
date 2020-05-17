var users = [];

function createUser(){
    nome = prompt("digite o nome");
    let ind = users.length;
    users.push({
        nome: nome,
        transations: [],
        balance: 0
    }); 
}

function transação(){
    type = prompt('Qual o tipo da transação');
    value = prompt('Qual o valor da transação');
    id = prompt('Qual o id da conta');
    if(type == 'debit')
        users[id].balance -= value;
    if(type == 'credit')
        users[id].balance += value;
    users[id].transations.push(createTransation(type, value));
    console.log(users[id]);
    
}

function createTransation(type, value){
    return {
        type : type,
        value : value
    };
}

function run(){
    do{
        cont = prompt("Deseja criar um usuario? y/n");
        
        if(cont == "y"){
            createUser();
        }
        cont = prompt("Deseja fazer uma transação? y/n");
        if(cont == 'y'){
            transação();
        }
    }while(cont == "y");
}
