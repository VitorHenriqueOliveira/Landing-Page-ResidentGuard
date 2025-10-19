document.addEventListener('DOMContentLoaded', function () {
    if (window.feather) {
        feather.replace();
    }
});

// Garantir rolagem suave entre os sections além do css.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});