window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');
        setTimeout(function() {
            preloader.style.visibility = 'hidden';
        }, 800);
    }, 3000);
});