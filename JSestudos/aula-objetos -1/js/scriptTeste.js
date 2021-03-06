// objeto é com chaves

const pessoa = {
    nome: 'Amanda',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa)
console.log(pessoa.nome) // aqui mostra somente um elemento do objeto

const nome = pessoa.nome
console.log(nome) /// aqui eu atribuo o nome do objeto a uma constante e mando imprimir

//vamos agora criar uma função factory que retorna nome sobrenome e idade

function criarPessoa (nome,sobrenome, idade){ // paramatro
    return {
        //nome: nome, // quando a classe do objeto tiver o mesmo nome do parametro, podemos usar o mesmo nome
        //sobrename: sobrenome,
        //idade: idade

        // o codigo acima é equivalente ao abaixo, pois os nome da classe e do paramatro é igual
         nome,
         sobrenome,
         idade
    }
}
const pessoa1 = criarPessoa('Luiz', 'Otavio', 25); // argumento
console.log(pessoa1)



// vamos entender oqué o metedo this dentro de um objeto

 const pessoa2 ={
     nome: 'Luiz',
     sobrenome: 'Bartosiaki',
     idade: '45',

     // criar um metodo agora para o escoto pessoa2

     fala(){
         console.log(`a minha idade atual é ${this.idade}`)
     },
     incrementaIdade(){
         this.idade++;
     }
 }

pessoa2.fala();
 pessoa2.incrementaIdade();
pessoa2.fala();


//atribuição por desestruturação de objetos 


const pesso3 = {
     nome1:'luiz',
     sobrenome:'Bartosiaki',
     idade:30,
     endereco:{
         rua: 'av imperio',
         numero: 320
     }
    };
//const { nome1 , sobrenome} = pesso3;
//console.log(nome1, sobrenome)

// para mudar o nome do variavel
//const { nome1: teste , sobrenome} = pesso3;
//console.log(teste, sobrenome)


// para pegar objetos dentro de ojetos

    //const {endereco:{rua, numero}} = pesso3;
    //console.log(rua, numero)
    // outro forma logo abaixo

    const {endereco} = pesso3;
    console.log(endereco)

// usando o modo rest
    const {nome1, ...resto} = pesso3;
    console.log(resto);
    console.log(nome1)
