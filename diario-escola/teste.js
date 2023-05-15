/*
  1) Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira: “ultimoSobrenome, primeiroNome”;
  2) Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”;
    obs: assumirei os underlines como underlines e não whitespaces.
  
*/

const clientes = [
  {
    id: 1,
    nome: "Luis Santos Silveira",
    idade: 18,
  },
  {
    id: 2,
    nome: "Ricardo Lopes Alves",
    idade: 30,
  },
  {
    id: 3,
    nome: "Gustavo Silva Junior",
    idade: 26,
  },
];

let numero = "5(1)9-876-543-21";

for (let i in clientes) {
  let partesNome = clientes[i].nome.split(" ");
  const ultimoSobrenome = partesNome[partesNome.length - 1];
  const primeiroNome = partesNome[0];

  console.log(ultimoSobrenome + ", " + primeiroNome);
}

const formatarNumero = (numero) => {
  const numeroLimpo = numero.replace(/\D/g, "");
  const numeroFormatado = numeroLimpo.replace(
    /(\d{2})?(\d)?(\d{4})?(\d{4})/g,
    "$1_$2_$3-$4"
  );

  if (numeroLimpo.length != 11) {
    console.log(
      "o numero inserido eh invalido pois nao segue o padrao (XX) X XXXX-XXXX"
    );
  }

  console.log(numeroFormatado);
};

formatarNumero(numero);

/*
***BONUS***

3) Qual a ordem dos prints no console?
4) Existe algum erro nesse código? Se sim, comente sobre
*/

async function a() {
  b();
  await c();
  await d();
  alertUsers("a");
}
a();

function b() {
  return;
  alertUsers("b");

  //função b retorna o valor da função antes da execução da função alertUsers.
}

function c() {
  return new Promise((resolve) => {
    resolve();
    alertUsers("c");
    // a função c chama a resposta da promisse antes da execução da função alertUsers
  });
}
function d() {
  return new Promise((resolve) => {
    alertUsers("d");
    // a função não chama a resposta da promisse deixando a em aberto.
  });
}

function alertUsers(message) {
  console.log("A função é: " + message);
  //saida `c d`
}

/*
***RESPOSTAS DAS PERGUNTAS BONUS***

  questão 3:
    ordem das saidas no console "c" e "d"

  questão 4:
    o código tem alguns erros estruturais, a função b deveria ser uma função assincrona, pois tem que esperar o retorno da função alertUsers, assim como as outras e além disso ela retorna o valor da função antes de chamar a função alert.

    a função c finaliza incorretamente a promisse, porém a função alertUser é chamada normalmente.

    a função d não finaliza a promisse, mas retorna o valor dela.

    a função a que foi chamada no inicio precisa esperar o retorno de todas as funções previamente citadas para continuar sua execução, porém como a função d não finalizou a promisse, todo codigo que venha depois da função d dentro da função a, é ignorado.
*/
