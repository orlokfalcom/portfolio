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
document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Por favor, informe seu nome:');
    
    if (userName) {
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `Olá, ${userName}! Obrigado por acessar meu portifolio.`;

        // Obter o IP do usuário usando uma API pública
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const userIP = data.ip;
                const logData = `Nome: ${userName}, IP: ${userIP}\n`;

                // Enviar os dados para o servidor
                fetch('./log/log.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ logData: logData }),
                })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.error('Erro:', error));
            });
    }
});
