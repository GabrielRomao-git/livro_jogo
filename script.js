var pagina1 = "<audio id='music' autoplay loop controls='controls'> <source src='X2Download.app - Low of Solipsism - Death Note [Extended] (128 kbps).mp3' type='audio/mpeg'></audio><div class='gif'> <video autoplay muted loop ><source src='img/Candles forming a heart.mp4' type='video/mp4'></video></div> <div id='letrasClara' class='livro'><button onclick='darkMode();'>Dark Mode</button><img id='imagem_livro_aberto' class='imagem_livro_aberto' src='img/livrorecortado.png' /><div class='conteudo1'><figcaption id='pagina1'><strong>Mais um dia se iniciou, e encontramos dois homens, deitados em sua cama. Um deles está dormindo profundamente enquanto o outro está a despertar de seu sono, esse é o Gabriel, que aos poucos come recuperando sua consciência, ele olha para o lado e começa a admirar o seu parceiro, Cris, o amor da sua vida.Gabriel, saindo da cama decide começar seu longo dia, ele se despede com um beijo na testa de seu amor. Ele começa a arrumar sua casa, pois sabe como seu amor fica de bom humor com sua casa limpa.</strong></figcaption><img src='img/GabsDeitado.png' alt='deitado' /></div><div class='conteudo2'><figcaption id='pagina2'><strong>Enquanto isso, pelo outro lado, vemos Cris levantando-se da cama, ele parece estar de bom humor, por enquanto. Então se levanta e começa a se preparar para mais um dia. Decidi tomar um banho e no caminho para o banheiro é surpreendido por Gabriel- Bom dia, amor! - Gabriel abre um sorriso e vai de encontro para beijar o Cris.</strong></figcaption><button class='escolhas' id='escolha1' onclick='mudarPagina(pagina2);'>Escolha 1</button><button class='escolhas' id='escolha2' onclick='mudarPagina(pagina2);'>Escolha 2</button></div></div>"

var pagina2 = "<audio id='music' autoplay loop controls='controls'> <source src='X2Download.app - Low of Solipsism - Death Note [Extended] (128 kbps).mp3' type='audio/mpeg'></audio><div class='gif'> <video autoplay muted loop ><source src='img/Candles forming a heart.mp4' type='video/mp4'></video></div> <div id='letrasClara' class='livro'><button onclick='darkMode();'>Dark Mode</button><img id='imagem_livro_aberto' class='imagem_livro_aberto' src='img/livrorecortado.png' /><div class='conteudo1'><figcaption id='pagina1'><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus dolores quos voluptates, alias aut praesentium omnis doloremque quas, iure, eos cumque totam aspernatur illo similique libero consequatur veniam facere dolorem optio perspiciatis dolorum. Quaerat, officiis. Voluptate incidunt facilis quisquam consequatautem asperiores? Accusantium officiis nesciunt magnam. Facilis nemo asperiores placeat consequuntur est, amet vitae aspernatur debitis id excepturi libero praesentium repellat qui ratione voluptates eos voluptas, impedit quidem iure ab suscipit at quas delectus quos! Maxime expedita nam tempore qui, velit facilis ad totam saepe voluptates sed eius vel rerum molestias provident tenetur dignissimos repellat dicta ullam minima fugiat quo assumenda eum dolorum cum! Qui, molestiae!</strong></figcaption></div><div class='conteudo2'><figcaption id='pagina2'><strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium non magni, totam fugit autem aliquam quos consectetur excepturi tempore ducimus! Accusantium nulla, quis eveniet veritatis officia ipsum voluptate non. Vel eveniet et vero libero vitae assumenda tempora quia cumque quisquam beatae. Architecto, accusamus qeniti vel, sit dolorem in facilis, praesentium id porro iste ipsum architecto? Id, expedita? Repellat corporis obcaecati, voluptate natus distinctio sequi dolor, adipisci fugiat reiciendis sunt alias? Sed aliquam aliquid quia alias. Harum quasi, pariatur fuga sit error ducimus possimus omnis libero repellat nostrum quam eius porro, assumenda commodi, rem voluptatem ratione.</strong></figcaption><button class='escolhas' id='escolha1' onclick='mudarPagina(pagina2);'>Escolha X</button><button class='escolhas' id='escolha2' onclick='mudarPagina(pagina3);'>Escolha Y</button></div></div>"
var pagina3 = "";
var pagina4 = "";
var pagina5 = "";
var livro = document.querySelector(".livro");
var conteudo = document.getElementById("conteudo");

var dark = false;

function darkMode() {
    if (dark == false) {
        document.getElementById("imagem_livro_aberto").src = 'img/LivroDark.jpeg';
        dark = true;
    } else {
        document.getElementById("imagem_livro_aberto").src = 'img/livrorecortado.png';
        dark = false;
    }

    document.getElementById("letrasClara").classList.toggle("altoContraste");

}

function mudarPagina(num_pagina) {
    conteudo.innerHTML = num_pagina;
}

function abrir_livro() {
    conteudo.innerHTML = pagina1
}