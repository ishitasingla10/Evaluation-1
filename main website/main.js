
function scrollLeft() {
    const container = document.getElementById('scrollable-content');
    container.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.getElementById('scrollable-content');
    container.scrollBy({ left: 200, behavior: 'smooth' });
}
