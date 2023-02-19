const blocks = document.querySelectorAll('.block')
let isX = true
let isGame = true

for (let i = 0; i < blocks.length; i++) {
    let count = 0
    blocks[i].addEventListener('click', () => {
        count++
        if (isGame && count == 1) {
            if (isX) {
                blocks[i].innerHTML = 'X'
            } else {
                blocks[i].innerHTML = 'O'
            }

            isWin()
            isX = !isX
        }
    })
}

function isWin() {
    if (
        blocks[0].innerHTML != '' &&
        blocks[0].innerHTML == blocks[1].innerHTML &&
        blocks[1].innerHTML == blocks[2].innerHTML
    ) {
        visualizeWin(0, 1, 2)
    } else if (
        blocks[3].innerHTML != '' &&
        blocks[3].innerHTML == blocks[4].innerHTML &&
        blocks[4].innerHTML == blocks[5].innerHTML
    ) {
        visualizeWin(3, 4, 5)
    } else if (
        blocks[6].innerHTML != '' &&
        blocks[6].innerHTML == blocks[7].innerHTML &&
        blocks[7].innerHTML == blocks[8].innerHTML
    ) {
        visualizeWin(6, 7, 8)
    } else if (
        blocks[0].innerHTML != '' &&
        blocks[0].innerHTML == blocks[3].innerHTML &&
        blocks[3].innerHTML == blocks[6].innerHTML
    ) {
        visualizeWin(0, 3, 6)
    } else if (
        blocks[1].innerHTML != '' &&
        blocks[1].innerHTML == blocks[4].innerHTML &&
        blocks[4].innerHTML == blocks[7].innerHTML
    ) {
        visualizeWin(1, 4, 7)
    } else if (
        blocks[2].innerHTML != '' &&
        blocks[2].innerHTML == blocks[5].innerHTML &&
        blocks[5].innerHTML == blocks[8].innerHTML
    ) {
        visualizeWin(2, 5, 8)
    } else if (
        blocks[0].innerHTML != '' &&
        blocks[0].innerHTML == blocks[4].innerHTML &&
        blocks[4].innerHTML == blocks[8].innerHTML
    ) {
        visualizeWin(0, 4, 8)
    } else if (
        blocks[2].innerHTML != '' &&
        blocks[2].innerHTML == blocks[4].innerHTML &&
        blocks[4].innerHTML == blocks[6].innerHTML
    ) {
        visualizeWin(2, 4, 6)
    } else if (
        blocks[0].innerHTML != '' &&
        blocks[1].innerHTML != '' &&
        blocks[2].innerHTML != '' &&
        blocks[3].innerHTML != '' &&
        blocks[4].innerHTML != '' &&
        blocks[5].innerHTML != '' &&
        blocks[6].innerHTML != '' &&
        blocks[7].innerHTML != '' &&
        blocks[8].innerHTML != ''
    ) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundColor = 'yellow'
        }
        reloadGame()
    }
}
function visualizeWin(index1, index2, index3) {
    blocks[index1].style.backgroundColor = `${isX ? 'green' : 'red'}`
    blocks[index2].style.backgroundColor = `${isX ? 'green' : 'red'}`
    blocks[index3].style.backgroundColor = `${isX ? 'green' : 'red'}`
    reloadGame()
}
function reloadGame() {
    isGame = false
    setTimeout(() => {
        location.reload()
    }, 1000)
}
