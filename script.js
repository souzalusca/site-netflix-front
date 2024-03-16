
//EVENTO CLICK ARRASTA
document.addEventListener('DOMContentLoaded', function () {
    const filmeListas = document.querySelectorAll('.filme_lista'); // Selecione todos os elementos com a classe "filme_lista"

    filmeListas.forEach(filmeLista => {
        let isMouseDown = false;
        let startX;
        let scrollLeft;

        filmeLista.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.pageX - filmeLista.offsetLeft;
            scrollLeft = filmeLista.scrollLeft;
        });

        filmeLista.addEventListener('mouseup', () => {
            isMouseDown = false;
        });

        filmeLista.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;

            e.preventDefault();

            const x = e.pageX - filmeLista.offsetLeft;
            const walk = (x - startX) * 2;

            filmeLista.scrollLeft = scrollLeft - walk;
        });
    });
});
//SETAS
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as listas de filmes
    const filmeListas = document.querySelectorAll('.filme_lista');

    // Adiciona listeners de evento para cada lista de filmes
    filmeListas.forEach(function (filmeLista) {
        const leftArrow = filmeLista.parentElement.querySelector('.left-arrow');
        const rightArrow = filmeLista.parentElement.querySelector('.right-arrow');

        // Adiciona listener para rolar para a esquerda ao clicar na seta esquerda
        leftArrow.addEventListener('click', () => {
            filmeLista.scrollBy({ left: -1800, behavior: 'smooth' }); // Ajuste conforme necessário
        });

        // Adiciona listener para rolar para a direita ao clicar na seta direita
        rightArrow.addEventListener('click', () => {
            filmeLista.scrollBy({ left: 1800, behavior: 'smooth' }); // Ajuste conforme necessário
        });

        // Verifica se a seta esquerda deve estar visível ou oculta
        function updateArrowVisibility() {
            if (filmeLista.scrollLeft === 0) {
                leftArrow.style.display = 'none';
            } else {
                leftArrow.style.display = 'block';
            }
        }

        // Adiciona listener de scroll para atualizar a visibilidade da seta esquerda
        filmeLista.addEventListener('scroll', updateArrowVisibility);

        // Atualiza a visibilidade da seta esquerda ao carregar a página
        updateArrowVisibility();
    });
});
