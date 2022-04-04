
        function calcular(){/*Aqui nós abrimos a função calcular. Ela será ativada depois do click no botão da página HTML.*/
            var peso1 = document.getElementById ('peso') /*Aqui temos a variável que receberá o conteúdo digitado pelo usuário no primeiro input, indicação do peso. Lembrando que esses valores chegam como string e não como número*/ 
            var alt1 = document.getElementById ('alt')/*Aqui temos a variável que receberá o conteúdo digitado pelo usuário no segundo input, indicação da altura*/
            var res1 = document.getElementById ('res')/*Aqui temos a variável que vai receber o conteúdo da div com id res */

            var p = Number(peso1.value) //Aqui será feita a conversão de string para number do input 1.
            var a = Number(alt1.value) //Aqui será feita a conversão de string para number do input 2.
            var imc = p/(a*a) // Aqui temos a criação de uma variável que vai receber o resultado de um calculo matemático para determinar o valor do IMC, a partir dos valores passados pelo usuário no input da página HTML.

            res1.innerHTML = `O resultado do seu IMC será <strong>${imc.toFixed(2)}</strong> kg/m2.<br>` //Aqui temos o conteúdo da div id='res' sendo modificado a partir do comando innerHTML. Antes a div tinha o conteúdo Resultado, agora ele será substituído por essa frase. Dentro da frase temos uma contatenação do valor da variável imc. Também temos a utilização da função toFixed(2) que tem por objetivo manter apenas as duas primeiras casas decimais depois da vírgula e eliminar as outras.
        if (imc < 18.5) {
            res1.innerHTML += "Você está abaixo do peso."//Aqui começamos a usar o "if" e o "else if" para determinar diferentes possibilidades para a mudança do res1.innerHTML. Dependendo do valor do IMC, uma das opções abaixo vai acontecer. Se o IMC for menor que 18.5, o texto que vai aparecer na div é este. Dependendo do valor que o IMC tiver, ele vai determinar qual frase vai aparcer na div.
        } else if (imc > 18.5 && imc <25) { //O símbolo de && representa E. Desta forma, se o IMC for maior que 18.5 E menor que 24.9 a frase que vai aparecer é que o peso é normal
            res1.innerHTML += "Você está no peso normal." //O sinal de += significa que primeiro vai aparecer o resultado do conteúdo de res1.innerHTML, que nesse caso é a frase contendo o valor do IMC (está frase está abaixo do conta que resultou no valor do IMC) e depois vai aparecer o novo valor do res1.innerHTML, ou seja a frase correspondente ao intervalo de valor que o IMC pertence.
        } else if (imc > 25 && imc < 29.9){
            res1.innerHTML += "Você está com <strong>sobrepeso.</strong>"//Usei a tag <strong> para deixar em negrito a palavra dentro das tags.
        } else if (imc > 30 && imc < 34.9) {
            res1.innerHTML += "Você está com obesidade Grau I."
        } else if (imc > 35 && imc < 39.9) {
            res1.innerHTML += "Você está com obesidade Grau II."
        } else if (imc > 40){
            res1.innerHTML += "Você está com <strong>Obesidade Mórbida</strong>"
        }
    
        }