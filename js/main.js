

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2) {
    return n1 + n2;
}
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true
   }else {
    validar = false
}
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++ + 1;
};
*/

/*
var idade = prompt("qual a sua idade?");
if (idade  > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//var fruta = (nome:"maçã", cor:"vermelha")
//console.log(fruta.nome);
//var lista = ("maçã". "pêra", "laranja");
//lista.push("")
//comando acima para adicionar algo a lista
//lista.pop("")
//comando acima para retirtar algo da lista 
//console.log(lista);
//comando para atravez de numeros começando pelo 0
//identificar cada item da lista
//console.log(lista.length);
//comando acima para ver o qauanto de item ha na lista 
//console.log(lista.reverse());
//comando acima para reverter a ordem de item da lista
//console.log(lista.toString());
//comando acima transforma tudpo em string
//console.log(lista.join(""));
//comando acima transforma tudo em string mas escreve 
//entre os item da lista 

//var nome = "Jorge Albernaz Jr";
//var idade = 26;
//alert(nome + " tem " + idade + " anos ");
//var frase = " Japão é a melhor seleção do mundo ";
//console.log(frase.replace("Japão", "Brasil"));
//comando acima muda Japão por Brasil. 
//alert(frase.replace("Japão", "JBrasil"))
//console.log(frase.toUpperCase());
//comando acima coloca a frase em maiusculo
//console.log(frase.toLowerCase());
//comando acima coloca a frase em minusculo

