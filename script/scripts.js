document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de navegação
    const navButtons = document.querySelectorAll('.nav-btn');

    // Função para rolar suavemente até a seção
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Função para destacar o botão ativo
    window.addEventListener('scroll', () => {
        let index = navButtons.length;

        while (--index && window.scrollY + 50 < navButtons[index].offsetTop) {}
        
        navButtons.forEach(button => button.classList.remove('active'));
        navButtons[index].classList.add('active');
    });
});
