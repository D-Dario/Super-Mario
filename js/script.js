const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe-game')
const ghost = document.querySelector('.ghost-game')
const end = document.getElementById('id-end-game')

const jump = () => {
  mario.classList.add('jump-mario')

  setTimeout(() => {
    mario.classList.remove('jump-mario')
  }, 500)
}

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  const ghostPosition = ghost.offsetLeft

  end.style.display = 'none'

  if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    ghost.style.left = `${ghostPosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './images/mario-game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '45px'
    endGame()

    clearInterval(loopGame)
  }

  if (ghostPosition <= 80 && ghostPosition > 0 && marioPosition < 80) {
    ghost.style.animation = 'none'
    ghost.style.left = `${ghostPosition}px`
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './images/mario-game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '75px'
    endGame()

    clearInterval(loopGame)
  }
}, 10)

function endGame() {
  end.style.display = 'block'
}

document.addEventListener('keydown', jump)
