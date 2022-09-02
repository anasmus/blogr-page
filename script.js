const navbarItemIds = ['nav-item-one', 'nav-item-two', 'nav-item-three'];
document.querySelectorAll('.main-nav-item').forEach(item => {
    item.addEventListener('click', navClickHandler)
});
document.querySelectorAll('.secondary-nav li').forEach(li => {
    li.addEventListener('click', hideOpenedList)
});
document.querySelector('.hamburger').addEventListener('click', menuOpen);
function navClickHandler(e) {
    const targetId = e.target.id;
    hideOpenedList(targetId);
    // class active is used to display correct arrow next to nav items
    document.getElementById(targetId).classList.toggle('active');
    document.querySelector(`#${targetId} + .secondary-nav`).classList.toggle('hidden');
}

function hideOpenedList(targetId) {
    navbarItemIds.forEach(itemId => {
        if (itemId !== targetId) {
            document.getElementById(itemId).classList.remove('active');
            document.querySelector(`#${itemId} + .secondary-nav`).classList.add('hidden');
        }
    });
}
function menuOpen(e) {
    if (e.target.getAttribute('src') == 'images/icon-hamburger.svg') {
        e.target.setAttribute('src', 'images/icon-close.svg');
    } else {
        e.target.setAttribute('src', 'images/icon-hamburger.svg');
    }
    document.querySelector('.navbar').classList.toggle('mobile-menu');
}