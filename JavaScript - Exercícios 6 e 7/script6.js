var a = document.getElementById ('area') //a variável a vai pegar o elemento que tenha o id 'area'. Esse id é da div. É aí que acontecerá as mudanças ativadas pelo addEventListener()
        a.addEventListener ('click', clicar)
        a.addEventListener ('mouseenter', entrar)
        a.addEventListener ('mouseout', sair)
        //as três linhas acima são os addEventListener. O primeiro elemento é a variável a, depois temos a função addEventListener e por último o tipo de evento que vai dispar a função e qual função será disparada
        function clicar() {
            a.innerText = 'Clicou!'
            a.style.background= 'black'
        }
        function entrar() {
            a.style.background= 'red'
            a.innerText= 'Entrou!'
        }
        function sair() {
            a.innerText= 'Saiu!'
            a.style.background= 'blue'
        }
        //acima temos as três função que serão disparadas com o addEventListener. Em todas as função temos a letra a seguida de um ponto. O a é relativo a variável a. O innerText é usado para trocar o texto da variável a. O style.background muda o background que está determinado iniciamente no style CSS.