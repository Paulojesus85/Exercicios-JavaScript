 /* Aqui começamos o nosso código JavaScript. Esse código é uma função que sempre será ativada quando o botão somar for clicado. Essa função vai receber e armazenar os valores que vão vir dos input number do html. */

        function somar() {
           var tn1 = document.getElementById('txtn1') /*essa variável vai receber o que for digitado pelo usuário no primeiro input. Para receber o valor utilizamos o comando que pega o valor do documento (document) atraves do valor determinado no id (getElementById)*/
           var tn2 = document.getElementById('txtn2') /*essa variável vai receber o que for digitado no segundo input usando o mesmo processo da primeira variável. Por isso temos que dar ids diferentes no input*/
           var res = document.getElementById('res') /*Essa variável vai receber o conteúdo do id 'res'. O conteúdo desse id é a palavra Resultado. Assim, essa palavra vai ficar armazenada nesta variável*/
           var n1 = Number(tn1.value) /*essa variável é necessária para transformar o conteúdo do input em um número. Mesmo o usuário digitando um número, o sistema vai interpretar como uma string (conjunto de caracteres). Para fazer essa conversão temos que pegar o conteúdo da variável que queremos converter e jogar dentro da função Number. Assim, pegaremos o valor da variável (tn1.value) e transformaremos em um número.*/
           var n2 = Number(tn2.value) /*Aqui faremos o mesmo processo descrito acima, mas com a outra variável que recebeu o conteúdo do segundo input.*/
           var s = n1 + n2 /*Aqui que a soma será realizada. Criamos uma variável para armazenar o conteúdo da soma dos números que estão nas variáveis n1 e n2*/
           res.innerHTML = `A soma de ${n1} com ${n2} será ${s}` /*Está última linha do código tem a função de mudar o valor do texto presente na variável res. Inicialmente a variável res recebeu o conteúdo do id 'res' do HTML. Esse conteúdo era a palavra Resultado. Ao utilizar o comando innerHTML, nós vamos trocar a palavra Resultado por outro conteúdo. No caso deste exercícios, o novo texto será: A soma de ${n1} com ${n2} será ${s}. O valor de cada variável vai assumir o espaço do código. Para que isso aconteça precisamos concatenar os conteúdo. Uma forma fácil de fazer isso é usando ${variável}. Para funcionar, tudo deve estar dentro de crases.*/

        }
