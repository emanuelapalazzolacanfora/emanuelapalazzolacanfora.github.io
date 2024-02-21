document.getElementById('mobile-menu').addEventListener('click', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuList = document.querySelector('.menu-list');

    menuToggle.classList.toggle('active');
    menuList.classList.toggle('show');
});

const allNavBtns = document.querySelectorAll('.navbar');

allNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        var activeMenus = document.querySelectorAll('.show.active');
        activeMenus.forEach(menu => {
            menu.classList.remove('active');
        });
    });
});

// Ajout d'un écouteur d'événements pour les balises <a> directement dans les liens ul li
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        var menuList = document.querySelector('.menu-list');
        var menuToggle = document.querySelector('.menu-toggle');

        menuList.classList.remove('show');

        menuToggle.classList.remove('active');
    });
});


