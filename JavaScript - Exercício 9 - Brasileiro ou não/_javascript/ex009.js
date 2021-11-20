function enviar(){ //Aqui começa a função que será ativada com o onclick no input button
    var nac = document.getElementById ("nac1") //Aqui temos a variável nac que receberá o conteúdo do id nac1
    var r = document.getElementById ("res") //Aqui temos a variável r que receberá o conteúdo do id res
    var nacion = String(nac.value.toLowerCase()) //Aqui nós criamos a variável nacion para que possamos transformar o conteúdo da variável nac em uma string (conjunto de caracteres). Além disso, acrescentamos o método toLowerCase para que todos os caracteres sejam colocados em minúsculo. Desta forma, independente de como o usuário escrever Brasil (brasil, BRasiL, BRASIL, etc) os caracteres serão convertidos para a forma minúscula e fazendo com que a nossa função funcione mesmo com um erro do usuário. Se não fizermos isso, e o usuário escrever Brasil só com minúsculas ou só com maiúsculas vai dar que ele é estrangeiro.
if (nacion == 'brasil') { //Aqui abrimos uma condicional if que determina que se a variável nacion for igual a brasil a variável r vai receber uma nova frase, neste caso, Você é brasileiro. Lembrando que colocamos brasil em minúsculas, pois todos os caracteres serão convertidos para minúsculo devido o método toLowerCase()
   r.innerHTML = '<p>Você é brasileiro.</p>'
} else { //Caso a variável nacion não for igual Brasil, a variável r vai receber a frase "Você é estrangeiro."
   r.innerHTML = '<p>Você é estrangeiro.</p>'//Lembrando que innerHTML troca o conteúdo HTML que está na variável r.
}
}