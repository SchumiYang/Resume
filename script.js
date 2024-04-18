document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.exp_lab');
    const portfolioContent = document.getElementById('portfolio');
    const workContent = document.getElementById('work');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            menuItems.forEach(btn => btn.classList.remove('button-active'));

            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetId === 'portfolio') {
                workContent.classList.add('hidden');
                portfolioContent.classList.remove('hidden');
            } else if (targetId === 'work') {
                workContent.classList.remove('hidden');
                portfolioContent.classList.add('hidden');
            }

            this.classList.add('button-active');
        });
    });

    portfolioContent.classList.remove('hidden');
    workContent.classList.add('hidden');
});