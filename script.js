const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragEnd(e) {
    setTimeout(() => {
        e.target.style.display = 'block';
    }, 0);
}

const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener('dragover', dragOver);
gridContainer.addEventListener('drop', drop);

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const rect = gridContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    draggable.style.left = `${offsetX - draggable.offsetWidth / 2}px`;
    draggable.style.top = `${offsetY - draggable.offsetHeight / 2}px`;
}
