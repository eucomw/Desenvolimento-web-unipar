// Importa o módulo readline
const readline = require('readline');

// Configura a interface de entrada e saída
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function formatarMoeda(valor) {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(valor);
}

const dadosTitular = {nome: "William Araujo", agencia: 3524, numeroDaConta: "35246-5"}
let valorConta = 5000.0;

function mostrarDadosTitular(){
    console.log('Nome: ' + dadosTitular.nome);
    console.log('Agencia: ' + dadosTitular.agencia);
    console.log('Numero da Conta: ' + dadosTitular.numeroDaConta);
}

function mostrarSaldoConta(){
    return console.log(`Seu saldo atual é de ${formatarMoeda(valorConta)}`);
}

function debito(){
    rl.question("Qual será o valor de retirada? ", (valorDebito) => {
        valorDebito = parseFloat(valorDebito.replace(',', '.'));
        
        let conferirValorConta = valorConta;
        conferirValorConta -= valorDebito;

        if (conferirValorConta >= 0){
            valorConta -= valorDebito;
            mostrarSaldoConta();
        } else {
            console.log("Saldo indisponível.");
        }
        
        menu();
    })
}

function credito(){
    rl.question("Qual será o valor de deposito? ", (valorCredito) => {
        valorCredito = parseFloat(valorCredito.replace(',', '.'));

        valorConta += valorCredito;
        mostrarSaldoConta();

        menu();
    })
}

function menu(){
    console.log('');
    console.log("=========Menu=========")
    console.log("1 - Dados do Titular")
    console.log("2 - Consultar Saldo")
    console.log("3 - Realizar Débito")
    console.log("4 - Realizar Crédito")
    console.log("0 - Sair do sistema")

    rl.question("Escolha uma opção: \n", (opcao) => {
        switch(opcao){
            case "1":
                mostrarDadosTitular();
                menu();
                break;

            case "2": 
                mostrarSaldoConta();
                menu();
                break;

            case "3":
                debito();
                break;

            case "4":
                credito();
                break;

            case "0":
                rl.close();
                console.log('====Sistema Finalizado====')
                break;

            default:
                console.log("Opção inválida");
                menu();
                break;
        }
    })
}

menu();