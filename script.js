const boxes = document.querySelectorAll('.box'); //This will put all the boxes into a node list

// To add an event listener to the entire page 
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}