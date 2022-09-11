/*
var numero = parseInt (prompt("digite o primeiro:"))
var numero2 = parseInt (prompt("digite o segundo valor:"))

while(numero <= 0){
    alert ("Por favor, informe um número maior que 0!")
    var numero2 = parseInt (prompt ("digite o segundo valor:"))
}

var soma = numero / numero2
alert("o valor será " + soma)
*/

/*atividade 2

var contagem = 30

while (contagem > 0){
    var texto = "contagem em: " + contagem + " segundos" + "<br>";
    document.write(texto);
    contagem = contagem - 1;
}

document.write("EXPLOSÃO!")
*/

/* atividade 3
var numeracao = 10

while (numeracao > 0) {
    var texto = numeracao + "<br>"
    document.write (texto);
    numeracao = numeracao - 1;
}
 */

/*atividade 4
var Number = 15
var acumulador = 0

while ( Number <= 100){
    acumulador += Number
    Number++
}
var média = acumulador / 86
document.write(média);
*/

/* atividade 5
var number = parseInt (prompt("insira o primeiro valor: "));
var number2 = parseInt (prompt("insira o segundo valor: "));
var zero = 0;
var subtração = number2 - number;
var media = 0;

while (number < number2) {
zero += number
console.log(zero)
number++;
}

media = zero / subtração;
document.write(" A media final foi: " + media);
*/

/* atividade 6
var number = parseInt (prompt("insira o primeiro valor: "));
var number2 = parseInt (prompt("insira o segundo valor: "));
var acumuladora = 0
var mediafinal = (number + number2 ) / 2

if(mediafinal > 9.5 ) {
    alert ("Parabéns! Você foi aprovado.");
    acumuladora++;
}
else {
    alert( "Lamento, Você foi reprovado.");
}

var escolha1 = prompt("calcular a média de outro aluno? sim ou não?");
while ( escolha1 == "S"){
    var number = parseInt (prompt("insira o primeiro valor: "));
    var number2 = parseInt (prompt("insira o segundo valor: "));
    var mediafinal = (number + number2 ) / 2
    
    if(mediafinal > 9.5 ) {
    alert ("Parabéns! Você foi aprovado.");
    acumuladora++;
}
    else {
    alert( "Lamento, Você foi reprovado.");
    }
    var escolha1 = prompt("calcular a média de outro aluno? sim ou não?");
    if ( escolha1 == "N" )
        alert ( acumuladora + " alunos aprovados.");
}
*/

/* atividade 7 
var nota = parseInt (prompt("insira uma nota: "))
var nota2 = parseInt (prompt("insira uma nota: "))
var nota3 = parseInt (prompt("insira uma nota: "))
var nota4 = parseInt (prompt("insira uma nota: "))
var nota5 = parseInt (prompt("insira uma nota: "))
var nota6 = parseInt (prompt("insira uma nota: "))

while (nota < 0||nota > 10) {
    var nota = parseInt (prompt("tente de novo "))
}
while (nota2 < 0||nota2 > 10) {
    var nota2 = parseInt (prompt("tente de novo "))
}
while (nota3 < 0||nota3 > 10) {
    var nota3 = parseInt (prompt("tente de novo "))
}
while (nota4 < 0||nota4 > 10) {
    var nota4 = parseInt (prompt("tente de novo "))
}
while (nota5 < 0||nota5 > 10) {
    var nota5 = parseInt (prompt("tente de novo "))
}
while (nota6 < 0||nota6 > 10) {
    var nota6 = parseInt (prompt("tente de novo "))
}

var media = ( nota + nota2 + nota3 + nota4 + nota5 + nota6) / 6
alert ("sua média final foi: " + media)
*/

/* atividade 8
var valor = parseFloat (prompt(" um valor aqui"))
var n = 1
var fator = (valor - n)

while(n <= valor){
  document.write(n + "<br>")
    n++
}
*/

/*
var number = 101
var number2 = 111

while( number <= number2){
document.write(number + "<br>")
number++
}
*/

/*
var inicial = 0
var numero = parseInt (prompt( " digite um numero:"))

while(inicial< numero){
    inicial++

var final = 0
while(final < 10){
    final++
    var soma = inicial * final
    document.write(inicial + " X " + final + " = " + soma + "<br>")
}
}
*/
/* atividade 11
var dentro = 0
var fora = 0
var inicio = 0

while (inicio< 10){
var valor = parseInt(prompt("digite os valores: "))

if (valor > 24 && valor < 42) {
    dentro++
}

else {
    fora++
}

inicio++

}
alert ("existem os valores " + dentro + " dentro e " + fora + " fora ")
*/
