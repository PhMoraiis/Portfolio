const btn = document.getElementById("btnTop");

btn.addEventListener('click', function() {
    window.scrollTo(0.0);
});

document.addEventListener('scroll', ocultarButton);

function ocultarButton() {
    if (window.scrollY > 110) {
        btn.style.display = 'flex';
        btn.style.transition = '1s';
    } else {
        btn.style.display = 'none';
        btn.style.transition = '1';
    }
}

ocultarButton();