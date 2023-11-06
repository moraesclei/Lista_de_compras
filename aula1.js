// praticando aula1 com o (for)
// for(let index = 10; index >= 1; index = index -1){
//     console.log(index);
// }

// console.log('UHULLLLLLLLLLLLLLLLLLLL FELIZ ANO NOVOOOOOOOO 🍾🎆🎆✨');
// ############################################ //
// praticando com (for) 

/** Bora aplicar esse novo conceito em uma situação mais recorrente? 🤔

Imagine que hoje você vai ao mercado e decidiu fazer uma lista de compras para não esquecer do que precisa comprar.

maçã
gengibre
miojo
biscoito/bolacha
banana
feijão carioquinha
pasta de dente
Você organizou sua lista para que as frutas sejam pegas logo que chegar ao mercado, afinal quer escolher as mais fresquinhas 🍇🍉🍌

Pegue 1 item da lista;
Verifique se é uma fruta; caso seja, adicione ao seu carrinho;
Vá para o próximo item da lista;
Verifique se é uma fruta; caso seja, adicione ao seu carrinho;
Vá para o próximo item da lista;
Verifique se é uma fruta; caso seja, adicione ao seu carrinho;
Vá para o próximo item da lista;
Verifique se é uma fruta; caso seja, adicione ao seu carrinho.
Depois de passar por toda a lista, você terá apenas as frutas no seu carrinho e poderá pegar os outros itens! 🛒

Note que na lista foram repetidos os mesmos processos várias vezes. Quando passarmos para a linguagem de programação, isso resultará em um código extenso, podendo resultar em uma dificuldade de leitura e compreensão, o que não é uma boa prática.

Qual é a melhor solução para evitarmos um código repetitivo e pegarmos somente as frutas da lista de compras?

Utilizando um loop!

Primeiro, temos que definir a lista de compras e o carrinho como arrays. Então, vamos criar um array para guardar a nossa lista e outro para guardar o que está no carrinho.🛒 

    OBS: O carrinho começa vazio, vamos adicionar itens nele durante o for.
*/

// const listaDeCompras = [
//     'maçã',
//   'gengibre',
//   'miojo',
//   'biscoito/bolacha',
//   'banana',
//   'feijão carioquinha',
//   'pasta de dente',
// ] // itens para comprar
// const carrinho = []; // array vazio que irá receber os itens da variável listaDeCompras

// for(let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; posicaoNaLista = posicaoNaLista +1){
//     if(listaDeCompras[posicaoNaLista] === 'maçã' || listaDeCompras [posicaoNaLista] === 'banana'){
//         carrinho.push(listaDeCompras[posicaoNaLista]);
//     }
// }
// console.log(carrinho); // ['maçã','banana']

// ############################################## //

// praticando com (for) //

 /*Criando uma Tabuada de multiplicação*/ 

//  let numero = 5;

//  for(let contador = 1; contador <= 9; contador +=1){
//     console.log(numero * contador);
//  }

//  let num = 7;

//  for (let contador = 1;contador <= 10; contador = contador + 1){
//     console.log(num * contador);
//  }

// let num = 7;

// for(let cont = 1; cont <= 10; cont = cont + 1){
//     console.log(num + cont);
// }


// PRATICANDO FOR EXEMPLO 2

const shoppingList = ['maçã', 'gengibre', 'miojo', 'biscoito/bolacha0', 'banana', 'feijão carioquinha', 'pasta de dente'];
const carrinho = [];

for(let positionList = 0; positionList < shoppingList.length; positionList +=1){
    if(shoppingList [positionList] == 'maçã' || shoppingList[positionList] == 'banana'){
        carrinho.push(shoppingList[positionList]);
    }
}
console.log(carrinho);

// git init
// git add + nomedoprojeto
// git commit -m ''
// git remote add origin + linkdorepositorio
// git push -u origin master
// git status