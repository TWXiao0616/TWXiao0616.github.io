window.addEventListener('load', function() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const artworks = document.querySelectorAll('.artwork');

    setTimeout(function() {
        header.style.opacity = 1;
    }, 500);

    setTimeout(function() {
        nav.style.opacity = 1;
    }, 1000);

    window.addEventListener('scroll', function() {
        artworks.forEach(function(artwork) {
            if (isElementInViewport(artwork)) {
                artwork.setAttribute('data-animate', 'true');
            }
        });
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
