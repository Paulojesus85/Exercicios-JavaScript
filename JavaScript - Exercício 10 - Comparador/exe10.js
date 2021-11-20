function compararig() {
                var n1 = document.getElementById('nu1').value
                var n2 = document.getElementById('nu2').value
                alert(n1==n2)
            }
            function comparardif() {
                var n1dif = document.getElementById('nu1_dif').value
                var n2dif = document.getElementById('nu2_dif').value
                alert(n1dif != n2dif)
            }
            function compararma() {
                var n1ma = document.getElementById('nu1_ma').value
                var n2ma = document.getElementById('nu2_ma').value
                alert(n1ma > n2ma)
            }
            function compararmaigual(){
                var n1maigual = document.getElementById('nu1_maigual').value
                var n2maigual = document.getElementById('nu2_maigual').value
                alert(n1maigual >= n2maigual)
            }
            function compararmenor(){
                var n1menor = document.getElementById('nu1_menor').value
                var n2menor = document.getElementById('nu2_menor').value
                alert(n1menor < n2menor)
            }
            function compararmeigual(){
                var n1meigual = document.getElementById('nu1_meigual').value
                var n2meigual = document.getElementById('nu2_meigual').value
                alert(n1meigual <= n2meigual)
            }