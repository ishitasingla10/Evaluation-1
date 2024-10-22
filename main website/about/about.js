document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const memberName = member.getAttribute('data-member');
        alert(`You clicked on ${memberName}`);
    });
});
