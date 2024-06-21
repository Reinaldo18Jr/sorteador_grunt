document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();   // para não recarregar a página, o evento dentro da function //
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;  // random entre 0 e 1, para resultado não ser 0 soma +1 //
        numeroAleatorio = Math.floor(numeroAleatorio + 1);   // para arredondar números quebrados onde: .ceil para mais; .floor para menos; .random entre 0.1 0.4 = menos e 0.5 0.9 = mais//   

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';    // faz surgir na tela o conteúdo do 'display:none' do css //
    })
})