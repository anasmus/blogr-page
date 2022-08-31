const navbarItemIds = ['nav-item-one', 'nav-item-two', 'nav-item-three'];
document.querySelectorAll('.main-nav-item').forEach(item => {
    item.addEventListener('click', navClickHandler)
});
document.querySelectorAll('.secondary-nav li').forEach(li => {
    li.addEventListener('click', hideOpenedList)
});
function navClickHandler(e) {
    const targetId = e.target.id;
    hideOpenedList(targetId);
    document.querySelector(`#${targetId} + .secondary-nav`).classList.toggle('hidden');
}

function hideOpenedList(targetId) {
    navbarItemIds.forEach(itemId => {
        if (itemId !== targetId) {
            document.querySelector(`#${itemId} + .secondary-nav`).classList.add('hidden');
        }
    });
}