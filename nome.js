// async function fetchUser(username){
//     const response = await fetch('https;//api.github.com')
// const data = await response.json()
// console.log(data)
// return data;
// }
// fetchUser('')
//      SWITCH CASE
// let nome= "pedro"
// console.log(`seu nome é ${nome}`)
// IF ELSE
// let E = 3
// let A = 9
// if (20<=9){
//     console.log("20 é menor que 9")
// }
// else
// {
//     console.log ("20 não é menor que 9")
// }
// let nascimento= 2003
// let requisito= 2005
// if (nascimento < requisito){
//     console.log("poderá votar este ano")
// }
// else 
// {
//     console.log("não poderá votar este ano")
// }
// let senha = 12345
// if(senha -= 1234){
//     console.log("ACESSO NEGADO")
// }
// else{
//     console.log("ACESSO PERMITIDO")
// }
// let kg= 69
// let altura= 1.80
// let IMC =kg/ (altura * altura)
// if (IMC<18.5){
// console.log('magreza')
// }
// if (IMC >= 18.5 && IMC <= 24.9 ){
//     console.log("normal")
// }
// if(IMC >=25.0 && IMC <=29.9){
//     console.log("sobrepeso")
// }
// if (IMC >=30.0 && IMC <=39.9){
//     console.log("obesidade")
// }
// if(IMC >40.0){
//     console.log('obesidade grave')
// }
// AULA 13/03 CALL BACK
// function exibirMensagem(arg) {  "exibir": Unknowm Word, 
// console.log(`Resultado : " ${arg} "`); "Resultado": Unknowm Word
// }
// async function DadosApi(api,callback) {
//     const resultados = await fetch(api); "resultados": Unknown Word
//     const dados = await resultados.json(); "resultados": Unknown Word
//     callback(dados.value);
// }
// DadosApo('https//api.chucknorris.io/jokes/randos', exibirMensagem)
//    E S T R U T U R A   D E    R E P E T I Ç Ã O       
// let num = 5; 
//         console.log(num * 0) ;
//         console.log(num * 1) ;
//         console.log(num * 2) ;
//         console.log(num * 3) ;
//         console.log(num * 4) ;
//         console.log(num * 5) ;
//         console.log(num * 6) ;
//         console.log(num * 7) ;
//         console.log(num * 8) ;
//         console.log(num * 9) ;
//         console.log(num * 10) ;
    // let contador = 0;
    // while(contador < 10){
    //     console.log(contador);
    //     contador ++;
    // }
        
// let contador = 0;
// do {
//     contador++;
//     console.log(contador);
// } while (contador <10);
// for (let i =0; i <20; i++){
//     console.log(i)
// }
// E X E R C I C I O
// let tabuada = 10
// for (let i= 0; i <=10; i++){
// console.log(`${tabuada} x ${i}= ${tabuada*i}`)
// }
// function soma (n1, n2) {
//     return new Promise ( (resolve, reject)=> {
//         if (typeof n1 !== "number " || typeof n2 !== "number") {
//             reject("Os valores informados devem ser numeros");  "valores"
//         } else {
//             const result = n1 + n2 ;
//             resolve(result);
//         }
//     });
// }
// soma (2,3)
// .then((result) => console.log(result))
// .catch((error) => console.log(error));
