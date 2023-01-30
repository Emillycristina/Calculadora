function inserir(num){
    //armazenando o <p> que vai receber os numeros
   let numero = document.getElementById('campo').innerHTML 
   // o campo que recebe os numeros esta recebendo um numero + outro
   document.getElementById('campo').innerHTML = numero + num;  
}

function clean(){
    // utilizando espaço para apagar o campo
    document.getElementById("campo").innerHTML = " ";
}

function back(){
    //armazenando o campo em uma variável resultado
    let resultado = document.getElementById("campo").innerHTML;
    //utilizando a variável pra apagar um item de cada vez do campo
    document.getElementById("campo").innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    // armazenando a variável em um campo
    let resultado = document.getElementById("campo").innerHTML;
    // se houver resultado no campo, vai entrar no if e o eval calcula o resutado.
    if(resultado){
        document.getElementById('campo').innerHTML = eval(resultado);
    }
}