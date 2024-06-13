const item = document.querySelector('.item')
const placeholder = document.querySelector('.placeholder-wrapper')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragstart', dragEnd)

placeholder.addEventListener('dragover', dragOver)
placeholder.addEventListener('dragenter', dragEnter)
placeholder.addEventListener('dragleave', dragLeave)
placeholder.addEventListener('drop', dragDrop)

function dragStart(e) {
    // console.log('ds');
    // console.log(e);
    e.target.classList.add('hold')
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
}

function dragEnd(e) {
    // console.log('de');
    // console.log(e);
    e.target.className = 'item'
}

function dragOver(e) {
    e.preventDefault()
    if (e.target.classList.contains('placeholder')) {
        console.log(1222);
        e.target.classList.remove('hovered')
    }
}

function dragLeave(e) {
    // console.log('dragLeave');
    // console.log(e);
}

function dragEnter(e) {
    // console.log('dragEnter');
    // console.log(e);
    if (e.target.classList.contains('placeholder')) {
        console.log(this);
        changeClass(this, 'add')
    }
}

function dragDrop(e) {
    // console.log('dragDrop');
    // console.log(e);
    if (e.target.classList.contains('placeholder')) {
        e.target.append(item)
        changeClass(this, 'remove')
    }
}

function changeClass (parent, operetion) {
    const placeholders = parent.children
    Array.from(placeholders).forEach(el => {
        operetion === 'remove' 
        ? el.classList.remove('hovered')
        : el.classList.add('hovered');
    })
    // console.log(placeholders);
}