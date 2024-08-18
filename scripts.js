// Seleciona todos os links de navegação com a classe "nav-link"
document.querySelectorAll('.nav-link').forEach(link => {
    // Adiciona um evento de clique para cada link
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
        const targetElement = document.getElementById(targetId); // Seleciona o elemento alvo pelo ID

        // Rola suavemente até a posição da seção alvo
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Define o comportamento de rolagem como suave
        });
    });
});

// Cria um botão "Voltar ao Topo" dinamicamente e adiciona ao rodapé
const footer = document.querySelector('footer');
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Voltar ao Topo'; // Define o texto do botão
backToTopButton.style.marginTop = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.cursor = 'pointer';

// Adiciona um evento de clique para rolar de volta ao topo da página
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Define a rolagem como suave
    });
});

// Adiciona o botão ao rodapé
footer.appendChild(backToTopButton);

// Seleciona todos os blocos de projeto
const projectElements = document.querySelectorAll('.project');

function checkVisibility() {
    // Itera sobre cada bloco de projeto
    projectElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Verifica se o bloco está visível na tela
        if (rect.top < window.innerHeight) {
            el.style.opacity = 1; // Define a opacidade para 100%
            el.style.transform = 'translateY(0)'; // Remove o deslocamento vertical
        }
    });
}

// Configura os blocos de projeto inicialmente invisíveis e levemente deslocados
projectElements.forEach(el => {
    el.style.opacity = 0; // Define a opacidade inicial como 0
    el.style.transform = 'translateY(20px)'; // Desloca levemente para baixo
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Define a transição
});

// Adiciona eventos de rolagem e carregamento para verificar a visibilidade dos blocos
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
